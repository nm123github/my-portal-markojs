

module.exports = { 

  // onCreate
  onCreate(input) {
    console.log("onCreate");
    
    // get widget config would return this!
    // now, we just set it on 'this'
    this.delta = 1;

    // create empty state!
    this.state = {
      value: input.value ? input.value : 0,
      myButton: null
    };
  },

  // onMount of component!
  onMount() {
    console.log("onMount");

    // this is like the init()
    // remember, stuff passed from the server side is simply available on 'this'
    this.state = {
      value: this.input.value ? this.input.value : 0,
      myButton: null
    }
  },

  checkNameValidator() {
    var myButton = null;
    if ( this.state.value === 10 ) {
      myButton = require('../my-button')
        .renderSync({buttonName: 'Load async name validator'})
        .appendTo(document.getElementById('my-client-button')) // change so that we can continue to use the sticky header without the transform issue (SRP non-breaking)
        .getComponent();
    } else {
      if ( this.state.myButton ) {
        this.state.myButton.destroy();
      }
    }
    this.setState({
      myButton: myButton,
      value: this.state.value
    });    
  },

  // add
  add(event, el) {
    console.log("add");
    this.setState({
      value: this.state.value + this.delta,
      myButton: this.state.myButton
    })
    this.checkNameValidator();
  },

  // minus!
  minus() {
    console.log("minus");
    this.setState({
      value: this.state.value - this.delta,
      myButton: this.state.myButton
    })
    this.checkNameValidator();
  }

};
