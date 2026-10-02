export type DemoPeriod = {
  period: string;
  time: string;
  grid: string[][];
};

export type DemoClass = {
  course: string;
  short: string;
  day: string;
  time: string;
  room: string;
};

export const PERIODS: DemoPeriod[] = [
  {
    period: "P1",
    time: "9:00",
    grid: [
      ["MATH 241", "PSY 110", "CHEM 221", "HIST 203", "MATH 241"],
    ],
  },
  {
    period: "P2",
    time: "10:45",
    grid: [["CHEM 221", "MATH 241", "HIST 203", "PSY 110", "MATH 241"]],
  },
  {
    period: "P3",
    time: "1:15",
    grid: [["HIST 203", "CHEM 221L", "MATH 241", "MATH 241", "PSY 110"]],
  },
  {
    period: "P4",
    time: "3:00",
    grid: [["PSY 110", "MATH 241", "HIST 203", "CHEM 221L", "HIST 203"]],
  },
];

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export const ROOMS: Record<string, string> = {
  "MATH 241": "B-204",
  "PSY 110": "C-118",
  "CHEM 221": "Sci-112",
  "CHEM 221L": "Lab 3",
  "HIST 203": "A-009",
};

export const CLASSES: DemoClass[] = [
  { course: "Calculus II", short: "MATH 241", day: "Monday", time: "9:00 – 10:35", room: "B-204" },
  { course: "Intro to Psychology", short: "PSY 110", day: "Monday", time: "3:00 – 4:35", room: "C-118" },
  { course: "Organic Chemistry", short: "CHEM 221", day: "Tuesday", time: "9:00 – 10:35", room: "Sci-112" },
  { course: "Calculus II", short: "MATH 241", day: "Tuesday", time: "10:45 – 12:20", room: "B-204" },
  { course: "Modern World History", short: "HIST 203", day: "Wednesday", time: "9:00 – 10:35", room: "A-009" },
  { course: "Calculus II", short: "MATH 241", day: "Wednesday", time: "1:15 – 2:50", room: "B-204" },
  { course: "Organic Chemistry", short: "CHEM 221L", day: "Thursday", time: "3:00 – 4:35", room: "Lab 3" },
  { course: "Intro to Psychology", short: "PSY 110", day: "Friday", time: "1:15 – 2:50", room: "C-118" },
];