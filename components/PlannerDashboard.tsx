import SalahTracker from "./planner/SalahTracker";
import DhikrTracker from "./planner/DhikrTracker";
import MealPlan from "./planner/MealPlan";
import QuranReading from "./planner/QuranReading";
import DuaOfTheDay from "./planner/DuaOfTheDay";
import ToDoList from "./planner/ToDoList";
import Grateful from "./planner/Grateful";

export default function PlannerDashboard() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <SalahTracker />
        <DhikrTracker />
        <QuranReading />
      </div>
      <div className="space-y-6">
        <DuaOfTheDay />
        <MealPlan />
        <ToDoList />
        <Grateful />
      </div>
    </div>
  );
}
