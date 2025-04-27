export type Prayer = {
  name: string;
  time: string;
  isDone: boolean;
};

export const prayers: Prayer[] = [
  {
    name: "Fajr",
    time: "05:30 AM",
    isDone: false,
  },
  {
    name: "Dhuhr",
    time: "01:30 PM",
    isDone: false,
  },
  {
    name: "Asr",
    time: "04:45 PM",
    isDone: false,
  },
  {
    name: "Maghrib",
    time: "07:15 PM",
    isDone: false,
  },
  {
    name: "Isha",
    time: "09:00 PM",
    isDone: false,
  },
];

export const getIslamicDate = () => {
  return "28 Ramadan 1445";
};
