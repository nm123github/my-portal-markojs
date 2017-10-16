$_mod.def("/my-portal-markojs$1.0.0/src/client/components/my-button/index", function(require, exports, module, __filename, __dirname) { 
module.exports = require('/marko-widgets$6.6.5/lib/index-browser'/*'marko-widgets'*/).defineComponent({ 
      template: require('/my-portal-markojs$1.0.0/src/client/components/my-button/template.marko'/*'./template.marko'*/),
      
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
});