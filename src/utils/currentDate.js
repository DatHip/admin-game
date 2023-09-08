
const currentDate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return { hours, minutes, seconds };
};

function formatTime(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function timestampToHHMMSS(timestamp) {
  const currentDate = new Date(timestamp);

// Lấy giờ, phút và giây từ đối tượng Date
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();

  return `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}:${String(currentSecond).padStart(2, '0')}`;
}
  
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

export  {currentDate , formatTime , generateTimeArray , timestampToHHMMSS};