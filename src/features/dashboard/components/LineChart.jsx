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
import {  timestampToHHMMSS } from '../../../utils/currentDate';
import { useMemo } from 'react';

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

const LineChart = ({info}) => {
 const labels = useMemo(() => info?.map(e => timestampToHHMMSS(e?.timestamp)),[info])

  const options = useMemo(() => ({
    animations: {
       radius: {
          duration: 300,
          easing: "linear",
          loop: (context) => context.active,
       },
    },
    datasetStrokeWidth: 4,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgb(0,0,0)",
    interaction: {
       mode: "index",
       intersect: false,
    },
    plugins: {
       legend: {
         position: 'top',
       },
    },
    responsive: true,
    tooltips: {
       enabled: true,
       mode: "x-axis",
       intersect: false,
       padding: 2,
       caretPadding: 4,
       usePointStyle: true,
    },
    hover: {
       mode: "x",
       intersect: false,
       includeInvisible: true,
    },
    scales: {
       y: {
          min: -0.1,
       },
       x: {
        ticks: {
           callback: function (val, index) {
              return index % 2 === 0 ? this.getLabelForValue(val) : ""
           },
           padding: 0,
        },
        alignToPixels: true,
     },
    },
 }) , [])
   
  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: 'CUU',
        data: info?.map((e) => e?.ccu),
        borderColor: '#1F78B4',
        tension: 0.1,
      },
      {
        label: 'CPU Load',
        data: info?.map((e) => e?.cpuLoad ),
        borderColor: '#33A02C',
        tension: 0.1,
  
      },
      {
        hidden: true,
        label: 'Free Memory',
        data: info?.map((e) => e?.freeMemory ),
        borderColor: '#6A3D9A',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Committed Heap Memory Use',
        data: info?.map((e) => e?.committedHeapMemoryUse),
        borderColor: '#B15928',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Committed Heap Memory Use Non Heap',
        data: info?.map((e) => e?.committedHeapMemoryUseNonHeap),
        borderColor: '#E31A1C',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Max Heap Memory Use',
        data: info?.map((e) => e?.maxHeapMemoryUse),
        borderColor: '#A6CEE3',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Runtime Free Memory',
        data: info?.map((e) => e?.runtimeFreeMemory),
        borderColor: '#B2DF8A',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Runtime Total Memory',
        data: info?.map((e) => e?.runtimeTotalMemory),
        borderColor: '#CAB2D6',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Runtime Used Memory',
        data: info?.map((e) => e?.runtimeUsedMemory),
        borderColor: '#FB9A99',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Total Memory',
        data: info?.map((e) => e?.totalMemory),
        borderColor: '#FDBF6F',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Used Heap Memory Use',
        data: info?.map((e) => e?.usedHeapMemoryUse),
        borderColor: '#FF7F00',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Used Heap Memory Use Non Heap',
        data: info?.map((e) => e?.usedHeapMemoryUseNonHeap),
        borderColor: '#FFFF99',
        tension: 0.1,
      },
      {
        hidden: true,
        label: 'Used Memory',
        data: info?.map((e) => e?.usedMemory),
        borderColor: '#9747FF',
        tension: 0.1,
      },
    ],
  }) , []);
  
    return(
      <TitleCard title={"System Info Data"}>
          <Line data={data} options={options}/>
      </TitleCard>
    )
}


export default LineChart