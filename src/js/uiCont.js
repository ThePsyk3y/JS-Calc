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

export default UIController;
