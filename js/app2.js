/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const numberController = (function number() {
  const numberData = {
    currNum: 0,
    prevNum: 0,
    currOp: null,
    opCount: 0,
  };
  return {
    fullClearNumData() {
      numberData.prevNum = 0;
      numberData.currNum = 0;
      numberData.digiCount = 1;
      numberData.currOp = null;
    },
    numUpdate(digVal, num) {
      if (numberData.currNum >= 0) {
        digVal = digVal === '' ? num : digVal + num;
        numberData.currNum = parseFloat(digVal, 10);
        console.log(numberData.currNum);
        return digVal;
      }
      digVal = digVal === '' ? num * -1 : digVal - num;
      numberData.currNum = parseFloat(digVal, 10);
      console.log(numberData.currNum);
      return digVal;
    },
    getNumData() {
      return numberData;
    },
  };
})();

const UIController = (function UI() {
  const UIClassID = {
    numberID: '.number-buttons',
    intID: 'btn-int',
    decID: 'btn-decimal',
    addID: 'btn-add',
    subID: 'btn-sub',
    mulID: 'btn-mul',
    divID: 'btn-div',
    sqrtID: 'btn-sqrt',
    sqrID: 'btn-sqr',
    resultID: 'btn-res',
    clrID: 'btn-clear',
    entryClearID: 'btn-ent-clear',
    digDoc: document.getElementById('digits'),
  };
  return {
    dispUpdate(val) {
      UIClassID.digDoc.value = val;
    },
    clearDisp() {
      UIClassID.digDoc.value = '';
    },
    getClassID() {
      return UIClassID;
    },
  };
})();

const appController = (function appCont(numberCrtl, UICrtl) {
  const ctrlClassID = UICrtl.getClassID();

  const numberDisp = function numDis(num) {
    // *Calulate number
    const dispNum = numberCrtl.numUpdate(ctrlClassID.digDoc.value, num);

    // *Update UI with new number
    UICrtl.dispUpdate(dispNum);
  };

  // *Clears Entire Application
  const fullClear = function fullClr() {
    numberCrtl.fullClearNumData();
    UICrtl.clearDisp();
  };

  const setupEventListeners = function eventList() {
    // ?Number Button Listeners
    document.querySelector(ctrlClassID.numberID).addEventListener('click', (event) => {
      const { target } = event;
      if (!target.matches('button') || target.value === '.') {
        return;
      }
      numberDisp(target.value);
    });

    // document.getElementById(ctrlClassID.intID).addEventListener('click' /* flipNum */);
    /* document.getElementById(ctrlClassID.decID).addEventListener('click', () => {
      inputDecimal();
      decVal = 1;
    }); */

    //  ?Operator Button Listeners
    // document.getElementById(ctrlClassID.addID).addEventListener('click', operFunc[0]);
    // document.getElementById(ctrlClassID.subID).addEventListener('click', operFunc[1]);
    // document.getElementById(ctrlClassID.mulID).addEventListener('click', operFunc[2]);
    // document.getElementById(ctrlClassID.divID).addEventListener('click', operFunc[3]);

    // ?Advanced Operator Button Listeners
    // document.getElementById(ctrlClassID.sqrtID).addEventListener('click', advOperFunc[1]);
    // document.getElementById(ctrlClassID.sqrID).addEventListener('click', advOperFunc[0]);

    // document.getElementById(ctrlClassID.resultID).addEventListener('click', resDisp);

    //  ?Memory Manipulation Button Listeners
    document.getElementById(ctrlClassID.clrID).addEventListener('click', fullClear);
    // document.getElementById(ctrlClassID.entryClearID).addEventListener('click', clear);
  };
  return {
    init() {
      fullClear();
      setupEventListeners();
    },
  };
})(numberController, UIController);

appController.init();
