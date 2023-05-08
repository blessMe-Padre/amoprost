const initTimer = () => {
  const hourElement = document.querySelector('.timer__hour');
  const minuteElement = document.querySelector('.timer__minute');
  const secondElement = document.querySelector('.timer__second');
  const clientsElement = document.querySelector('.timer__clients');

  let clients = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;

  const startTimer = () => {
    second++;
    if (second <= 9) {
      secondElement.innerHTML = '0' + second;
    }
    if (second > 9) {
      secondElement.innerHTML = second;
    }
    if (second > 59) {
      minute++;
      minuteElement.innerHTML = '0' + minute;
      second = 0;
      secondElement.innerHTML = '0' + second;
    }

    if (minute > 9) {
      minuteElement.innerHTML = minute;
    }

    if (minute > 59) {
      hour++;
      hourElement.innerHTML = '0' + hour;
      minute = 0;
      minuteElement.innerHTML = '0' + minute;
    }
  };

  const updateClients = () => {
    clients++;
    clientsElement.innerHTML = clients;
  };

  setInterval(updateClients, 10000);
  setInterval(startTimer, 1000);
};

export { initTimer };
