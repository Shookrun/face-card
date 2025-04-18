import WeeklyCharts from "../weekly-charts";
import SalesLocation from "../sales-location";
import Companies from "../companies";

export default function Dashboard() {
  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WeeklyCharts />

        <SalesLocation />
      </div>

      <Companies />
    </div>
  );
}
