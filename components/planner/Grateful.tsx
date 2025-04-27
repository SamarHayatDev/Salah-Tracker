"use client";

import { useState } from "react";
import { gratefulFor } from "@/lib/plannerData";
import { Card, CardContent } from "@/components/ui/card";

export default function Grateful() {
  const [grateful, setGrateful] = useState(gratefulFor);

  return (
    <Card className="bg-blue-100/60 border-dotted border-2 border-blue-200 rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="font-bold text-lg text-blue-900 mb-2">
          Alhamdulillah, I am grateful for:
        </h2>
        <textarea
          className="w-full rounded px-2 py-1 border border-blue-100 bg-blue-50/60 text-blue-900 placeholder:text-blue-400 focus:outline-blue-400 min-h-[60px] resize-none"
          value={grateful}
          onChange={(e) => setGrateful(e.target.value)}
        />
      </CardContent>
    </Card>
  );
}
