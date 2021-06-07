function Component1Controller(Service1) {
  this.$onInit = () => {
    this.hello = 'Hello world';
    Service1.query()
      .then(response => {
        this.response = response;
      })
  }
}

Component1Controller.$inject = ['Service1'];
export { Component1Controller };
