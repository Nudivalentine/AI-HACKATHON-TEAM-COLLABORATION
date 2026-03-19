// components/Alerts.jsx
export default function Alerts() {
  const alerts = [
    "CAT reminder sent for CS101",
    "Marks for MATH202 are available",
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold mb-4">Recent Alerts</h3>

      {alerts.map((alert, index) => (
        <p key={index} className="text-sm mb-2">
          • {alert}
        </p>
      ))}
    </div>
  );
}