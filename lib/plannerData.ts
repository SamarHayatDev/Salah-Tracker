// Types
export type Prayer = {
  name: string;
  time: string;
  isDone: boolean;
  ampm?: string;
};

export type Dhikr = {
  text: string;
  count: number;
  done: number;
};

export type MealPlan = {
  breakfast: string;
  lunch: string;
  dinner: string;
};

export type QuranReading = {
  juz: string;
  surah: string;
  verses: string;
};

export type ToDo = {
  text: string;
  done: boolean;
};

// Mock Data
export const prayers: Prayer[] = [
  { name: "Tahajjud", time: "03:30 AM", isDone: false, ampm: "am" },
  { name: "Fajr", time: "05:30 AM", isDone: false, ampm: "am" },
  { name: "Dhuhr", time: "01:30 PM", isDone: false, ampm: "pm" },
  { name: "Asr", time: "04:45 PM", isDone: false, ampm: "pm" },
  { name: "Maghrib", time: "07:15 PM", isDone: false, ampm: "pm" },
  { name: "Isha", time: "09:00 PM", isDone: false, ampm: "pm" },
  { name: "Witr", time: "09:45 PM", isDone: false, ampm: "pm" },
];

export const dhikrList: Dhikr[] = [
  { text: "Subhan Allah", count: 100, done: 0 },
  { text: "Alhamdulillah", count: 100, done: 0 },
  { text: "Allahu Akbar", count: 100, done: 0 },
  { text: "Astaghfirullah", count: 100, done: 0 },
];

export const mealPlan: MealPlan = {
  breakfast: "",
  lunch: "",
  dinner: "",
};

export const waterGlasses = 5;

export const quranReading: QuranReading = {
  juz: "",
  surah: "",
  verses: "",
};

export const toDoList: ToDo[] = [
  { text: "", done: false },
  { text: "", done: false },
  { text: "", done: false },
  { text: "", done: false },
  { text: "", done: false },
];

export const duaOfTheDay =
  "O Allah, help me remember You, thank You, and worship You in the best manner.";

export const gratefulFor = "";

export const getIslamicDate = () => {
  return "28 Ramadan 1445";
};
