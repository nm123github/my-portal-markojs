

module.exports = require('marko-widgets').defineComponent({ 
  template: require('./template.marko'),

  // init widget!
  init: function(widgetConfig) {
    console.log("init");
    var el = this.el;
    this.delta = widgetConfig.delta ? widgetConfig.delta : 1;
  },

  add: function(event, el) {
    console.log("add");
    this.setState({
      value: this.state.value + this.delta
    })
  },

  minus: function() {
    console.log("minus");
    this.setState({
      value: this.state.value - this.delta
    })
  },

  // pass data to the widget client side!
  getWidgetConfig: function() {
    console.log("getWidgetConfig");
    return {
      delta: 2
    }
  },

  // initial state of the component!
  getInitialState: function(input) {
    console.log("getInitialState");
    return {
      value: input.value ? input.value : 0
    };
  },

  // render data..
  getTemplateData: function(state, input) {
    console.log("getTemplateData " + JSON.stringify(input));
    return {
      value: state.value
    };
  }
});
