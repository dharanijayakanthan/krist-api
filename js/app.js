 var app = angular.module("myapp",[]);  
 app.controller("usercontroller", function($scope,$http){

 
 $scope.rows = [];
var config1 = {headers:  {
"User-ID":"379",
"Access-Token" : "eWEyOS5HbHNwQkRCVUJPX2d0UUNGUVR4Z1NKRTgzUkdCWHB2V1NCbWwtckNHWW5iS05NSjJLY0J5YU5CeU5QWFhTU3R5N1phdTctd250aW15dk5ZUFcySEt3ckpxNUdCNFhwQzYyNGVQcnlKSWlYa21Fa0xvQ0hIZ1kxZVRjaU0wJVVTRVIlMzc5",
"User-IP":"0.0.0.0",
"Agent" : "agent"}
};
$scope.search="";
var url1 = "https://staging.investo2o.com/assetmanager-ws/api/v1/assets/getassets?query="+ $scope.search +"&assetType=STK";
  $http.get(url1,config1)
  .then(function(response) {
      $scope.response = response;
	    });
		$scope.comp = function(string){  
          var output = [];  
           angular.forEach($scope.response.data, function(search){  
                if(search.toLowerCase().indexOf(string.toLowerCase()) >= 0)  
                {  
                     output.push(search);  
                }  
           });  
           
      }
	  $scope.complete = function(string){
 $scope.search=string;
 $scope.hidethis = true;
 
 };

$scope.passid =function(inti){ 
 var config2 = { headers:  {
"User-ID":"379",
"Access-Token" : "eWEyOS5HbHNwQkRCVUJPX2d0UUNGUVR4Z1NKRTgzUkdCWHB2V1NCbWwtckNHWW5iS05NSjJLY0J5YU5CeU5QWFhTU3R5N1phdTctd250aW15dk5ZUFcySEt3ckpxNUdCNFhwQzYyNGVQcnlKSWlYa21Fa0xvQ0hIZ1kxZVRjaU0wJVVTRVIlMzc5",
"User-IP":"0.0.0.0",
"Agent" : "agent"
}
};
$scope.id = inti;

  
var url2 = "https://staging.investo2o.com/assetmanager-ws/api/v3/getassetdetails?asset="+ $scope.id +"&type=STK&isCustom=false";
  $http.get(url2,config2)
  .then(function(response) {
      $scope.responsed = response;
   
  
 
  
  $scope.addRow = function() {
    
    $scope.rows.push({'name':$scope.responsed.data.contractName,'currency':$scope.responsed.data.currency,'symbol':$scope.responsed.data.symbol,'pricingDate':$scope.responsed.data.pricingDate,'highPrice':$scope.responsed.data.highPrice});
   
  }
	  });    

	};
	
 
 });
