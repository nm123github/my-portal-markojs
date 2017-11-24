

module.exports = { 

  // onCreate
  onCreate(input) {
    console.log("onCreate");
    
    // get widget config would return this!
    // now, we just set it on 'this'
    this.delta = 5;

    // create empty state!
    this.state = {
    };
  },

  // onMount of component!
  onMount() {
    console.log("onMount");

    // this is like the init()
    // remember, stuff passed from the server side is simply available on 'this'
    this.state = {
      value: this.input.value ? this.input.value : 0
    }
  },

  // add
  add(event, el) {
    console.log("add");
    this.setState({
      value: this.state.value + this.delta
    })
  },

  // minus!
  minus() {
    console.log("minus");
    this.setState({
      value: this.state.value - this.delta
    })
  }

};
