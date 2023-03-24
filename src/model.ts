export interface Note {
  instrument: string;
  active: boolean;
}

export type Beat = Note[];

export type Measure = Beat[];

export type Loop = Measure[];