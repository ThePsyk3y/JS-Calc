/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-console */\n/* eslint-disable no-param-reassign */\nconst numberController = (function number() {\n  const numberData = {\n    currNum: 0,\n    prevNum: 0,\n    currOp: null,\n    opCount: 0,\n    decval: 1,\n  };\n  return {\n    fullClearNumData() {\n      numberData.prevNum = 0;\n      numberData.currNum = 0;\n      numberData.digiCount = 1;\n      numberData.currOp = null;\n    },\n    clearCurrent() {\n      numberData.currNum = 0;\n    },\n\n    numUpdate(digVal, num) {\n      if (numberData.currNum >= 0) {\n        digVal = digVal === '' ? num : digVal + num;\n        numberData.currNum = parseFloat(digVal, 10);\n        console.log(numberData.currNum);\n        return digVal;\n      }\n      digVal = digVal === '' ? num * -1 : digVal - num;\n      numberData.currNum = parseFloat(digVal, 10);\n      console.log(numberData.currNum);\n      return digVal;\n    },\n\n    calcRes() {\n      switch (numberData.currOp) {\n        case '+':\n          numberData.currNum = numberData.prevNum + numberData.currNum;\n          break;\n\n        case '-':\n          numberData.currNum = numberData.prevNum - numberData.currNum;\n          break;\n\n        case '*':\n          numberData.currNum *= numberData.prevNum;\n          break;\n\n        case '/':\n          numberData.currNum = numberData.prevNum / numberData.currNum;\n          break;\n\n        default:\n          console.log('No operator selected!');\n          break;\n      }\n      return numberData.currNum;\n    },\n\n    advCalc(oper) {\n      switch (oper) {\n        case '^':\n          numberData.currNum *= numberData.currNum;\n          break;\n\n        case '#':\n          numberData.currNum = Math.sqrt(numberData.currNum);\n          break;\n\n        default:\n          console.log('Error');\n          break;\n      }\n      return numberData.currNum;\n    },\n\n    assignOper(oper) {\n      numberData.currOp = oper;\n      numberData.opCount += 1;\n      console.log(numberData.currOp);\n    },\n\n    assignPrev() {\n      numberData.prevNum = numberData.currNum;\n      numberData.currNum = 0;\n    },\n\n    flipNum() {\n      numberData.currNum *= -1;\n      return numberData.currNum;\n    },\n\n    getNumData() {\n      return numberData;\n    },\n  };\n})();\n\nconst UIController = (function UI() {\n  const UIClassID = {\n    numberID: '.number-buttons',\n    intID: 'btn-int',\n    decID: 'btn-decimal',\n    addID: 'btn-add',\n    subID: 'btn-sub',\n    mulID: 'btn-mul',\n    divID: 'btn-div',\n    sqrtID: 'btn-sqrt',\n    sqrID: 'btn-sqr',\n    resultID: 'btn-res',\n    clrID: 'btn-clear',\n    entryClearID: 'btn-ent-clear',\n    digDoc: document.getElementById('digits'),\n  };\n\n  return {\n    dispUpdate(val) {\n      UIClassID.digDoc.value = val;\n    },\n\n    clearDisp() {\n      UIClassID.digDoc.value = '';\n    },\n\n    getClassID() {\n      return UIClassID;\n    },\n  };\n})();\n\nconst appController = (function appCont(numberCtrl, UICtrl) {\n  const ctrlClassID = UICtrl.getClassID();\n  let decVal = 0;\n\n  const numberDisp = function numDis(num) {\n    // *Calulate number\n    const dispNum = numberCtrl.numUpdate(ctrlClassID.digDoc.value, num);\n\n    // *Update UI with new number\n    UICtrl.dispUpdate(dispNum);\n  };\n\n  // *Clears Entire Application\n  const fullClear = function fullClr() {\n    numberCtrl.fullClearNumData();\n    UICtrl.clearDisp();\n    console.clear();\n  };\n\n  // *Clears current entry\n  const entClear = function entClr() {\n    UICtrl.clearDisp();\n    numberCtrl.clearCurrent();\n  };\n\n  const OperationUpdate = function operUp(oper) {\n    return function operUpclos() {\n      numberCtrl.assignOper(oper);\n      numberCtrl.assignPrev();\n      UICtrl.clearDisp();\n    };\n  };\n  const operFunc = [OperationUpdate('+'), OperationUpdate('-'), OperationUpdate('*'), OperationUpdate('/')];\n\n  const advOperationUpdate = function operUp(oper) {\n    return function operUpclos() {\n      const advRes = numberCtrl.advCalc(oper);\n      UICtrl.dispUpdate(advRes);\n    };\n  };\n  const advOperFunc = [advOperationUpdate('^'), advOperationUpdate('#')];\n\n  const resDisp = function displayResult() {\n    // *Calculate operation between currNum and prevNum\n    const result = numberCtrl.calcRes();\n    console.log(`result = ${result}`);\n    // *Update UI with result\n    UICtrl.dispUpdate(result);\n  };\n\n  const inputDecimal = function inDec() {\n    let dispNum = parseFloat(ctrlClassID.digDoc.value);\n    if (decVal < 1) {\n      dispNum += '.';\n      UICtrl.dispUpdate(dispNum);\n    }\n  };\n\n  const setupEventListeners = function eventList() {\n    // ?Number Button Listeners\n    document.querySelector(ctrlClassID.numberID).addEventListener('click', (event) => {\n      const { target } = event;\n      if (!target.matches('button') || target.value === '.' || target.value === '-') {\n        return;\n      }\n      numberDisp(target.value);\n    });\n\n    // !If used when field is empty will diplay 0 without any change to succeding numbers\n    document.getElementById(ctrlClassID.intID).addEventListener('click', () => {\n      const flipNumb = numberCtrl.flipNum();\n      console.log(flipNumb);\n      UICtrl.dispUpdate(flipNumb);\n    });\n    document.getElementById(ctrlClassID.decID).addEventListener('click', () => {\n      inputDecimal();\n      decVal = 1;\n    });\n\n    //  ?Operator Button Listeners\n    document.getElementById(ctrlClassID.addID).addEventListener('click', operFunc[0]);\n    document.getElementById(ctrlClassID.subID).addEventListener('click', operFunc[1]);\n    document.getElementById(ctrlClassID.mulID).addEventListener('click', operFunc[2]);\n    document.getElementById(ctrlClassID.divID).addEventListener('click', operFunc[3]);\n\n    // ?Advanced Operator Button Listeners\n    document.getElementById(ctrlClassID.sqrtID).addEventListener('click', advOperFunc[1]);\n    document.getElementById(ctrlClassID.sqrID).addEventListener('click', advOperFunc[0]);\n\n    document.getElementById(ctrlClassID.resultID).addEventListener('click', resDisp);\n\n    //  ?Memory Manipulation Button Listeners\n    document.getElementById(ctrlClassID.clrID).addEventListener('click', fullClear);\n    document.getElementById(ctrlClassID.entryClearID).addEventListener('click', entClear);\n  };\n  return {\n    init() {\n      fullClear();\n      setupEventListeners();\n    },\n  };\n})(numberController, UIController);\n\nappController.init();\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });