"use client";

import { Prayer } from "@/lib/salahData";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

interface PrayerCardProps {
  prayer: Prayer;
  onToggle: (name: string) => void;
}

export function PrayerCard({ prayer, onToggle }: PrayerCardProps) {
  return (
    <Card className="w-full bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {prayer.isDone ? (
            <CheckCircle2 className="h-6 w-6 text-green-500" />
          ) : (
            <Circle className="h-6 w-6 text-gray-300" />
          )}
          <div>
            <h3 className="font-semibold text-lg">{prayer.name}</h3>
            <p className="text-sm text-gray-500">{prayer.time}</p>
          </div>
        </div>
        <Switch
          checked={prayer.isDone}
          onCheckedChange={() => onToggle(prayer.name)}
          className="data-[state=checked]:bg-green-500"
        />
      </CardContent>
    </Card>
  );
}
