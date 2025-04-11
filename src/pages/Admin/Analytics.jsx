import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const complaintsData = [
  { id: 1, status: "جديدة" },
  { id: 2, status: "قيد المعالجة" },
  { id: 3, status: "تم الحل" },
  { id: 4, status: "جديدة" },
  { id: 5, status: "قيد المعالجة" },
];

const feedbackData = [
  { rating: 4 },
  { rating: 2 },
  { rating: 3 },
  { rating: 1 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ff7f50"];

const Analytics = () => {
  const [stats, setStats] = useState({ new: 0, inProgress: 0, solved: 0 });
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const countStatus = {
      جديدة: 0,
      "قيد المعالجة": 0,
      "تم الحل": 0,
    };

    complaintsData.forEach((complaint) => {
      countStatus[complaint.status]++;
    });

    setStats({
      new: countStatus["جديدة"],
      inProgress: countStatus["قيد المعالجة"],
      solved: countStatus["تم الحل"],
    });

    const totalRatings = feedbackData.reduce((acc, curr) => acc + curr.rating, 0);
    setAverageRating(totalRatings / feedbackData.length);
  }, []);

  const chartData = [
    { name: "جديدة", value: stats.new },
    { name: "قيد المعالجة", value: stats.inProgress },
    { name: "تم الحل", value: stats.solved },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">إحصائيات الشكاوى</h2>
        <PieChart width={300} height={250}>
          <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">متوسط تقييمات الشكاوى</h2>
        <p className="text-3xl font-bold text-center">{averageRating.toFixed(1)} ⭐</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg col-span-2">
        <h2 className="text-lg font-bold mb-4">توزيع الشكاوى حسب الحالة</h2>
        <BarChart width={500} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
