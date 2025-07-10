const StatCard = ({ icon, title, value, change, color }: any) => {
  const colors = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className={`rounded-lg p-3 ${colors[color as keyof typeof colors].bg}`}>
          {icon}
        </div>
        <span className={`text-sm font-medium ${colors[color as keyof typeof colors].text}`}>{change}</span>
      </div>
      <h3 className="text-gray-500 mt-4">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};
export default StatCard