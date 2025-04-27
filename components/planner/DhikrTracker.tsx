"use client";

import { useState } from "react";
import { dhikrList as initialDhikr, Dhikr } from "@/lib/plannerData";
import { Card, CardContent } from "@/components/ui/card";

export default function DhikrTracker() {
  const [dhikr, setDhikr] = useState<Dhikr[]>(initialDhikr);

  const increment = (idx: number) => {
    setDhikr((prev) =>
      prev.map((d, i) =>
        i === idx && d.done < d.count ? { ...d, done: d.done + 1 } : d
      )
    );
  };
  const reset = (idx: number) => {
    setDhikr((prev) => prev.map((d, i) => (i === idx ? { ...d, done: 0 } : d)));
  };

  return (
    <Card className="bg-green-50/60 border-dotted border-2 border-green-200 rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="font-bold text-lg text-green-900 mb-2">Dhikr</h2>
        <ul className="space-y-2">
          {dhikr.map((d, i) => (
            <li
              key={d.text}
              className="flex items-center justify-between bg-green-100/60 rounded-lg px-3 py-2"
            >
              <span className="font-medium text-green-900">{d.text}</span>
              <div className="flex items-center gap-2">
                <button
                  className="bg-green-200 rounded px-2 py-1 text-xs font-semibold hover:bg-green-300"
                  onClick={() => increment(i)}
                  disabled={d.done >= d.count}
                >
                  +
                </button>
                <span className="text-green-800 text-xs">
                  {d.done} / {d.count}
                </span>
                <button
                  className="bg-gray-100 rounded px-2 py-1 text-xs hover:bg-gray-200"
                  onClick={() => reset(i)}
                >
                  Reset
                </button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
