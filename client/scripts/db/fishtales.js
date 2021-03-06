'use strict';

module.exports = {
  name: 'WPC-Fliptronics: Fish Tales',
  version: 'L-5',
  rom: {
    u06: 'FSHTL_5.ROM',
  },
  switchMapping: [
    { id: 13, name: 'CREDIT BUTTON' },
    { id: 14, name: 'PLUMB BOB TILT' },
    { id: 15, name: 'OUTHOLE' },
    { id: 16, name: 'TROUGH 1' },
    { id: 17, name: 'TROUGH 2' },
    { id: 18, name: 'TROUGH 3' },
    { id: 21, name: 'SLAM TILT' },
    { id: 22, name: 'COIN DOOR CLOSED' },
    { id: 23, name: 'TICKED OPTQ' },
    { id: 25, name: 'LEFT OUTLANE' },
    { id: 26, name: 'LEFT RETURN LANE' },
    { id: 27, name: 'LEFT STANDUP 1' },
    { id: 28, name: 'LEFT STANDUP 2' },
    { id: 31, name: 'CAST' },
    { id: 32, name: 'LEFT BOAT EXIT' },
    { id: 33, name: 'RIGHT BOAT EXIT' },
    { id: 34, name: 'SPINNER' },
    { id: 35, name: 'REEL ENTRY' },
    { id: 36, name: 'CATAPULT' },
    { id: 37, name: 'REEL 1 OPTO' },
    { id: 38, name: 'REEL 2 OPTO' },
    { id: 41, name: 'CAPTIVE BALL' },
    { id: 42, name: 'RIGHT BOAT ENTRY' },
    { id: 43, name: 'LEFT BOAT ENTRY' },
    { id: 44, name: 'LIE E' },
    { id: 45, name: 'LIE I' },
    { id: 46, name: 'LIE L' },
    { id: 47, name: 'BALL POPPER' },
    { id: 48, name: 'DROP TARGET' },
    { id: 51, name: 'LEFT JET' },
    { id: 52, name: 'CENTER JET' },
    { id: 53, name: 'RIGHT JET' },
    { id: 54, name: 'RIGHT STANDUP 1' },
    { id: 55, name: 'RIGHT STANDUP 2' },
    { id: 56, name: 'BALL SHOOTER' },
    { id: 57, name: 'LEFT SLING' },
    { id: 58, name: 'RIGHT SLING' },
    { id: 61, name: 'EXTRA BALL' },
    { id: 62, name: 'TOP RIGHT LOOP' },
    { id: 63, name: 'TOP EJECT HOLE' },
    { id: 64, name: 'TOP LEFT LOOP' },
    { id: 65, name: 'RIGHT RETURN' },
    { id: 66, name: 'RIGHT OUTLANE' },
  ],
  fliptronicsMapping: [
    { id: 'F1', name: 'R FLIPPER EOS' },
    { id: 'F2', name: 'R FLIPPER BUTTON' },
    { id: 'F3', name: 'L FLIPPER EOS' },
    { id: 'F4', name: 'L FLIPPER BUTTON' },
  ],
  playfield: {
    //size must be 200x400, lamp positions according to image
    image: 'playfield-ft.jpg',
    lamps: [
      [{ x: 93, y: 165, color: 'WHITE' }], //11
      [{ x: 93, y: 155, color: 'GREEN' }],
      [{ x: 93, y: 145, color: 'LBLUE' }],
      [{ x: 93, y: 135, color: 'ORANGE' }],
      [{ x: 93, y: 125, color: 'RED' }],
      [{ x: 102, y: 25, color: 'YELLOW' }],
      [{ x: 128, y: 23, color: 'YELLOW' }],
      [{ x: 151, y: 25, color: 'YELLOW' }],

      [{ x: 66, y: 260, color: 'YELLOW' }], //21
      [{ x: 84, y: 268, color: 'YELLOW' }],
      [{ x: 100, y: 268, color: 'YELLOW' }],
      [{ x: 119, y: 260, color: 'YELLOW' }],
      [{ x: 50, y: 172, color: 'LPURPLE' }],
      [{ x: 46, y: 148, color: 'YELLOW' }],
      [{ x: 43, y: 123, color: 'YELLOW' }],
      [{ x: 39, y: 102, color: 'RED' }],

      [{ x: 66, y: 277, color: 'YELLOW' }], //31
      [{ x: 84, y: 280, color: 'YELLOW' }],
      [{ x: 100, y: 280, color: 'YELLOW' }],
      [{ x: 119, y: 277, color: 'YELLOW' }],
      [{ x: 110, y: 160, color: 'GREEN' }],
      [{ x: 110, y: 128, color: 'LPURPLE' }],
      [{ x: 77, y: 160, color: 'GREEN' }],
      [{ x: 77, y: 128, color: 'LPURPLE' }],

      [{ x: 75, y: 300, color: 'GREEN' }], //41
      [{ x: 92, y: 300, color: 'GREEN' }],
      [{ x: 92, y: 347, color: 'ORANGE' }],
      [{ x: 107, y: 300, color: 'GREEN' }],
      [{ x: 56, y: 225, color: 'GREEN' }],
      [{ x: 50, y: 234, color: 'GREEN' }],
      [{ x: 48, y: 246, color: 'GREEN' }],
      [{ x: 15, y: 272, color: 'RED' }, { x: 170, y: 272, color: 'RED' }],

      [{ x: 80, y: 332, color: 'YELLOW' }], //51
      [{ x: 91, y: 329, color: 'YELLOW' }],
      [{ x: 92, y: 313, color: 'GREEN' }],
      [{ x: 103, y: 332, color: 'YELLOW' }],
      [{ x: 152, y: 238, color: 'GREEN' }],
      [{ x: 151, y: 226, color: 'GREEN' }],
      [{ x: 147, y: 212, color: 'GREEN' }],
      [{ x: 28, y: 272, color: 'YELLOW' }],

      [{ x: 61, y: 205, color: 'GREEN' }], //61
      [{ x: 74, y: 209, color: 'GREEN' }],
      [{ x: 86, y: 214, color: 'GREEN' }],
      [{ x: 99, y: 214, color: 'GREEN' }],
      [{ x: 110, y: 209, color: 'GREEN' }],
      [{ x: 123, y: 205, color: 'GREEN' }],
      [{ x: 93, y: 196, color: 'RED' }],
      [{ x: 175, y: 272, color: 'YELLOW' }],

      [{ x: 170, y: 84, color: 'YELLOW' }], //71
      [{ x: 152, y: 155, color: 'RED' }],
      [{ x: 158, y: 138, color: 'GREEN' }],
      [{ x: 161, y: 128, color: 'GREEN' }],
      [{ x: 165, y: 117, color: 'GREEN' }],
      [{ x: 168, y: 172, color: 'LPURPLE' }],
      [{ x: 175, y: 151, color: 'RED' }],
      [{ x: 148, y: 121, color: 'ORANGE' }],

      [{ x: 15, y: 60, color: 'YELLOW' }], //81
      [{ x: 15, y: 52, color: 'YELLOW' }],
      [{ x: 15, y: 44, color: 'YELLOW' }],
      [{ x: 15, y: 36, color: 'YELLOW' }],
      [{ x: 15, y: 28, color: 'YELLOW' }],
      [{ x: 0, y: 0, color: 'BLACK' }],
      [{ x: 189, y: 395, color: 'YELLOW' }],
      [{ x: 33, y: 391, color: 'YELLOW' }],
    ],
    flashlamps: [
      { id: 17, x: 38, y: 101 },
      { id: 18, x: 93, y: 196 },
      { id: 19, x: 93, y: 125 },
      { id: 20, x: 93, y: 135 },
      { id: 21, x: 93, y: 145 },
      { id: 22, x: 93, y: 155 },
      { id: 23, x: 93, y: 165 },
      { id: 25, x: 31, y: 153 },
      { id: 26, x: 24, y: 92 }, { id: 26, x: 62, y: 49, },
      { id: 27, x: 168, y: 109 },
      { id: 28, x: 20, y: 180 },
    ],
  },
  skipWmcRomCheck: true,
  features: [
    'wpcFliptronics',
  ],
  initialise: {
    closedSwitches: [
      15, 16, 17, 18,
      22,
      37, 38,
      'F2', 'F4',
    ],
    initialAction: [
      {
        delayMs: 1000,
        source: 'cabinetInput',
        value: 16
      }
    ],
  },
  audio: {
    url: 'sound/fishtales.mp3',
    // Options:
    // - channel: 0 (background music), 1 (music snippet), undefined (sound fx). If channel is defined, the previous sample will be stopped
    // - loop: true (loop sample, used for background music), false (default, play once)
    // - sample: link to audio sprite name
    // - gain: increase or reduce volume of this sample. Range 0-100. 50 as normal
    // - TODO duck: reduce volume of the background music. Range 0-100 in percent
    // - TODO stop: stop playback of background music
    sample: {
      2: { channel: 0, loop: true, sample: 'snd2' },
      3: { channel: 0, loop: true, sample: 'snd3' },
      4: { channel: 0, loop: true, sample: 'snd4' },
      5: { channel: 0, loop: true, sample: 'snd5' },
      6: { channel: 0, loop: true, sample: 'snd6' },
      7: { channel: 0, loop: true, sample: 'snd7' },
      8: { channel: 0, loop: true, sample: 'snd8' },
      9: { channel: 0, loop: true, sample: 'snd9' },
      10: { channel: 0, loop: true, sample: 'snd10' },
      11: { channel: 0, loop: true, sample: 'snd11' },
      12: { channel: 0, loop: true, sample: 'snd12' },
      13: { channel: 0, loop: true, sample: 'snd13' },
      14: { channel: 0, loop: true, sample: 'snd14' },
      15: { channel: 0, loop: true, sample: 'snd15' },
      16: { channel: 0, loop: true, sample: 'snd16' },
      19: { channel: 0, loop: true, sample: 'snd19' },
      20: { channel: 0, loop: true, sample: 'snd20' },
      49: { channel: 0, loop: true, sample: 'snd49' },
      50: { channel: 0, loop: true, sample: 'snd50' },
      51: { channel: 0, loop: true, sample: 'snd51' },
      52: { channel: 0, loop: true, sample: 'snd52' },

      // music snippets
      48: { channel: 1, sample: 'snd48' },
      145: { channel: 1, sample: 'snd145' },

      // samples
      16: { sample: 'snd16' }, //TODO this is a duplicate
      17: { sample: 'snd17' },
      18: { sample: 'snd18' },
      21: { sample: 'snd21' },
      22: { sample: 'snd22' },
      23: { sample: 'snd23' },
      24: { sample: 'snd24' },
      25: { sample: 'snd25' },
      26: { sample: 'snd26' },
      27: { sample: 'snd27' },
      80: { sample: 'snd80' },
      81: { sample: 'snd81' },
      82: { sample: 'snd82' },
      83: { sample: 'snd83' },
      84: { sample: 'snd84' },
      85: { sample: 'snd85' },
      86: { sample: 'snd86' },
      87: { sample: 'snd87' },
      88: { sample: 'snd88' },
      89: { sample: 'snd89' },

      115: { sample: 'snd115' },
      129: { sample: 'snd129' },
      130: { sample: 'snd130' },
      131: { sample: 'snd131' },
      132: { sample: 'snd132' },
      133: { sample: 'snd133' },
      134: { sample: 'snd134' },
      135: { sample: 'snd135' },
      136: { sample: 'snd136' },
      137: { sample: 'snd137' },
      138: { sample: 'snd138' },
      139: { sample: 'snd139' },
      140: { sample: 'snd140' },
      141: { sample: 'snd141' },
      142: { sample: 'snd142' },
      143: { sample: 'snd143' },
      146: { sample: 'snd146' },
      147: { sample: 'snd147' },
      148: { sample: 'snd148' },
      149: { sample: 'snd149' },

      150: { sample: 'snd150' },
      151: { sample: 'snd151' },
      157: { sample: 'snd157' },
      158: { sample: 'snd158' },
      159: { sample: 'snd159' },
      160: { sample: 'snd160' },
      161: { sample: 'snd161' },
      162: { sample: 'snd162' },
      163: { sample: 'snd163' },
      164: { sample: 'snd164' },
      166: { sample: 'snd166' },
      167: { sample: 'snd167' },
      168: { sample: 'snd168' },
      171: { sample: 'snd171' },
      172: { sample: 'snd172' },
      173: { sample: 'snd173' },
      174: { sample: 'snd174' },
      175: { sample: 'snd175' },
      176: { sample: 'snd176' },
      177: { sample: 'snd177' },
      178: { sample: 'snd178' },
      179: { sample: 'snd179' },

      180: { sample: 'snd180' },
      181: { sample: 'snd181' },
      182: { sample: 'snd182' },
      183: { sample: 'snd183' },
      184: { sample: 'snd184' },
      185: { sample: 'snd185' },
      186: { sample: 'snd186' },
      187: { sample: 'snd187' },
      188: { sample: 'snd188' },
      189: { sample: 'snd189' },
      190: { sample: 'snd190' },
      191: { sample: 'snd191' },
      192: { sample: 'snd192' },
      193: { sample: 'snd193' },
      194: { sample: 'snd194' },
      195: { sample: 'snd195' },
      196: { sample: 'snd196' },
      197: { sample: 'snd197' },
      198: { sample: 'snd198' },
      199: { sample: 'snd199' },

      201: { sample: 'snd201' },
      202: { sample: 'snd202' },
      203: { sample: 'snd203' },
      204: { sample: 'snd204' },
      205: { sample: 'snd205' },
      206: { sample: 'snd206' },
      207: { sample: 'snd207' },
      208: { sample: 'snd208' },
      209: { sample: 'snd209' },
      210: { sample: 'snd210' },
      211: { sample: 'snd211' },
      212: { sample: 'snd212' },
      213: { sample: 'snd213' },
      214: { sample: 'snd214' },
      215: { sample: 'snd215' },
      216: { sample: 'snd216' },
      217: { sample: 'snd217' },
      218: { sample: 'snd218' },
      219: { sample: 'snd219' },
      220: { sample: 'snd220' },
      221: { sample: 'snd221' },
      222: { sample: 'snd222' },
      223: { sample: 'snd223' },
      224: { sample: 'snd224' },
      225: { sample: 'snd225' },
      226: { sample: 'snd226' },
      227: { sample: 'snd227' },
      228: { sample: 'snd228' },
      229: { sample: 'snd229' },

      31241: { sample: 'snd31241' },
      31254: { sample: 'snd31254' },
      31259: { sample: 'snd31259' },
      31263: { sample: 'snd31263' },
      31277: { sample: 'snd31277' },
      31278: { sample: 'snd31278' },
      31279: { sample: 'snd31279' },
      31280: { sample: 'snd31280' },

      31233: { sample: 'snd31233' },
      31234: { sample: 'snd31234' },
      31235: { sample: 'snd31235' },
      31236: { sample: 'snd31236' },
      31237: { sample: 'snd31237' },
      31238: { sample: 'snd31238' },
      31239: { sample: 'snd31239' },
      31240: { sample: 'snd31240' },
      31242: { sample: 'snd31242' },
      31243: { sample: 'snd31243' },
      31244: { sample: 'snd31244' },
      31245: { sample: 'snd31245' },
      31246: { sample: 'snd31246' },
      31247: { sample: 'snd31247' },
      31248: { sample: 'snd31248' },
      31249: { sample: 'snd31249' },
      31250: { sample: 'snd31250' },
      31251: { sample: 'snd31251' },
      31252: { sample: 'snd31252' },
      31253: { sample: 'snd31253' },
      31255: { sample: 'snd31255' },
      31256: { sample: 'snd31256' },
      31257: { sample: 'snd31257' },
      31258: { sample: 'snd31258' },
      31260: { sample: 'snd31260' },
      31261: { sample: 'snd31261' },
      31262: { sample: 'snd31262' },
      31264: { sample: 'snd31264' },
      31265: { sample: 'snd31265' },
      31267: { sample: 'snd31267' },
      31268: { sample: 'snd31268' },
      31269: { sample: 'snd31269' },
      31270: { sample: 'snd31270' },
      31271: { sample: 'snd31271' },
      31272: { sample: 'snd31272' },
      31273: { sample: 'snd31273' },
      31274: { sample: 'snd31274' },
      31275: { sample: 'snd31275' },
      31276: { sample: 'snd31276' },
      31281: { sample: 'snd31281' },
      31282: { sample: 'snd31282' },
      31283: { sample: 'snd31283' },
      31284: { sample: 'snd31284' },
    },
    sprite: {
      'snd48': [
        0,
        8048.866213151927
      ],
      'snd145': [
        10000,
        2081.9727891156463
      ],
      'snd2': [
        14000,
        119981.13378684809
      ],
      'snd3': [
        135000,
        119981.36054421769
      ],
      'snd4': [
        256000,
        119981.24716553287
      ],
      'snd5': [
        377000,
        119981.17913832198
      ],
      'snd6': [
        498000,
        119981.24716553287
      ],
      'snd7': [
        619000,
        119981.13378684809
      ],
      'snd8': [
        740000,
        119981.42857142852
      ],
      'snd9': [
        861000,
        119980.0907029478
      ],
      'snd11': [
        982000,
        119980.63492063488
      ],
      'snd12': [
        1103000,
        119981.40589569153
      ],
      'snd13': [
        1224000,
        119984.78458049885
      ],
      'snd14': [
        1345000,
        119980.90702947843
      ],
      'snd16': [
        2196000,
        2009.6598639456715
      ],
      'snd19': [
        1470000,
        119980.86167800442
      ],
      'snd20': [
        1591000,
        119980.90702947843
      ],
      'snd49': [
        1712000,
        119981.31519274376
      ],
      'snd50': [
        1833000,
        119981.29251700675
      ],
      'snd51': [
        1954000,
        119981.22448979574
      ],
      'snd52': [
        2075000,
        119980.86167800466
      ],
      'snd17': [
        2200000,
        1418.0498866212474
      ],
      'snd18': [
        2203000,
        360.8616780043121
      ],
      'snd21': [
        2205000,
        1514.4897959185073
      ],
      'snd22': [
        2208000,
        1704.104308390015
      ],
      'snd23': [
        2211000,
        2807.5283446710273
      ],
      'snd24': [
        2215000,
        3211.8594104308613
      ],
      'snd25': [
        2220000,
        3123.786848072541
      ],
      'snd26': [
        2225000,
        3295.9637188209854
      ],
      'snd27': [
        2230000,
        3217.0748299317893
      ],
      'snd80': [
        2235000,
        117.59637188197303
      ],
      'snd81': [
        2237000,
        115.85034013614859
      ],
      'snd82': [
        2239000,
        347.2335600908991
      ],
      'snd83': [
        2241000,
        304.104308389924
      ],
      'snd84': [
        2243000,
        608.1859410433026
      ],
      'snd85': [
        2245000,
        157.68707482993705
      ],
      'snd86': [
        2247000,
        154.46712018137987
      ],
      'snd87': [
        2249000,
        410.861678004494
      ],
      'snd88': [
        2251000,
        286.5532879818602
      ],
      'snd89': [
        2253000,
        769.4104308388887
      ],
      'snd115': [
        2255000,
        1709.931972789036
      ],
      'snd129': [
        2258000,
        8005.306122448928
      ],
      'snd130': [
        2268000,
        1495.7596371882573
      ],
      'snd131': [
        2271000,
        789.7959183674175
      ],
      'snd132': [
        2273000,
        1686.9160997730432
      ],
      'snd133': [
        2276000,
        431.2244897960227
      ],
      'snd134': [
        2278000,
        438.7528344673228
      ],
      'snd135': [
        2280000,
        427.77777777791925
      ],
      'snd136': [
        2282000,
        1009.1609977325788
      ],
      'snd137': [
        2285000,
        529.5464852606528
      ],
      'snd138': [
        2287000,
        934.7619047621265
      ],
      'snd139': [
        2289000,
        803.6507936508315
      ],
      'snd140': [
        2291000,
        1232.403628117936
      ],
      'snd141': [
        2294000,
        1283.877551020396
      ],
      'snd142': [
        2297000,
        1150.4081632651832
      ],
      'snd143': [
        2300000,
        782.6984126982097
      ],
      'snd146': [
        2302000,
        940.7256235826935
      ],
      'snd147': [
        2304000,
        929.7505668932899
      ],
      'snd148': [
        2306000,
        867.3242630384266
      ],
      'snd149': [
        2308000,
        374.1950113380881
      ],
      'snd150': [
        2310000,
        2051.8140589570066
      ],
      'snd151': [
        2314000,
        2614.421768707416
      ],
      'snd157': [
        2318000,
        704.3310657595612
      ],
      'snd158': [
        2320000,
        1742.5170068027
      ],
      'snd159': [
        2323000,
        2793.9229024941596
      ],
      'snd160': [
        2327000,
        3211.9501133788617
      ],
      'snd161': [
        2332000,
        3117.369614512427
      ],
      'snd162': [
        2337000,
        3290.8843537416033
      ],
      'snd163': [
        2342000,
        3227.6190476191005
      ],
      'snd164': [
        2347000,
        1234.6031746033077
      ],
      'snd166': [
        2350000,
        1199.8639455782723
      ],
      'snd167': [
        2353000,
        769.9999999999818
      ],
      'snd168': [
        2355000,
        8994.852607709618
      ],
      'snd171': [
        2365000,
        948.4580498865398
      ],
      'snd172': [
        2367000,
        1774.920634920818
      ],
      'snd173': [
        2370000,
        1457.5283446711182
      ],
      'snd174': [
        2373000,
        951.0657596370038
      ],
      'snd175': [
        2375000,
        718.140589568975
      ],
      'snd176': [
        2377000,
        973.8775510204505
      ],
      'snd177': [
        2379000,
        725.3741496597286
      ],
      'snd178': [
        2381000,
        1082.0634920632983
      ],
      'snd179': [
        2384000,
        3447.777777777901
      ],
      'snd180': [
        2389000,
        2811.655328798224
      ],
      'snd181': [
        2393000,
        728.1859410431935
      ],
      'snd182': [
        2395000,
        723.8548752834504
      ],
      'snd183': [
        2397000,
        1737.7097505668644
      ],
      'snd184': [
        2400000,
        1099.5238095238165
      ],
      'snd185': [
        2403000,
        2157.9138321994833
      ],
      'snd186': [
        2407000,
        1649.8412698410903
      ],
      'snd187': [
        2410000,
        2527.687074829828
      ],
      'snd188': [
        2414000,
        426.2358276641862
      ],
      'snd189': [
        2416000,
        429.1156462586514
      ],
      'snd190': [
        2418000,
        428.20861678001165
      ],
      'snd191': [
        2420000,
        569.659863945617
      ],
      'snd192': [
        2422000,
        1715.1020408164186
      ],
      'snd193': [
        2425000,
        1716.848072562243
      ],
      'snd194': [
        2428000,
        1715.5782312925112
      ],
      'snd195': [
        2431000,
        1715.0113378684182
      ],
      'snd196': [
        2434000,
        1715.2380952379644
      ],
      'snd197': [
        2437000,
        1715.4875283445108
      ],
      'snd198': [
        2440000,
        1992.698412698246
      ],
      'snd199': [
        2443000,
        1647.4376417231724
      ],
      'snd200': [
        2446000,
        1830.5442176870201
      ],
      'snd201': [
        2449000,
        1069.5918367346167
      ],
      'snd202': [
        2452000,
        4278.95691609956
      ],
      'snd203': [
        2458000,
        1641.224489796059
      ],
      'snd204': [
        2461000,
        7980.929705215203
      ],
      'snd205': [
        2470000,
        1735.2380952379463
      ],
      'snd206': [
        2473000,
        970.3854875283469
      ],
      'snd207': [
        2475000,
        368.57142857161307
      ],
      'snd208': [
        2477000,
        313.877551020596
      ],
      'snd209': [
        2479000,
        1003.1292517005568
      ],
      'snd210': [
        2482000,
        726.3038548753684
      ],
      'snd211': [
        2484000,
        1060.476190476038
      ],
      'snd212': [
        2487000,
        666.6893424035152
      ],
      'snd213': [
        2489000,
        1245.532879818711
      ],
      'snd214': [
        2492000,
        541.4512471656963
      ],
      'snd215': [
        2494000,
        1202.5396825397365
      ],
      'snd216': [
        2497000,
        1669.1609977324333
      ],
      'snd217': [
        2500000,
        2090.476190476238
      ],
      'snd218': [
        2504000,
        942.721088435519
      ],
      'snd219': [
        2506000,
        1513.4013605443215
      ],
      'snd220': [
        2509000,
        1691.2925170067865
      ],
      'snd221': [
        2512000,
        1710.4308390021288
      ],
      'snd222': [
        2515000,
        2808.7074829932135
      ],
      'snd223': [
        2519000,
        2181.0204081634765
      ],
      'snd224': [
        2523000,
        2419.7505668935264
      ],
      'snd225': [
        2527000,
        1248.7981859412685
      ],
      'snd226': [
        2530000,
        1793.7868480726138
      ],
      'snd227': [
        2533000,
        2671.904761904898
      ],
      'snd228': [
        2537000,
        1745.6235827662567
      ],
      'snd229': [
        2540000,
        1066.4625850340599
      ],
      'snd31241': [
        2543000,
        3760.9070294784033
      ],
      'snd31254': [
        2548000,
        3524.2176870747244
      ],
      'snd31259': [
        2553000,
        1896.8707482995342
      ],
      'snd31263': [
        2556000,
        751.4965986392781
      ],
      'snd31277': [
        2558000,
        1713.106575963593
      ],
      'snd31278': [
        2561000,
        2001.5873015872785
      ],
      'snd31279': [
        2565000,
        1420.8616780047123
      ],
      'snd31280': [
        2568000,
        361.70068027195157
      ],
      'snd15': [
        2570000,
        3724.126984126997
      ],
      'snd31233': [
        2575000,
        1057.6190476190277
      ],
      'snd31234': [
        2578000,
        470.45351473934716
      ],
      'snd31235': [
        2580000,
        4327.097505668917
      ],
      'snd31236': [
        2586000,
        2324.2630385489065
      ],
      'snd31237': [
        2590000,
        2733.356009070121
      ],
      'snd31238': [
        2594000,
        2486.5532879816783
      ],
      'snd31239': [
        2598000,
        2056.938775510389
      ],
      'snd31240': [
        2602000,
        1513.0385487527747
      ],
      'snd31242': [
        2605000,
        2653.8321995462866
      ],
      'snd31243': [
        2609000,
        2786.2131519273134
      ],
      'snd31244': [
        2613000,
        2704.4217687075616
      ],
      'snd31245': [
        2617000,
        1256.5079365081147
      ],
      'snd31246': [
        2620000,
        779.750566893199
      ],
      'snd31247': [
        2622000,
        1473.446712018358
      ],
      'snd31248': [
        2625000,
        1452.063492063644
      ],
      'snd31249': [
        2628000,
        1929.7278911562898
      ],
      'snd31250': [
        2631000,
        845.668934240166
      ],
      'snd31251': [
        2633000,
        753.8548752836505
      ],
      'snd31252': [
        2635000,
        1132.8798185941196
      ],
      'snd31253': [
        2638000,
        1670.975056689258
      ],
      'snd31255': [
        2641000,
        976.031746031822
      ],
      'snd31256': [
        2643000,
        3706.3038548753866
      ],
      'snd31257': [
        2648000,
        3410.317460317401
      ],
      'snd31258': [
        2653000,
        1441.5192743763328
      ],
      'snd31260': [
        2656000,
        1631.3832199548415
      ],
      'snd31261': [
        2659000,
        3749.818594104454
      ],
      'snd31262': [
        2664000,
        884.4217687073979
      ],
      'snd31264': [
        2666000,
        1916.6213151929696
      ],
      'snd31265': [
        2669000,
        1309.8866213153997
      ],
      'snd31267': [
        2672000,
        2482.22222222239
      ],
      'snd31268': [
        2676000,
        2388.4580498865944
      ],
      'snd31269': [
        2680000,
        2258.3446712019395
      ],
      'snd31270': [
        2684000,
        2662.1088435372258
      ],
      'snd31271': [
        2688000,
        1477.9591836736472
      ],
      'snd31272': [
        2691000,
        3400.0907029476366
      ],
      'snd31273': [
        2696000,
        1446.8480725622612
      ],
      'snd31274': [
        2699000,
        2023.7188208616317
      ],
      'snd31275': [
        2703000,
        1059.727891156399
      ],
      'snd31276': [
        2706000,
        1714.2630385487792
      ],
      'snd31281': [
        2709000,
        1622.2222222222626
      ],
      'snd31282': [
        2712000,
        1391.9047619046978
      ],
      'snd31283': [
        2715000,
        1251.3832199547323
      ],
      'snd31284': [
        2718000,
        1989.8412698412358
      ]
    },
  },
};
