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
import TitleCard from '../../../components/Cards/TitleCard';

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

function LineChart(){

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  
  const labels = ['ccu', 'cpuLoad', 'runtimeTotalMemory', 'runtimeFreeMemory', 'runtimeUsedMemory', 'committedHeapMemoryUse', 'usedHeapMemoryUse' , 'maxHeapMemoryUse', 'committedHeapMemoryUseNonHeap', 'usedHeapMemoryUseNonHeap' , 'maxHeapMemoryUseNonHeap' , 'totalMemory' , 'freeMemory' , 'usedMemory'];

  const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'MAU',
      data: labels.map(() => { return Math.random() * 100 + 500 }),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'transparent',
    },
  ],
};
  
    return(
      <TitleCard title={"System Info Data"}>
          <Line data={data} options={options}/>
      </TitleCard>
    )
}


export default LineChart