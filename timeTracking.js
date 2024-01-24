
showTime('weekly', 'Last Week');

async function showTime(data, label){
  const response = await fetch("data.json");
  const jsonData = await response.json();

  const currentTimes = document.querySelectorAll('.currentTime');
  const lastTimes = document.querySelectorAll('.lastTime');

  for (let i = 0; i < currentTimes.length; i++) {
    const currentTime = currentTimes[i];
    const lastTime = lastTimes[i];
    const selectedData = jsonData[i];

    currentTime.textContent = `${selectedData.timeframes[data].current}hrs`;
    lastTime.textContent = `${label} - ${selectedData.timeframes[data].previous}hrs`;
  }
}

const frequencyWeekly = document.querySelector('#frequencyWeekly');
const frequencyDaily = document.querySelector('#frequencyDaily');
const frequencyMonthly = document.querySelector('#frequencyMonthly');

const frequencyButtons = document.querySelectorAll('.frequency');

frequencyWeekly.addEventListener('click', () => {
  showTime('weekly', 'Last Week');
  highlightButton(frequencyWeekly);
});

frequencyDaily.addEventListener('click', () => {
  showTime('daily', 'Yesterday');
  highlightButton(frequencyDaily);
});

frequencyMonthly.addEventListener('click', () => {
  showTime('monthly', 'Last Month');
  highlightButton(frequencyMonthly);
});

function highlightButton(button) {
  frequencyButtons.forEach(b => {
    b.classList.remove('active');
  });

  button.classList.add('active');
}



















