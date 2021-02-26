const newYears = "15 Oct 2021";

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const countDown = () => {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const leftDays = document.getElementById("days");
  const leftHours = document.getElementById("hours");
  const leftMinutes = document.getElementById("minutes");
  const leftSeconds = document.getElementById("seconds");

  leftDays.innerText = formatTime(days);
  leftHours.innerText = formatTime(hours);
  leftMinutes.innerText = formatTime(minutes);
  leftSeconds.innerText = formatTime(seconds);
};

countDown();
setInterval(countDown, 1000);
