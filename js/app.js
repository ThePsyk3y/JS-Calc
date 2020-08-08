/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-console */
//  *Variable Declarations
let prevNum = 0;
let currNum = 0;
// let digiCount = 1;
let currOp;
let opCount = 0;
let decVal = 1;
const getDigDoc = document.getElementById('digits');
getDigDoc.value = '';

function clearDisp() {
  getDigDoc.value = '';
}
function fullClearDisp() {
  getDigDoc.value = '';
  prevNum = 0;
  currNum = 0;
  digiCount = 1;
  currOp = null;
  console.clear();
}

/*
function digitCount() {
  digiCount = 1;
  let currcop = currNum;
  while (currcop / 10 >= 1) {
    currcop /= 10;
    digiCount++;
  }
  console.log(digiCount);
}
*/

function inputDecimal() {
  // !Can Accept more than one Decimal point. Needs Fix!
  if (decVal !== 1) {
    getDigDoc.value = (getDigDoc.valuel + 0.0) / 10;
    currNum = parseFloat(getDigDoc.value, 10);
  }
}

function resDisp() {
  opCount = 0;
  getDigDoc.value = '';
  if (currOp === '+') {
    console.log(prevNum + currNum);
    getDigDoc.value = prevNum + currNum;
    currNum = parseFloat(getDigDoc.value, 10);
  }
  if (currOp === '-') {
    console.log(prevNum - currNum);
    getDigDoc.value = prevNum - currNum;
    currNum = parseFloat(getDigDoc.value, 10);
  }
  if (currOp === '*') {
    console.log(prevNum * currNum);
    getDigDoc.value = prevNum * currNum;
    currNum = parseFloat(getDigDoc.value, 10);
  }
  if (currOp === '/') {
    console.log(prevNum / currNum);
    getDigDoc.value = prevNum / currNum;
    currNum = parseFloat(getDigDoc.value, 10);
  }
}

// *Number Button on-click function
function numberDisp(num) {
  // // !Can't Display Decimal > 1.
  if (currNum >= 0) {
    getDigDoc.value = getDigDoc.value === '' ? num : getDigDoc.value + num;
    currNum = parseFloat(getDigDoc.value, 10);
    console.log(currNum);
  } else {
    getDigDoc.value = getDigDoc.value === '' ? num * -1 : getDigDoc.value - num;
    currNum = parseFloat(getDigDoc.value, 10);
    console.log(currNum);
  }
  // digitCount();
}

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

function advOperations(oper) {
  return function () {
    switch (oper) {
      case '^':
        currNum *= currNum;
        getDigDoc.value = currNum;
        break;
      case '#':
        currNum = Math.sqrt(currNum);
        getDigDoc.value = currNum;
        break;
      default:
        console.log('Error');
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

const advOperFunc = [
  advOperations('^'),
  advOperations('#'),
];

function flipNum() {
  currNum *= -1;
  getDigDoc.value = currNum;
}

//  *Button click Behaviour
// ?For Number Button Click
document.querySelector('.number-buttons').addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }
  numberDisp(target.value);
});

//  ?For Number Manupulation
document.getElementById('btn-int').addEventListener('click', flipNum);
document.getElementById('btn-decimal').addEventListener('click', () => {
  inputDecimal();
  decVal = 1;
});

//  ?For Operator Button Click
document.getElementById('btn-add').addEventListener('click', operFunc[0]);
document.getElementById('btn-sub').addEventListener('click', operFunc[1]);
document.getElementById('btn-mul').addEventListener('click', operFunc[2]);
document.getElementById('btn-div').addEventListener('click', operFunc[3]);
document.getElementById('btn-sqrt').addEventListener('click', advOperFunc[1]);
document.getElementById('btn-sqr').addEventListener('click', advOperFunc[0]);

document.getElementById('btn-res').addEventListener('click', resDisp);

//  ?For Clear Button Click
document.getElementById('btn-clear').addEventListener('click', fullClearDisp);
document.getElementById('btn-ent-clear').addEventListener('click', clearDisp);
