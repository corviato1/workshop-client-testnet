import { useEffect, useCallback } from 'react'
import { LotusRPC } from '@filecoin-shipyard/lotus-client-rpc'
import { BrowserProvider } from '@filecoin-shipyard/lotus-client-provider-browser'
import { testnet } from '@filecoin-shipyard/lotus-client-schema'
import { api, secure } from '../config'

export default function useTestgroundNet ({ appState, updateAppState }) {
  const updateAvailable = useCallback(
    updateFunc => {
      updateAppState(draft => {
        if (!draft.available) {
          draft.available = []
        }
        updateFunc(draft.available)
      })
    },
    [updateAppState]
  )
  const { selectedNode, nodesScanned, rescan, genesisCid } = appState

  useEffect(() => {
    if (nodesScanned && !(rescan > nodesScanned)) return
    let state = { canceled: false }
    updateAvailable(draft => {
      draft.length = 0
    })
    async function run () {
      if (state.canceled) return
      if (!genesisCid) return
      const paramsUrl =
        (secure ? 'https://' : 'http://') + `${api}/0/testplan/params`
      const response = await fetch(paramsUrl)
      const {
        TestInstanceCount: nodeCount,
        TestRun: testgroundRunId
      } = await response.json()
      if (state.canceled) return
      const available = {}
      for (let i = 0; i < nodeCount; i++) {
        try {
          const url =
            (secure ? 'https://' : 'http://') + `${api}/${i}/node/rpc/v0`
          const provider = new BrowserProvider(url, { transport: 'http' })
          const client = new LotusRPC(provider, { schema: testnet.fullNode })
          await client.version()
          available[i] = true
          updateAvailable(draft => {
            draft[i] = true
          })
        } catch (e) {
          console.warn(`Error connecting to node ${i}`, e)
        }
      }
      updateAppState(draft => {
        draft.nodesScanned = Date.now()
        draft.testgroundRunId = testgroundRunId
      })
      if (
        typeof selectedNode === 'undefined' ||
        selectedNode > Object.keys(available).length ||
        !available[selectedNode]
      ) {
        // Select a random node
        const keys = Object.keys(available)
        const randomIndex = Math.floor(Math.random() * Math.floor(keys.length))
        updateAppState(draft => {
          draft.selectedNode = Number(keys[randomIndex])
        })
      }
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [
    updateAppState,
    updateAvailable,
    nodesScanned,
    selectedNode,
    genesisCid,
    rescan
  ])

  useEffect(() => {
    let state = { canceled: false }
    async function run () {
      if (state.canceled) return
      const url = (secure ? 'https://' : 'http://') + `${api}/0/node/rpc/v0`
      const provider = new BrowserProvider(url, { transport: 'http' })
      const client = new LotusRPC(provider, { schema: testnet.fullNode })
      try {
        const {
          Cids: [{ '/': newGenesisCid }]
        } = await client.chainGetGenesis()
        console.log('Genesis CID:', newGenesisCid)
        const updated = newGenesisCid !== genesisCid
        updateAppState(draft => {
          if (draft.genesisCid && draft.genesisCid !== newGenesisCid) {
            console.log('Old Genesis is different, resetting', draft.genesisCid)
            for (const prop in draft) {
              delete draft[prop]
            }
          }
          draft.genesisCid = newGenesisCid
        })
        if (updated) {
          const versionInfo = await client.version()
          console.log('Version Info:', versionInfo)
          const genesisMinerInfo = await client.stateMinerInfo('t01000', [])
          console.log('Genesis Miner Info:', genesisMinerInfo)
          updateAppState(draft => {
            draft.versionInfo = versionInfo
            draft.sectorSize = genesisMinerInfo.SectorSize
          })
        }
      } catch (e) {
        console.warn('Error fetching genesis:', e)
      }
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [updateAppState, genesisCid, rescan])
}
