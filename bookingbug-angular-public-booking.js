(function() {
  'use strict';
  angular.module('BB.Services').config(function($translateProvider) {
    'ngInject';
    var translations;
    translations = {
      PUBLIC_BOOKING: {
        ACCORDION_RANGE_GROUP: {
          AVAILABLE: '{SLOTS_NUMBER, plural, =0{0 available} =1{1 available} other{{SLOTS_NUMBER} available}}'
        }
      }
    };
    $translateProvider.translations('en', translations);
  });

}).call(this);
