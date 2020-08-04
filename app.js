/* eslint-disable max-len */
/* eslint-disable no-console */
//  *Variable Declarations
let prevNum = 0;
let currNum = 0;
let currOp;
let opCount = 0;
const getDigDoc = document.getElementById('digits');

function clearDisp() {
  getDigDoc.textContent = 0;
}
function fullClearDisp() {
  getDigDoc.textContent = 0;
  prevNum = 0;
  currNum = 0;
  currOp = null;
}

function resDisp() {
  opCount = 0;
  getDigDoc.textContent = 0;
  if (currOp === '+') {
    console.log(prevNum + currNum);
    getDigDoc.textContent = prevNum + currNum;
    currNum = parseInt(getDigDoc.textContent, 10);
  }
  if (currOp === '-') {
    console.log(prevNum - currNum);
    getDigDoc.textContent = prevNum - currNum;
    currNum = parseInt(getDigDoc.textContent, 10);
  }
  if (currOp === '*') {
    console.log(prevNum * currNum);
    getDigDoc.textContent = prevNum * currNum;
    currNum = parseInt(getDigDoc.textContent, 10);
  }
  if (currOp === '/') {
    console.log(prevNum / currNum);
    getDigDoc.textContent = prevNum / currNum;
    currNum = parseInt(getDigDoc.textContent, 10);
  }
}

// *Number Button on-click function
function numberDisp(num) {
  return function () {
    if (currNum >= 0) {
      getDigDoc.textContent = getDigDoc.textContent * 10 + num;
      currNum = parseInt(getDigDoc.textContent, 10);
      console.log(currNum);
    } else {
      getDigDoc.textContent = getDigDoc.textContent * 10 - num;
      currNum = parseInt(getDigDoc.textContent, 10);
      console.log(currNum);
    }
  };
}

const dispNum = [numberDisp(0), numberDisp(1), numberDisp(2), numberDisp(3), numberDisp(4), numberDisp(5), numberDisp(6), numberDisp(7), numberDisp(8), numberDisp(9)];

function numberAdd() {
  if (opCount > 0) {
    resDisp();
  }
  prevNum = currNum;
  currNum = 0;
  console.log(prevNum);
  currOp = '+';
  opCount += 1;
  clearDisp();
}

function numberSub() {
  if (opCount > 0) {
    resDisp();
  }
  prevNum = currNum;
  currNum = 0;
  console.log(prevNum);
  currOp = '-';
  opCount += 1;
  clearDisp();
}

function numberMul() {
  if (opCount > 0) {
    resDisp();
  }
  prevNum = currNum;
  currNum = 0;
  console.log(prevNum);
  currOp = '*';
  opCount += 1;
  clearDisp();
}

function numberDiv() {
  if (opCount > 0) {
    resDisp();
  }
  prevNum = currNum;
  currNum = 0;
  console.log(prevNum);
  currOp = '/';
  opCount += 1;
  clearDisp();
}

function flipNum() {
  currNum *= -1;
  getDigDoc.textContent = currNum;
}

//  *Button click Behaviour
// ?For Number Button Click
document.getElementById('btn-0').addEventListener('click', dispNum[0]);
document.getElementById('btn-1').addEventListener('click', dispNum[1]);
document.getElementById('btn-2').addEventListener('click', dispNum[2]);
document.getElementById('btn-3').addEventListener('click', dispNum[3]);
document.getElementById('btn-4').addEventListener('click', dispNum[4]);
document.getElementById('btn-5').addEventListener('click', dispNum[5]);
document.getElementById('btn-6').addEventListener('click', dispNum[6]);
document.getElementById('btn-7').addEventListener('click', dispNum[7]);
document.getElementById('btn-8').addEventListener('click', dispNum[8]);
document.getElementById('btn-9').addEventListener('click', dispNum[9]);

//  ?For Number Manupulation
document.getElementById('btn-int').addEventListener('click', flipNum);

//  ?For Operator Button Click
document.getElementById('btn-add').addEventListener('click', numberAdd);
document.getElementById('btn-sub').addEventListener('click', numberSub);
document.getElementById('btn-mul').addEventListener('click', numberMul);
document.getElementById('btn-div').addEventListener('click', numberDiv);
document.getElementById('btn-res').addEventListener('click', resDisp);

//  ?For Clear Button Click
document.getElementById('btn-clear').addEventListener('click', fullClearDisp);
