// *Number Button on-click function
function numberAdd(num) {
  return function () {
    document.getElementById('digits').textContent = document.getElementById('digits').textContent * 10 + num;
  };
}

//  !Can be possibly changed to an array
const addNum0 = numberAdd(0);
const addNum1 = numberAdd(1);
const addNum2 = numberAdd(2);
const addNum3 = numberAdd(3);
const addNum4 = numberAdd(4);
const addNum5 = numberAdd(5);
const addNum6 = numberAdd(6);
const addNum7 = numberAdd(7);
const addNum8 = numberAdd(8);
const addNum9 = numberAdd(9);

//  *Button click Behaviour
//  !function  name to be changed to something more relevant
document.getElementById('btn-0').addEventListener('click', addNum0);
document.getElementById('btn-1').addEventListener('click', addNum1);
document.getElementById('btn-2').addEventListener('click', addNum2);
document.getElementById('btn-3').addEventListener('click', addNum3);
document.getElementById('btn-4').addEventListener('click', addNum4);
document.getElementById('btn-5').addEventListener('click', addNum5);
document.getElementById('btn-6').addEventListener('click', addNum6);
document.getElementById('btn-7').addEventListener('click', addNum7);
document.getElementById('btn-8').addEventListener('click', addNum8);
document.getElementById('btn-9').addEventListener('click', addNum9);
