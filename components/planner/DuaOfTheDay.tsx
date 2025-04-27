"use client";

import { useState } from "react";
import { duaOfTheDay } from "@/lib/plannerData";
import { Card, CardContent } from "@/components/ui/card";

export default function DuaOfTheDay() {
  const [dua, setDua] = useState(duaOfTheDay);

  return (
    <Card className="bg-cyan-50/60 border-dotted border-2 border-cyan-200 rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="font-bold text-lg text-cyan-900 mb-2">Dua of the Day</h2>
        <textarea
          className="w-full rounded px-2 py-1 border border-cyan-100 bg-cyan-100/60 text-cyan-900 placeholder:text-cyan-400 focus:outline-cyan-400 min-h-[60px] resize-none"
          value={dua}
          onChange={(e) => setDua(e.target.value)}
        />
      </CardContent>
    </Card>
  );
}
