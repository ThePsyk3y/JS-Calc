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
      numberData.currNum = 0;
    },

    flipNum() {
      numberData.currNum *= -1;
      return numberData.currNum;
    },

    getNumData() {
      return numberData;
    },
  };
})();

export default numberController;
