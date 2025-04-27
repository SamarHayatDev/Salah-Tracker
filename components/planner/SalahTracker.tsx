"use client";

import { useState } from "react";
import {
  prayers as initialPrayers,
  Prayer,
  getIslamicDate,
} from "@/lib/plannerData";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle } from "lucide-react";

export default function SalahTracker() {
  const [prayers, setPrayers] = useState<Prayer[]>(initialPrayers);

  const handleToggle = (name: string) => {
    setPrayers((prev) =>
      prev.map((prayer) =>
        prayer.name === name ? { ...prayer, isDone: !prayer.isDone } : prayer
      )
    );
  };

  const completed = prayers.filter((p) => p.isDone).length;
  const progress = (completed / prayers.length) * 100;

  return (
    <Card className="bg-blue-50/60 border-dotted border-2 border-blue-200 rounded-2xl shadow-md">
      <CardContent className="p-4">
        <div className="flex flex-col items-center mb-2">
          <h2 className="font-bold text-xl text-blue-900">Salah Tracker</h2>
          <span className="text-xs text-blue-700">{getIslamicDate()}</span>
        </div>
        <div className="mb-2">
          <Progress value={progress} className="h-2 bg-blue-100" />
          <div className="text-center text-xs text-blue-700 mt-1">
            {completed}/{prayers.length} completed
          </div>
        </div>
        <ul className="space-y-2">
          {prayers.map((prayer) => (
            <li
              key={prayer.name}
              className="flex items-center justify-between bg-blue-100/60 rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-2">
                {prayer.isDone ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
                <span className="font-medium text-blue-900">{prayer.name}</span>
                <span className="ml-2 text-xs text-blue-600">
                  {prayer.ampm}
                </span>
              </div>
              <Switch
                checked={prayer.isDone}
                onCheckedChange={() => handleToggle(prayer.name)}
                className="data-[state=checked]:bg-green-500"
              />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
