
module.exports = require('marko-widgets').defineComponent({ 
      template: require('./template.marko'),
      
      init: function() {
            var el = this.el;
      },

      // UI function
      handleButtonClick: function(event, el) {
            console.log("Clicked!");
      },
      
      // callback to set initial state of the widget
      getInitialState: function(input) {
            return {
            };
      },

      // callback to set variables that can be accessed in the marko template file
      getTemplateData: function(state, input) {
            return {
                  buttonName:input.buttonName
            };
      }
});