const currentWeeklyTime = document.querySelector('.currentWeeklyTime');

async function showTime() {
  const response = await fetch("data.json");
  const time = await response.json();
  console.log(time);
  const firstTime = time[0];
  currentWeeklyTime.textContent = firstTime.timeframes.weekly.current + 'hrs';
}
showTime();