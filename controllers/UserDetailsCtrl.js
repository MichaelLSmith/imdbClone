app.controller('UserDetailsCtrl', UserDetailsCtrl);

function UserDetailsCtrl($routeParams, $location){
    this.userId = $routeParams.userId;

    // console.log($location.url("/home"));
}

