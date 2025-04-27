"use client";

import { useState } from "react";
import { mealPlan as initialMealPlan, waterGlasses } from "@/lib/plannerData";
import { Card, CardContent } from "@/components/ui/card";

export default function MealPlan() {
  const [meals, setMeals] = useState(initialMealPlan);
  const [water, setWater] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeals({ ...meals, [e.target.name]: e.target.value });
  };

  return (
    <Card className="bg-yellow-50/60 border-dotted border-2 border-yellow-200 rounded-2xl shadow-md">
      <CardContent className="p-4">
        <h2 className="font-bold text-lg text-yellow-900 mb-2">Meal Plan</h2>
        <div className="space-y-2 mb-3">
          <input
            className="w-full rounded px-2 py-1 border border-yellow-100 bg-yellow-100/60 text-yellow-900 placeholder:text-yellow-400 focus:outline-yellow-400"
            placeholder="Breakfast"
            name="breakfast"
            value={meals.breakfast}
            onChange={handleChange}
          />
          <input
            className="w-full rounded px-2 py-1 border border-yellow-100 bg-yellow-100/60 text-yellow-900 placeholder:text-yellow-400 focus:outline-yellow-400"
            placeholder="Lunch"
            name="lunch"
            value={meals.lunch}
            onChange={handleChange}
          />
          <input
            className="w-full rounded px-2 py-1 border border-yellow-100 bg-yellow-100/60 text-yellow-900 placeholder:text-yellow-400 focus:outline-yellow-400"
            placeholder="Dinner"
            name="dinner"
            value={meals.dinner}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          {[...Array(waterGlasses)].map((_, i) => (
            <button
              key={i}
              className={`w-7 h-7 rounded-full border-2 border-yellow-300 flex items-center justify-center ${
                i < water ? "bg-yellow-400" : "bg-white"
              }`}
              onClick={() => setWater(i + 1)}
              aria-label={`Water glass ${i + 1}`}
              type="button"
            >
              <span className="text-yellow-700">💧</span>
            </button>
          ))}
          <span className="ml-2 text-xs text-yellow-700">Water</span>
        </div>
      </CardContent>
    </Card>
  );
}
