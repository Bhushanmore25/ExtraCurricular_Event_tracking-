import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const PieChartComponent = ({ dataValues, labels }) => {
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          data: dataValues,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },
      ],
    });
  }, [dataValues, labels]);

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: '#fff',
              formatter: (value) => `${((value / dataValues.reduce((a, b) => a + b, 0)) * 100).toFixed(1)}%`,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChartComponent;
