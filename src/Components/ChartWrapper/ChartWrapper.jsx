import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import classes from './ChartWrapper.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: false
  },
  plugins: {
    legend: {
       display: false
    }
 }
};

const labels = ['', '', '', '', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random()),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

const ChartWrapper = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.label}>{props.text}</div>
            <Line options={options} data={data} />
        </div>
    )
}

export default ChartWrapper