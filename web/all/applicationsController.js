(() => {
  'use strict';
  const baseUrl = baseUrlRepository['oms-applications'];
  const apiUrl = `${baseUrl}api/`;

  const showError = (err) => {
    console.log(err);
    let message = 'Unknown cause';

    if (err && err.message) {
      message = err.message;
    } else if (err && err.data && err.data.message) {
      message = err.data.message;
    }

    $.gritter.add({
      title: 'Error',
      text: `Could not process action: ${message}`,
      sticky: false,
      time: 8000,
      class_name: 'my-sticky-class',
    });
  };

  /** @ngInject */
  function config($stateProvider) {
    // State
    $stateProvider
      .state('app.applications', {
        url: '/applications',
        data: { pageTitle: 'Applications' },
        views: {
          'pageContent@app': {
            templateUrl: `${baseUrl}/all/welcome.html`,
            controller: 'WelcomeController as vm',
          },
        },
      });
  }

  function WelcomeController($scope, $http) {
    alert("Hallo " + baseUrlRepository);
  }


  angular
    .module('app.applications', [])
    .config(config)
    .controller('WelcomeController', WelcomeController);
})();

