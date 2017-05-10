(function () {
    'use strict';

    angular
        .module('app')
        .controller('DesignController', DesignController);

    function DesignController($scope) {
        console.log('visited design controller');
    }
})();