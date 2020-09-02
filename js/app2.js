/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const numberController = (function number() {
  const numberData = {
    currNum: 0,
    prevNum: 0,
    currOp: null,
    opCount: 0,
    decval: 1,
  };
  return {
    fullClearNumData() {
      numberData.prevNum = 0;
      numberData.currNum = 0;
      numberData.digiCount = 1;
      numberData.currOp = null;
    },
    clearCurrent() {
      numberData.currNum = 0;
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

    calcRes() {
      switch (numberData.currOp) {
        case '+':
          numberData.currNum = numberData.prevNum + numberData.currNum;
          break;

        case '-':
          numberData.currNum = numberData.prevNum - numberData.currNum;
          break;

        case '*':
          numberData.currNum *= numberData.prevNum;
          break;

        case '/':
          numberData.currNum = numberData.prevNum / numberData.currNum;
          break;

        default:
          console.log('No operator selected!');
          break;
      }
      return numberData.currNum;
    },

    advCalc(oper) {
      switch (oper) {
        case '^':
          numberData.currNum *= numberData.currNum;
          break;

        case '#':
          numberData.currNum = Math.sqrt(numberData.currNum);
          break;

        default:
          console.log('Error');
          break;
      }
      return numberData.currNum;
    },

    assignOper(oper) {
      numberData.currOp = oper;
      numberData.opCount += 1;
      console.log(numberData.currOp);
    },

    assignPrev() {
      numberData.prevNum = numberData.currNum;
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
  const operFunc = [OperationUpdate('+'), OperationUpdate('-'), OperationUpdate('*'), OperationUpdate('/')];

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
    document.querySelector(ctrlClassID.numberID).addEventListener('click', (event) => {
      const { target } = event;
      if (!target.matches('button') || target.value === '.') {
        return;
      }
      numberDisp(target.value);
    });

    // document.getElementById(ctrlClassID.intID).addEventListener('click' /* flipNum */);
    document.getElementById(ctrlClassID.decID).addEventListener('click', () => {
      inputDecimal();
      decVal = 1;
    });

    //  ?Operator Button Listeners
    document.getElementById(ctrlClassID.addID).addEventListener('click', operFunc[0]);
    document.getElementById(ctrlClassID.subID).addEventListener('click', operFunc[1]);
    document.getElementById(ctrlClassID.mulID).addEventListener('click', operFunc[2]);
    document.getElementById(ctrlClassID.divID).addEventListener('click', operFunc[3]);

    // ?Advanced Operator Button Listeners
    document.getElementById(ctrlClassID.sqrtID).addEventListener('click', advOperFunc[1]);
    document.getElementById(ctrlClassID.sqrID).addEventListener('click', advOperFunc[0]);

    document.getElementById(ctrlClassID.resultID).addEventListener('click', resDisp);

    //  ?Memory Manipulation Button Listeners
    document.getElementById(ctrlClassID.clrID).addEventListener('click', fullClear);
    document.getElementById(ctrlClassID.entryClearID).addEventListener('click', entClear);
  };
  return {
    init() {
      fullClear();
      setupEventListeners();
    },
  };
})(numberController, UIController);

appController.init();
