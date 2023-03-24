export interface NoteInt {
  id: number;
  instrument: string;
  active: boolean;
}

export type BeatT = NoteInt[];

export type MeasureT = BeatT[];

export type LoopT = MeasureT[];

export const emptyLoop: LoopT = [
  [
    [
      { id: 1, instrument: '', active: false },
      { id: 2, instrument: '', active: false },
      { id: 3, instrument: '', active: false },
      { id: 4, instrument: '', active: false }
    ],
    [
      { id: 5, instrument: '', active: false },
      { id: 6, instrument: '', active: false },
      { id: 7, instrument: '', active: false },
      { id: 8, instrument: '', active: false }
    ],
    [
      { id: 9, instrument: '', active: false },
      { id: 10, instrument: '', active: false },
      { id: 11, instrument: '', active: false },
      { id: 12, instrument: '', active: false }
    ],
    [
      { id: 13, instrument: '', active: false },
      { id: 14, instrument: '', active: false },
      { id: 15, instrument: '', active: false },
      { id: 16, instrument: '', active: false }
    ]
  ],
  [
    [
      { id: 17, instrument: '', active: false },
      { id: 18, instrument: '', active: false },
      { id: 19, instrument: '', active: false },
      { id: 20, instrument: '', active: false }
    ],
    [
      { id: 21, instrument: '', active: false },
      { id: 22, instrument: '', active: false },
      { id: 23, instrument: '', active: false },
      { id: 24, instrument: '', active: false }
    ],
    [
      { id: 25, instrument: '', active: false },
      { id: 26, instrument: '', active: false },
      { id: 27, instrument: '', active: false },
      { id: 28, instrument: '', active: false }
    ],
    [
      { id: 29, instrument: '', active: false },
      { id: 30, instrument: '', active: false },
      { id: 31, instrument: '', active: false },
      { id: 32, instrument: '', active: false }
    ]
  ],
  [
    [
      { id: 33, instrument: '', active: false },
      { id: 34, instrument: '', active: false },
      { id: 35, instrument: '', active: false },
      { id: 36, instrument: '', active: false }
    ],
    [
      { id: 37, instrument: '', active: false },
      { id: 38, instrument: '', active: false },
      { id: 39, instrument: '', active: false },
      { id: 40, instrument: '', active: false }
    ],
    [
      { id: 41, instrument: '', active: false },
      { id: 42, instrument: '', active: false },
      { id: 43, instrument: '', active: false },
      { id: 44, instrument: '', active: false }
    ],
    [
      { id: 45, instrument: '', active: false },
      { id: 46, instrument: '', active: false },
      { id: 47, instrument: '', active: false },
      { id: 48, instrument: '', active: false }
    ]
  ],
  [
    [
      { id: 49, instrument: '', active: false },
      { id: 50, instrument: '', active: false },
      { id: 51, instrument: '', active: false },
      { id: 52, instrument: '', active: false }
    ],
    [
      { id: 53, instrument: '', active: false },
      { id: 54, instrument: '', active: false },
      { id: 55, instrument: '', active: false },
      { id: 56, instrument: '', active: false }
    ],
    [
      { id: 57, instrument: '', active: false },
      { id: 58, instrument: '', active: false },
      { id: 59, instrument: '', active: false },
      { id: 60, instrument: '', active: false }
    ],
    [
      { id: 61, instrument: '', active: false },
      { id: 62, instrument: '', active: false },
      { id: 63, instrument: '', active: false },
      { id: 64, instrument: '', active: false }
    ]
  ]
]