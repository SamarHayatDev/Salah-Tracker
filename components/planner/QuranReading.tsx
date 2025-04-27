"use client";

import { useState } from "react";
import { quranReading as initialQuran } from "@/lib/plannerData";
import { Card, CardContent } from "@/components/ui/card";

export default function QuranReading() {
  const [quran, setQuran] = useState(initialQuran);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuran({ ...quran, [e.target.name]: e.target.value });
  };

  return (
    <Card className="bg-purple-50/60 border-dotted border-2 border-purple-200 rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="font-bold text-lg text-purple-900 mb-2">
          Quran Reading
        </h2>
        <div className="space-y-2">
          <input
            className="w-full rounded px-2 py-1 border border-purple-100 bg-purple-100/60 text-purple-900 placeholder:text-purple-400 focus:outline-purple-400"
            placeholder="Juz"
            name="juz"
            value={quran.juz}
            onChange={handleChange}
          />
          <input
            className="w-full rounded px-2 py-1 border border-purple-100 bg-purple-100/60 text-purple-900 placeholder:text-purple-400 focus:outline-purple-400"
            placeholder="Surah"
            name="surah"
            value={quran.surah}
            onChange={handleChange}
          />
          <input
            className="w-full rounded px-2 py-1 border border-purple-100 bg-purple-100/60 text-purple-900 placeholder:text-purple-400 focus:outline-purple-400"
            placeholder="Verses"
            name="verses"
            value={quran.verses}
            onChange={handleChange}
          />
        </div>
      </CardContent>
    </Card>
  );
}
