

module.exports = { 

  // onCreate
  onCreate(input) {
    console.log("onCreate");

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
      id: this.input.row.id,
      name: this.input.row.name,
      city: this.input.row.city,
      phone: this.input.row.phone
    }
  },

};
