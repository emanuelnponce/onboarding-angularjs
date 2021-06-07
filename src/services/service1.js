function Service1 ($q, rest) {

  // mock query
  this.query = () => {
    return $q.resolve('Mock Response');
  };
}

Service1.$inject = ['$q', 'Restangular'];
export { Service1 };
