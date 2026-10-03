export type Block = {
  course: string;
  code: string;
  room: string;
  day: number;
  /** 30-minute slots from 08:00. */
  slot: number;
  color: string;
};

export const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const CALC = { course: "Calculus II", code: "MATH 241", room: "B-204", color: "#8b7cff" };
const PSY = { course: "Intro to Psychology", code: "PSY 110", room: "C-118", color: "#4fb59f" };
const CHEM = { course: "Organic Chemistry", code: "CHEM 221", room: "Sci-112", color: "#d98a5b" };
const LAB = { course: "Organic Chemistry", code: "CHEM 221L", room: "Lab 3", color: "#d98a5b" };
const HIST = { course: "Modern World History", code: "HIST 203", room: "A-009", color: "#c9648f" };

export const WEEK: Block[] = [
  { ...CALC, day: 0, slot: 2 },
  { ...CHEM, day: 0, slot: 6 },
  { ...HIST, day: 0, slot: 10 },
  { ...PSY, day: 0, slot: 14 },

  { ...CALC, day: 1, slot: 2 },
  { ...PSY, day: 1, slot: 6 },
  { ...CHEM, day: 1, slot: 10 },
  { ...HIST, day: 1, slot: 14 },

  { ...CHEM, day: 2, slot: 2 },
  { ...HIST, day: 2, slot: 6 },
  { ...CALC, day: 2, slot: 10 },
  { ...PSY, day: 2, slot: 14 },

  { ...CALC, day: 3, slot: 2 },
  { ...HIST, day: 3, slot: 6 },
  { ...LAB, day: 3, slot: 10 },
  { ...PSY, day: 3, slot: 14 },

  { ...PSY, day: 4, slot: 2 },
  { ...CALC, day: 4, slot: 6 },
  { ...HIST, day: 4, slot: 10 },
];

export const OCR_TEXT = [
  "FALL TERM · GRID 4A (rev. 3)",
  "        MON    TUE   WED    THU    FRI",
  "P1  9:00  M241  M241  C221  M241  P110",
  "P2 10:45  C221  P110  H203  H203  M241",
  "P3 1:15   H203  C221  M241  C221L H203",
  "P4  3:00  P110  H203  P110  P110  —",
  "rm posted at door. finals in dec.",
  "subject to change w/ot notice",
];
