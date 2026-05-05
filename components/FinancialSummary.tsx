import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { LucideIcon } from 'lucide-react';

export function FinancialSummary() {
  const data = [
    { name: 'Savings', value: 400 },
    { name: 'Investments', value: 300 },
    { name: 'Expenses', value: 300 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="financial-summary">
      <h2>Financial Summary</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="icon-section">
        <LucideIcon name="bank" size={24} />
        <span>Decentralized Banking</span>
      </div>
    </div>
  );
}
