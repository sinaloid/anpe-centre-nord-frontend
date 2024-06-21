import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' //as const,
      },
      title: {
        display: true,
        text: 'Evolution des candidatures en du mois',
      },
    },
  };
  
  const labels = ['Janvier', 'Février', 'Mars', 'Avril','Mai', 'Juin', 'Juillet'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'EMPLOI',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'STAGE',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 1)',
      },
      {
        label: 'FORMATION',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(54, 94, 50,1)',
      },
      {
        label: 'PROJET',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(253, 155, 99,1)',
      },
    ],
  };

  export const BarChart = () => <Bar options={options} data={data} />;