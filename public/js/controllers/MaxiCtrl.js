angular.module('MaxiCtrl', []).controller('MaxiController', function($scope) {

	$scope.tagline = 'tagline Maxi her';
    $scope.event = {
        name: 'Maxi Event',
        date: '25. maj 2016',
        time: 'kl.8.00',
        location: {
            address: 'Storegade 17',
            city: 'Aarhus'           
        },
        sessions: [
            {
           name: 'Directives Masterclass',
           creatorName: 'Bob Smith',
           duration: 1
            },
            {
           name: 'Directives Masterclass',
           creatorName: 'Bob Smith',
           duration: 1
            },
           {
           name: 'Directives Masterclass',
           creatorName: 'Bob Smith',
           duration: 1
            },
           {
           name: 'Directives Masterclass',
           creatorName: 'Bob Smith',
           duration: 1
        }]
    }

});