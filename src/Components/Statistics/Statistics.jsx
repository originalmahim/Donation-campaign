
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useDonation } from '../Donationdetails/Donationdetails'; 

const COLORS = ['#0088FE', '#FFBB28'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

      const Statistics = () => {
      const { donation } = useDonation(); 

      const data = [
       { name: 'Total Donation', value: 3250  }, 
       { name: 'Your Donation', value: donation }
         ];

      return (
      <div>
      <ResponsiveContainer width="100%" height={400}>
      <PieChart>
      <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
      >
      {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
      </Pie>
      <Legend verticalAlign="bottom" height={36} />
      </PieChart>
      </ResponsiveContainer>
      </div>
            );
            };

export default Statistics;
