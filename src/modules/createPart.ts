// this function takes a loop object (form of the Loop type) and outputs an array that can be parsed by Tone.Part()

// [[position, note], [position, note], etc.]

import { LoopT, NoteInt } from '../model'

export function createPart(loop: LoopT) {

  const flatLoop = loop.flat(3);
  const noteArr: string[][] = [];

  const getPos = (note: NoteInt) => {
    const ind = note.id - 1; // first note has id 1, should have index 0

    const sixteenths = ind % 4;
    const beats = ((ind - sixteenths) / 4) % 4
    const measures = ((ind - sixteenths) / 4 - beats) / 4;

    return `${measures}:${beats}:${sixteenths}`
  }

  // loop through and make an output array
  for (let i = 0; i < flatLoop.length; i++) {
    let pos = getPos(flatLoop[i]);

    if (flatLoop[i].active) {
      noteArr.push([pos, 'c1'])
    }
  }

  return noteArr;
}