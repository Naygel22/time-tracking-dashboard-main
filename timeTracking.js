const timeDashboardContainer = document.querySelector('#timeDashboardContainer');

showTime('weekly', 'Last Week');

const items = {
  "Work": {
    title: "Work",
    image: "images/icon-work.svg",
    backgroundColor: "hsl(15, 100%, 70%)"
  },
  "Play": {
    title: "Play",
    image: "images/icon-play.svg",
    backgroundColor: "hsl(195, 74%, 62%)"
  },
  "Study": {
    title: "Study",
    image: "images/icon-study.svg",
    backgroundColor: "hsl(348, 100%, 68%)"
  },
  "Exercise": {
    title: "Exercise",
    image: "images/icon-exercise.svg",
    backgroundColor: "hsl(145, 58%, 55%)"
  },
  "Social": {
    title: "Social",
    image: "images/icon-social.svg",
    backgroundColor: "hsl(264, 64%, 52%)"
  },
  "Self Care": {
    title: "Self Care",
    image: "images/icon-self-care.svg",
    backgroundColor: "hsl(43, 84%, 65%)"
  }
}


async function showTime(data, label){
  const response = await fetch("data.json");
  const jsonData = await response.json();

  timeDashboardContainer.innerHTML = '';
  
  jsonData.forEach(element => {
    const title = element.title;
    const elementData = items[title];
      console.log(elementData);
    const img = elementData.image;
    const color = elementData.backgroundColor;
    const currentTime = `${element.timeframes[data].current}hrs`;
    const lastTime = `${label} - ${element.timeframes[data].previous}hrs`;
    const createElement = createItem(img, title, currentTime, lastTime, color);
    timeDashboardContainer.appendChild(createElement);
    
  })
     console.log(jsonData);
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


function createItem(img, title, currentTime, lastTime, color) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('itemContainer');
  itemContainer.style.backgroundColor = color;

  const iconCattegory = document.createElement('img');
  iconCattegory.classList.add('icon-cattegory');
  itemContainer.appendChild(iconCattegory);
  iconCattegory.src = img;

  //for green img
  if(title === 'Exercise') {
    iconCattegory.classList.add('icon-exercise')
  }

  const item = document.createElement('div');
  item.classList.add('item');
  itemContainer.appendChild(item);

  const titleBar = document.createElement('div');
  titleBar.classList.add('titleBar');
  

  const itemTitle = document.createElement('p');
  itemTitle.classList.add('itemTitle');
  itemTitle.textContent = title;
  titleBar.appendChild(itemTitle);

  const iconImg = document.createElement('img');
  iconImg.classList.add('iconImg');
  iconImg.src = "images/icon-ellipsis.svg";
  titleBar.appendChild(iconImg);
  
  item.appendChild(titleBar);
  
  const currentTimeElement = document.createElement('div');
  currentTimeElement.classList.add('currentTime');
  currentTimeElement.textContent = currentTime;
  item.appendChild(currentTimeElement);

  const lastTimeElement = document.createElement('div');
  lastTimeElement.classList.add('lastTime');
  lastTimeElement.textContent = lastTime;
  item.appendChild(lastTimeElement);
  
  return itemContainer;
}






















