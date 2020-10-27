/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

import numberController from './numCont';

import UIController from './uiCont';

const appController = (function appCont(numberCtrl, UICtrl) {
  const ctrlClassID = UICtrl.getClassID();
  let decVal = 0;

  const numberDisp = function numDis(num) {
    // *Calulate number
    const dispNum = numberCtrl.numUpdate(ctrlClassID.digDoc.value, num);

    // *Update UI with new number
    UICtrl.dispUpdate(dispNum);
  };

  // *Clears Entire Application
  const fullClear = function fullClr() {
    numberCtrl.fullClearNumData();
    UICtrl.clearDisp();
    console.clear();
  };

  // *Clears current entry
  const entClear = function entClr() {
    UICtrl.clearDisp();
    numberCtrl.clearCurrent();
  };

  const OperationUpdate = function operUp(oper) {
    return function operUpclos() {
      numberCtrl.assignOper(oper);
      numberCtrl.assignPrev();
      UICtrl.clearDisp();
    };
  };
  const operFunc = [
    OperationUpdate('+'),
    OperationUpdate('-'),
    OperationUpdate('*'),
    OperationUpdate('/'),
  ];

  const advOperationUpdate = function operUp(oper) {
    return function operUpclos() {
      const advRes = numberCtrl.advCalc(oper);
      UICtrl.dispUpdate(advRes);
    };
  };
  const advOperFunc = [advOperationUpdate('^'), advOperationUpdate('#')];

  const resDisp = function displayResult() {
    // *Calculate operation between currNum and prevNum
    const result = numberCtrl.calcRes();
    console.log(`result = ${result}`);
    // *Update UI with result
    UICtrl.dispUpdate(result);
  };

  const inputDecimal = function inDec() {
    let dispNum = parseFloat(ctrlClassID.digDoc.value);
    if (decVal < 1) {
      dispNum += '.';
      UICtrl.dispUpdate(dispNum);
    }
  };

  const setupEventListeners = function eventList() {
    // ?Number Button Listeners
    document
      .querySelector(ctrlClassID.numberID)
      .addEventListener('click', (event) => {
        const { target } = event;
        if (
          !target.matches('button') ||
          target.value === '.' ||
          target.value === '-'
        ) {
          return;
        }
        numberDisp(target.value);
      });

    // !If used when field is empty will diplay 0 without any change to succeding numbers
    document.getElementById(ctrlClassID.intID).addEventListener('click', () => {
      const flipNumb = numberCtrl.flipNum();
      console.log(flipNumb);
      UICtrl.dispUpdate(flipNumb);
    });
    document.getElementById(ctrlClassID.decID).addEventListener('click', () => {
      inputDecimal();
      decVal = 1;
    });

    //  ?Operator Button Listeners
    document
      .getElementById(ctrlClassID.addID)
      .addEventListener('click', operFunc[0]);
    document
      .getElementById(ctrlClassID.subID)
      .addEventListener('click', operFunc[1]);
    document
      .getElementById(ctrlClassID.mulID)
      .addEventListener('click', operFunc[2]);
    document
      .getElementById(ctrlClassID.divID)
      .addEventListener('click', operFunc[3]);

    // ?Advanced Operator Button Listeners
    document
      .getElementById(ctrlClassID.sqrtID)
      .addEventListener('click', advOperFunc[1]);
    document
      .getElementById(ctrlClassID.sqrID)
      .addEventListener('click', advOperFunc[0]);

    document
      .getElementById(ctrlClassID.resultID)
      .addEventListener('click', resDisp);

    //  ?Memory Manipulation Button Listeners
    document
      .getElementById(ctrlClassID.clrID)
      .addEventListener('click', fullClear);
    document
      .getElementById(ctrlClassID.entryClearID)
      .addEventListener('click', entClear);
  };
  return {
    init() {
      fullClear();
      setupEventListeners();
    },
  };
})(numberController, UIController);

appController.init();
