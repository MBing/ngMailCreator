mailCreator
  .controller('MainCtrl', function ($scope) {
    'use strict';
    $scope.allowDrop = function (ev) {
        ev.preventDefault();
    }

    $scope.drag = function (ev) {
        console.log('drag is started');
        ev.dataTransfer.setData("text/html", ev.target.id);
    }

    $scope.drop = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text/html");
        ev.target.appendChild(document.getElementById(data));
    }
  });
