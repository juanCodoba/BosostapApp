'use strict';

describe('Component: CarritoComponent', function () {

  // load the controller's module
  beforeEach(module('bootstrapAppApp'));

  var CarritoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CarritoComponent = $componentController('CarritoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
