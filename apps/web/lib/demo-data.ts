export type Block = {
  course: string;
  code: string;
  room: string;
  day: number;
  slot: number;
  span: number;
  color: string;
};

export const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export const HOUR_LABELS = [
  { slot: 0, label: "8 AM" },
  { slot: 2, label: "9 AM" },
  { slot: 4, label: "10 AM" },
  { slot: 6, label: "11 AM" },
  { slot: 8, label: "12 PM" },
  { slot: 10, label: "1 PM" },
  { slot: 12, label: "2 PM" },
  { slot: 14, label: "3 PM" },
];

export const SLOT_COUNT = 16;

export const WEEK: Block[] = [
  { course: "Calculus II", code: "MATH 241", room: "B-204", day: 0, slot: 2, span: 4, color: "#8b7cff" },
  { course: "Intro to Psychology", code: "PSY 110", room: "C-118", day: 0, slot: 10, span: 4, color: "#4fb59f" },
  { course: "Organic Chemistry", code: "CHEM 221", room: "Sci-112", day: 1, slot: 2, span: 4, color: "#d98a5b" },
  { course: "Calculus II", code: "MATH 241", room: "B-204", day: 1, slot: 6, span: 3, color: "#8b7cff" },
  { course: "Modern World History", code: "HIST 203", room: "A-009", day: 2, slot: 2, span: 4, color: "#c9648f" },
  { course: "Calculus II", code: "MATH 241", room: "B-204", day: 2, slot: 11, span: 3, color: "#8b7cff" },
  { course: "Calculus II", code: "MATH 241", room: "B-204", day: 3, slot: 2, span: 4, color: "#8b7cff" },
  { course: "Organic Chemistry", code: "CHEM 221L", room: "Lab 3", day: 3, slot: 14, span: 2, color: "#d98a5b" },
  { course: "Intro to Psychology", code: "PSY 110", room: "C-118", day: 4, slot: 2, span: 4, color: "#4fb59f" },
  { course: "Modern World History", code: "HIST 203", room: "A-009", day: 4, slot: 10, span: 4, color: "#c9648f" },
];

export const OCR_TEXT = [
  "FALL TERM · GRID 4A (rev. 3)",
  "        MON    TUE   WED    THU    FRI",
  "P1  9:00  M241  C221  H203  P110  M241",
  "P2 10:45  C221  M241  H203  P110  M241",
  "P3 1:15   H203  C221L M241  M241  P110",
  "P4  3:00  P110  M241  H203  C221L H203",
  "rm posted at door. finals in dec.",
  "subject to change w/ot notice",
];
