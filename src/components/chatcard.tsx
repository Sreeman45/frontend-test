const ChartCard = ({ title, icon, color, children }: any) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center mb-4">
      <div className={`rounded-lg p-2 mr-3 text-white ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);
export default ChartCard;