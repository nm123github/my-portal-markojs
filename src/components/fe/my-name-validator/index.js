

module.exports = require('marko-widgets').defineComponent({ 
  template: require('./template.marko'),

  init: function() {
    var el = this.el;
  },

  handleNameChange: function(event, el) {
    console.log(el.value);
  },

  validate: function() {
    console.log("validate");
  },

  getInitialState: function(input) {
    return {};
  },

  getTemplateData: function(state, input) {
    return {
      placeholder: input.placeholder,
      buttonName: input.buttonName
    };
  }
});
