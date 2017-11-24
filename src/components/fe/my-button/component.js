
var lassoLoader = require('lasso-loader');

module.exports = {

  // UI function
  handleButtonClick(event, el) {
    console.log("Clicked!");

    // hacky way to not async render when anything other than
    // the 'async' button is clicked 
    if ( !el.value.includes('async') )
      return;
      
    // lazy-load the name validator in a picoModal!
    lassoLoader.async('my-module/validator', function() {
      var picoModal = require('picoModal');
      var myNameValidator = require('../my-name-validator');
      
      picoModal('').afterCreate(function(modal) {        
        var myNameValidatorWidget = myNameValidator
            .renderSync({
                  placeholder: 'Enter Name',
                  buttonName: 'Validate'
            })
            .appendTo(modal.modalElem())  // append rendered widget to modal
            .getComponent();        
      }).show();
    });
  },

}
