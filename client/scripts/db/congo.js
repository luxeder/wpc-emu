'use strict';

module.exports = {
  name: 'WPC-95: Congo',
  version: '2.1',
  rom: {
    u06: 'cg_g11.2_1',
  },
  switchMapping: [
    { id: 11, name: 'INNER LEFT LOOP' },
    { id: 12, name: 'UPPER LOOP' },
    { id: 13, name: 'START BUTTON' },
    { id: 14, name: 'PLUMB BOB TILT' },
    { id: 15, name: 'JET EXIT' },
    { id: 16, name: 'LEFT OUTLANE' },
    { id: 17, name: 'RIGHT RETURN LANE' },
    { id: 18, name: 'SHOOTER LANE' },

    { id: 21, name: 'SLAM TILT' },
    { id: 22, name: 'COIN DOOR CLOSED' },
    { id: 25, name: 'RIGHT EJECT RUBBER' },
    { id: 26, name: 'LEFT RETURN INLANE' },
    { id: 27, name: 'RIGHT OUTLANE' },
    { id: 28, name: '"YOU" STANDUP TARGET"' },

    { id: 31, name: 'TROUGH EJECT' },
    { id: 32, name: 'TROUGH BALL 1' },
    { id: 33, name: 'TROUGH BALL 2' },
    { id: 34, name: 'TROUGH BALL 3' },
    { id: 35, name: 'TROUGH BALL 4' },
    { id: 36, name: 'VOLCANO STACK' },
    { id: 37, name: 'MYSTERY EJECT' },
    { id: 38, name: 'RIGHT EJECT' },

    { id: 41, name: 'LOCK BALL 1' },
    { id: 42, name: 'LOCK BALL 2' },
    { id: 43, name: 'LOCK BALL 3' },
    { id: 44, name: 'MINE SHAFT' },
    { id: 45, name: 'LEFT LOOP' },
    { id: 46, name: 'LEFT BANK TOP' },
    { id: 47, name: 'LEFT BANK CENTER' },
    { id: 48, name: 'LEFT BANK BOTTOM' },

    { id: 51, name: 'TRAVI' },
    { id: 52, name: 'COM' },
    { id: 53, name: '2-WAY POPPER' },
    { id: 54, name: '"WE ARE" STANDUP TARGET' },
    { id: 55, name: '"WATCHING" STANDUP TARGET' },
    { id: 56, name: 'PERIMETER DEFENSE' },
    { id: 57, name: 'LEFT RAMP ENTER' },
    { id: 58, name: 'LEFT RAMP EXIT' },

    { id: 61, name: 'LEFT SLINGSHOT' },
    { id: 62, name: 'RIGHT SLINGSHOT' },
    { id: 63, name: 'LEFT JET BUMPER' },
    { id: 64, name: 'RIGHT JET BUMPER' },
    { id: 65, name: 'BOTTOM JET BUMPER' },
    { id: 67, name: 'RIGHT RAMP ENTER' },
    { id: 68, name: 'RIGHT RAMP EXIT' },

    { id: 71, name: '(A)MY' },
    { id: 72, name: 'A(M)Y' },
    { id: 73, name: 'AM(Y)' },
    { id: 74, name: '(C)ONGO' },
    { id: 75, name: 'C(O)NGO' },
    { id: 76, name: 'CO(N)GO' },
    { id: 77, name: 'CON(G)O' },
    { id: 78, name: 'CONG(O)' },
  ],
  fliptronicsMapping: [
    { id: 'F1', name: 'R FLIPPER EOS' },
    { id: 'F2', name: 'R FLIPPER BUTTON' },
    { id: 'F3', name: 'L FLIPPER EOS' },
    { id: 'F4', name: 'L FLIPPER BUTTON' },
    { id: 'F5', name: 'RIGHT SPINNER' },
    { id: 'F6', name: 'UR FLIPPER BUT' },
    { id: 'F7', name: 'LEFT SPINNER' },
    { id: 'F8', name: 'UL FLIPPER BUT' },
  ],
  playfield: {
    //size must be 200x400, lamp positions according to image
    image: 'playfield-congo.jpg',
  },
  skipWmcRomCheck: true,
  features: [
    'securityPic',
    'wpc95',
  ],
  initialise: {
    closedSwitches: [
      22,
      //OPTO SWITCHES: 31, 32, 33, 34, 35, 36, 41, 42, 43
      31, 41, 42, 43,
      'F2', 'F4', 'F6', 'F8',
    ],
    initialAction: [
      {
        delayMs: 1000,
        source: 'cabinetInput',
        value: 16
      }
    ],
  }
};
