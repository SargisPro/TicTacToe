
const promo = document.querySelector('#promo');
let num = 0;

promo.addEventListener('click', e => {
  if (num % 2 === 0) {
    e.target.textContent = 'X';
  num++;

  } else {
    e.target.textContent = '0';
    num++;
  };
  check();
});

function check() {
  const boxes = document.querySelectorAll('.box');

  const array = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
  ];
  
  for (let i = 0; i < array.length; i++) {
    if (boxes[array[i][0]].textContent === 'X' && boxes[array[i][1]].textContent === 'X' && boxes[array[i][2]].textContent === 'X') {
      alert('Крестики победили');
      location.reload();
    } else if (boxes[array[i][0]].textContent === '0' && boxes[array[i][1]].textContent === '0' && boxes[array[i][2]].textContent === '0') {
      alert('Нолики победили');
      location.reload();
    }
  }
}