import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: 'Evolution des offres en fonction du mois',
    },
  },
};

const labels = ['Janvier', 'Février', 'Mars', 'Avril','Mai', 'Juin', 'Juillet'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'EMPLOI',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
      fill: true,
      label: 'STAGE',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(53, 162, 235, 1)',
      backgroundColor: 'rgba(53, 162, 235, 0.2)',
    },
    {
      fill: true,
      label: 'FORMATION',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(54, 94, 50,1)',
      backgroundColor: 'rgba(54, 94, 50,0.2)',
    },
    {
      fill: true,
      label: 'PROJET',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(253, 155, 99,1)',
      backgroundColor: 'rgba(253, 155, 99,0.2)',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
