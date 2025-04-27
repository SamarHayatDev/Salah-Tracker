"use client";

import { useState } from "react";
import { prayers, getIslamicDate, Prayer } from "@/lib/salahData";
import { PrayerCard } from "./PrayerCard";
import { Progress } from "@/components/ui/progress";

export function SalahTracker() {
  const [prayersState, setPrayersState] = useState<Prayer[]>(prayers);

  const handleTogglePrayer = (name: string) => {
    setPrayersState((prev) =>
      prev.map((prayer) =>
        prayer.name === name ? { ...prayer, isDone: !prayer.isDone } : prayer
      )
    );
  };

  const completedPrayers = prayersState.filter((p) => p.isDone).length;
  const progress = (completedPrayers / prayersState.length) * 100;

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-800">Salah Tracker</h1>
        <p className="text-gray-600">{getIslamicDate()}</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Progress: {completedPrayers}/{prayersState.length}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="space-y-4">
        {prayersState.map((prayer) => (
          <PrayerCard
            key={prayer.name}
            prayer={prayer}
            onToggle={handleTogglePrayer}
          />
        ))}
      </div>
    </div>
  );
}
