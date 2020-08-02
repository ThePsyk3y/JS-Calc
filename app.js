// *Number Button on-click function
function numberDisp(num) {
  return function () {
    document.getElementById('digits').textContent = document.getElementById('digits').textContent * 10 + num;
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
