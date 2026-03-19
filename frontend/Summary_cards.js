// components/SummaryCards.jsx
export default function SummaryCards() {
  const cards = [
    { title: "Registered Units", value: 8 },
    { title: "Completed Units", value: 5 },
    { title: "In Progress", value: 3 },
    { title: "GPA", value: 3.4 },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">{card.title}</h3>
          <p className="text-xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}