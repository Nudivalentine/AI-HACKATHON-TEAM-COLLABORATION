// components/UpcomingCats.jsx
export default function UpcomingCats() {
  const cats = [
    { unit: "CS101", date: "02 Oct", time: "10 AM" },
    { unit: "MATH202", date: "04 Oct", time: "2 PM" },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold mb-4">Upcoming CATs</h3>

      {cats.map((cat, index) => (
        <div key={index} className="mb-3">
          <p className="font-semibold">{cat.unit}</p>
          <p className="text-sm text-gray-500">
            {cat.date} - {cat.time}
          </p>
        </div>
      ))}
    </div>
  );
}