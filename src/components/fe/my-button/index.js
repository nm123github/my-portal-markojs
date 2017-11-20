
var lassoLoader = require('lasso-loader');

module.exports = require('marko-widgets').defineComponent({ 
  template: require('./template.marko'),

  init: function() {
    var el = this.el;
  },

  // UI function
  handleButtonClick: function(event, el) {
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
            .getWidget();        
      }).show();
    });
  },

  // callback to set initial state of the widget
  getInitialState: function(input) {
    return {};
  },

  // callback to set variables that can be accessed in the marko template file
  getTemplateData: function(state, input) {
    return {
      buttonName: input.buttonName
    };
  }
});