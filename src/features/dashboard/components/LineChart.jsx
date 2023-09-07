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
import { currentDate, formatTime } from '../../../utils/currentDate';
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


function generateTimeArray() {
   const timeArray = [];
   let currentTime = currentDate();
 
   for (let i = 0; i < 100; i++) {
     const formattedTime = formatTime(currentTime.hours, currentTime.minutes, currentTime.seconds);
     timeArray.push(formattedTime);
 
     // Cập nhật thời gian cho lần tiếp theo
     currentTime.seconds += 15;
     if (currentTime.seconds >= 60) {
       currentTime.seconds -= 60;
       currentTime.minutes++;
     }
     if (currentTime.minutes >= 60) {
       currentTime.minutes -= 60;
       currentTime.hours++;
     }
     if (currentTime.hours >= 24) {
       currentTime.hours = 0;
     }
   }
 
   return timeArray;
 }


const LineChart = ({info}) => {
   const labels = useMemo(() => {
      const timeArray = generateTimeArray();
      return timeArray.reverse((a,b) => a - b)
   } ,[info])

  const options = {
    animations: {
       radius: {
          duration: 300,
          easing: "linear",
          loop: (context) => context.active,
       },
    },
    datasetStrokeWidth: 10,
    pointDotStrokeWidth: 10,
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
       mode: "dataset",
       intersect: false,
       includeInvisible: true,
    },
    scales: {
       y: {
          min: -0.5,
          display: false,
       },
       x: {
          ticks: {
            //  callback: function (val, index) {
            //     return index % 2 === 0 ? this.getLabelForValue(val) : ""
            //  },
             padding: 0,
          },
          alignToPixels: true,
       },
    },
 }
  
  const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'CUU',
      data: info.map((e) => e?.ccu ),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'transparent',
    },
    {
      fill: true,
      label: 'cpuLoad',
      data: info.map((e) => e?.cpuLoad ),
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