/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-console */
//  *Variable Declarations
let prevNum = 0;
let currNum = 0;
let digiCount = 1;
let currOp;
let opCount = 0;
const getDigDoc = document.getElementById('digits');

function clearDisp() {
  getDigDoc.value = '';
}
function fullClearDisp() {
  getDigDoc.value = '';
  prevNum = 0;
  currNum = 0;
  digiCount = 1;
  currOp = null;
}

function digitCount() {
  digiCount = 1;
  let currcop = currNum;
  while (currcop / 10 >= 1) {
    currcop /= 10;
    digiCount++;
  }
  console.log(digiCount);
}

function resDisp() {
  opCount = 0;
  getDigDoc.value = '';
  if (currOp === '+') {
    console.log(prevNum + currNum);
    getDigDoc.value = prevNum + currNum;
    currNum = parseInt(getDigDoc.value, 10);
  }
  if (currOp === '-') {
    console.log(prevNum - currNum);
    getDigDoc.value = prevNum - currNum;
    currNum = parseInt(getDigDoc.value, 10);
  }
  if (currOp === '*') {
    console.log(prevNum * currNum);
    getDigDoc.value = prevNum * currNum;
    currNum = parseInt(getDigDoc.value, 10);
  }
  if (currOp === '/') {
    console.log(prevNum / currNum);
    getDigDoc.value = prevNum / currNum;
    currNum = parseInt(getDigDoc.value, 10);
  }
}

// *Number Button on-click function
function numberDisp(num) {
  if (currNum >= 0) {
    // getDigDoc.textContent = getDigDoc.value * 10 + num;
    getDigDoc.value = getDigDoc.value === '0' ? currNum : getDigDoc.value + num;
    currNum = parseInt(getDigDoc.value, 10);
    console.log(currNum);
  } else {
    // getDigDoc.textContent = getDigDoc.value * 10 - num;
    getDigDoc.value = getDigDoc.value === '0' ? currNum * -1 : getDigDoc.value - num;
    currNum = parseInt(getDigDoc.value, 10);
    console.log(currNum);
  }
  digitCount();
}

/*
const dispNum = [
  numberDisp(0),
  numberDisp(1),
  numberDisp(2),
  numberDisp(3),
  numberDisp(4),
  numberDisp(5),
  numberDisp(6),
  numberDisp(7),
  numberDisp(8),
  numberDisp(9),
];
*/

function operations(oper) {
  return function () {
    if (opCount > 0) {
      resDisp();
    }
    prevNum = currNum;
    currNum = 0;
    switch (oper) {
      case '+':
        currOp = '+';
        opCount += 1;
        clearDisp();
        break;

      case '-':
        currOp = '-';
        opCount += 1;
        clearDisp();
        break;

      case '*':
        currOp = '*';
        opCount += 1;
        clearDisp();
        break;

      case '/':
        currOp = '/';
        opCount += 1;
        clearDisp();
        break;

      default:
        console.log('error');
        break;
    }
  };
}

const operFunc = [
  operations('+'),
  operations('-'),
  operations('*'),
  operations('/'),
];

function flipNum() {
  currNum *= -1;
  getDigDoc.textContent = currNum;
}

//  *Button click Behaviour
// ?For Number Button Click
document.querySelector('.number-buttons').addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  /*
  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  } */

  numberDisp(target.value);
});

//  ?For Number Manupulation
document.getElementById('btn-int').addEventListener('click', flipNum);

//  ?For Operator Button Click
document.getElementById('btn-add').addEventListener('click', operFunc[0]);
document.getElementById('btn-sub').addEventListener('click', operFunc[1]);
document.getElementById('btn-mul').addEventListener('click', operFunc[2]);
document.getElementById('btn-div').addEventListener('click', operFunc[3]);
document.getElementById('btn-res').addEventListener('click', resDisp);

//  ?For Clear Button Click
document.getElementById('btn-clear').addEventListener('click', fullClearDisp);
document.getElementById('btn-ent-clear').addEventListener('click', clearDisp);
