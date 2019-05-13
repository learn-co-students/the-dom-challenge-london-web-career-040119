document.addEventListener('DOMContentLoaded', () => {
  let timer;
  const counterEl = document.querySelector('#counter');
  const buttons = document.querySelectorAll('button');
  const pauseButton = buttons[3];
  const likes = {};

  const incrementCounter = () => {
    let count = parseInt(counterEl.textContent, 10);
    count += 1;
    counterEl.textContent = count;
  };

  const decrementCounter = () => {
    let count = parseInt(counterEl.textContent, 10);
    count -= 1;
    counterEl.textContent = count;
  };

  const toggleTimer = () => {
    if (!timer) {
      timer = window.setInterval(() => incrementCounter(), 1000);
      buttons.forEach((btn) => {
        btn.removeAttribute('disabled');
        pauseButton.textContent = 'pause';
      });
    } else {
      window.clearInterval(timer);
      buttons.forEach((btn) => {
        if (btn !== pauseButton) {
          btn.setAttribute('disabled', true);
        }
        pauseButton.textContent = 'resume';
      });
      timer = null;
    }
  };

  const like = () => {
    const time = parseInt(counterEl.textContent, 10);
    likes[time] = likes[time] + 1 || 1;
    const ulEl = document.querySelector('ul.likes');
    ulEl.innerHTML = '';

    Object.entries(likes).forEach(([key, value]) => {
      const liEl = document.createElement('li');
      const times = parseInt(value, 10) > 1 ? 'times' : 'time';
      liEl.textContent = `${key} has been liked ${value} ${times}`;
      ulEl.appendChild(liEl);
    });
  };

  const addComment = (event) => {
    event.preventDefault();
    const listEl = document.querySelector('#list');
    const commentEl = document.createElement('p');
    const inputEl = document.querySelector('#comment-form input');
    commentEl.innerHTML = inputEl.value;
    listEl.appendChild(commentEl);
    inputEl.value = '';
  };

  buttons[0].addEventListener('click', decrementCounter);
  buttons[1].addEventListener('click', incrementCounter);
  buttons[2].addEventListener('click', like);
  buttons[3].addEventListener('click', toggleTimer);
  buttons[4].addEventListener('click', addComment);
  toggleTimer();
});
