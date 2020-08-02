/* eslint-disable no-console */
//  *Variable Declarations
let prevNum;
let currNum;
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
    getDigDoc.textContent = getDigDoc.textContent * 10 + num;
    currNum = parseInt(getDigDoc.textContent, 10);
    console.log(currNum);
  };
}

//  !Can be possibly changed to an array
const dispNum0 = numberDisp(0);
const dispNum1 = numberDisp(1);
const dispNum2 = numberDisp(2);
const dispNum3 = numberDisp(3);
const dispNum4 = numberDisp(4);
const dispNum5 = numberDisp(5);
const dispNum6 = numberDisp(6);
const dispNum7 = numberDisp(7);
const dispNum8 = numberDisp(8);
const dispNum9 = numberDisp(9);

function numberAdd() {
  if (opCount > 0) {
    resDisp();
  }
  prevNum = currNum;
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
document.getElementById('btn-0').addEventListener('click', dispNum0);
document.getElementById('btn-1').addEventListener('click', dispNum1);
document.getElementById('btn-2').addEventListener('click', dispNum2);
document.getElementById('btn-3').addEventListener('click', dispNum3);
document.getElementById('btn-4').addEventListener('click', dispNum4);
document.getElementById('btn-5').addEventListener('click', dispNum5);
document.getElementById('btn-6').addEventListener('click', dispNum6);
document.getElementById('btn-7').addEventListener('click', dispNum7);
document.getElementById('btn-8').addEventListener('click', dispNum8);
document.getElementById('btn-9').addEventListener('click', dispNum9);

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
