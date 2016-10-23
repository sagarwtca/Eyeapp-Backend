eyeApp.service('signupService', function ($http){
	
	this.signupService= function (data) {
		 return $http({
					     
					       method: 'post',
					       url: 'http://localhost:3000/api/user/signup',
					       data: data
					 }).then(function(result) {
                            return result.data;
                    });		
	}
})