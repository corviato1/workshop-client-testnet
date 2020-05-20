const annotations = {
  t01010: 'China, Chengdu, top miner',
  t01056: 'China, Ningbo',
  t01123: 'Canada, Mitchell',
  t01068: 'China',
  t01081: 'China',
  t01017: 'China, Shangrao',
  t01024: 'China, Hong Kong, top miner',
  t01321: 'China',
  t02926: 'China, Chongqing, top miner',
  t03066: 'China, Sichuan',
  t03150: 'USA, Irvine',
  t03685: 'Poland, Krakow',
  t03714: 'China, Changsha',
  t03739: 'IPv6 only',
  t06254: 'China, Hangzhou',
  t04168: '64G, USA Palo Alto',
  t09053: 'China, Beijing',
  t014169: '64G, China, Luzhou',
  t014178: 'China, Hangzhou',
  t014364: 'China, Luzhou',
  t015362: 'China, Beijing, top miner',
  t017328: 'China, Wuxi, top miner',
  t026228: 'China, Zhejiang',
  t026230: 'China, Zhejiang',
  t027043: 'China, Guangzhou',
  t027542: 'China, Shanghai',
  t028023: 'China, Yunnan',
  t028066: 'China (NR?)',
  t028092: 'China, Beijing',
  t028149: 'China',
  t028168: 'China, Hefei',
  t028283: 'China',
  t038586: 'China, Wuhan',
  t046397: 'China, Shanghai',
  t047746: 'China, Guangzhou',
  t056183: 'China, Shenzhen',
  t057062: 'China, Shenzhen',
  t057565: 'China, Changsha',
  t067632: 'China, Shenzen, top miner',
  t070863: 'China, Shanghai',
  t074792: 'Latvia, Riga',
  t084935: 'China, Guangdong',
  t093645: 'China, Guilin',
  t099349: 'China, Shaanxi',
  t0100899: 'China, Guilin',
  t0121490: 'China, Guangdong',
  t0122539: 'China, Beijing',
  t0123112: 'China, Guangzhou',
  t0123114: 'China, Huaihua',
  t0123115: 'China, Zhongshan, top miner',
  t0123124: 'China, Guangdong',
  t0123126: 'China, Guangdong',
  t0123160: 'China, Ningbo',
  t0123173: 'China, Guiyang',
  t0123185: 'China, Changsha',
  t0136100: 'China, Hangzhou',
  t0210187: 'Bulgaria',
  t0210504: 'China, Guangdong',
  t0210512: 'China, Guangdong',
  t0210520: 'China, Yibin',
  t0210974: 'China, Beijing',
  t0211510: 'China, Luzhou',
  t0211517: 'South Korea, Goyang-si',
  t0211524: 'USA, Irvine',
  t0211530: 'China, Suzhou',
  t0211549: 'China, Hangzhou',
  t0211566: 'China, Chongqing',
  t0211575: 'China, Shanghai',
  t0211596: 'China, Shanghai',
  t0211611: 'China, Taiyuan',
  t0211707: 'South Korea, Seongnam-si',
  t0211709: 'Singapore/China?',
  t0211930: 'USA, Irvine',
  t0211939: 'China, Huzhou',
  t0211950: 'USA, Palo Alto',
  t0211968: 'China, Hebei',
  t0211973: 'China, Shanghai',
  t0211977: 'China, Guangdong',
  t0211982: 'South Korea, Goyang-si',
  t0211992: 'China, Hangzhou',
  t0212511: 'China, Ningbo',
  t0212516: 'China, Guangzhou',
  t0212527: 'China, Guilin',
  t0212564: 'China, Guangdong',
  t0212629: 'China, Guangdong',
  t0212631: 'China, Foshan',
  t0212635: 'South Korea, Goyang-si',
  t0212637: 'China, Cangzhou',
  t0212641: 'China, Xi\'an',
  t0212650: 'China, Zhongwei',
  t0212667: 'China, Ningxia',
  t0212670: 'South Korea, Yongin-si',
  t0212689: 'China, Foshan',
  t0212943: 'China, Cangzhou',
  t0220265: 'China, Yunnan',
  t0221949: 'China, Changsha',
  t0221959: 'China, Guangdong',
  t0222040: 'China, Guangdong',
  t0222553: 'China, Huaihua',
  t0222565: 'Romania, Bucharest',
  t0222581: 'China, Shenzhen',
  t0222585: 'China, Dongguan',
  t0222569: 'China, Xiamen',
  t0222624: 'China, Guangdong',
  t0222628: 'China, Guangdong',
  t0222648: 'new, China, Guangdong',
  t0222659: 'new, USA, Irvine',
  t0222660: 'new, China, Shenzen',

  // Non-routables (with power)
  t01020: 'NR',
  t01218: 'NR',
  t01267: 'NR',
  t01030: 'NR',
  t01038: 'NR, @dtynn',
  t01043: 'NR',
  t01102: 'NR',
  t03929: 'NR',
  t04242: 'NR',
  t013854: 'NR',
  t014268: 'NR',
  t018495: 'NR',
  t021670: 'NR',
  t026352: 'NR',
  t026366: 'NR',
  t027003: 'NR',
  t028316: 'NR',
  t038713: 'NR',
  t093312: 'NR',
  t0121497: 'NR',
  t0123122: 'NR',
  t0123151: 'NR',
  t0210515: 'NR',
  t0211660: 'NR',
  t0210747: 'NR',
  t0211526: 'NR',
  t0211648: 'NR',
  t0211656: 'NR',
  t0211669: 'NR',
  t0211674: 'NR',
  t0212714: 'NR',
  t0211988: 'NR',

  // Bootstrappers
  t01000: 'bootstrap, NR',
  t01001: 'bootstrap, USA, Ashburn',
  t01002: 'bootstrap, NR',
  t01003: 'bootstrap, NR'
}

export default annotations
