// app/dashboard/page.jsx
import SummaryCards from "../components/SummaryCards";
import UpcomingCats from "../components/UpcomingCats";
import Alerts from "../components/Alerts";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white min-h-screen p-5">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-3">Home</li>
          <li className="mb-3">Units</li>
          <li className="mb-3">Alerts</li>
          <li className="mb-3">Profile</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">
          Welcome, Student 👋
        </h1>

        <SummaryCards />
        <div className="grid grid-cols-2 gap-6 mt-6">
          <UpcomingCats />
          <Alerts />
        </div>
      </div>
    </div>
  );
}