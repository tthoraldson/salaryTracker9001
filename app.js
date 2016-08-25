var myApp = angular.module("myApp", []);

myApp.controller('employeeController', ['$scope', function($scope){
	$scope.employees = [];
	$scope.combinedSalaries = 0;
	$scope.idCounter = 1;

  $scope.addEmployee = function(){
		$scope.newEmployee = {
			firstName: $scope.firstName,
			lastName: $scope.lastName,
			positionName: $scope.positionName,
			salaryName: $scope.salaryName,
			id: $scope.idCounter
		}

		$scope.idCounter++;
		console.log("Added new employee: " + $scope.newEmployee);
		$scope.employees.push($scope.newEmployee);

		$scope.getSalaries();
		// console.log($scope.combinedSalaries);
	}

	$scope.getSalaries = function(){
		$scope.combinedSalaries = 0;
		for (var i = 0; i < $scope.employees.length; i++){
			if ($scope.employees[i] == undefined){
				continue;
			}
			$scope.tempSal = $scope.employees[i].salaryName;
			$scope.combinedSalaries += $scope.tempSal;
		}
		$scope.combinedSalaries = $scope.combinedSalaries / 12;
	}

	$scope.deleteEmployee = function(id) {
		delete $scope.employees[id - 1];
		$scope.getSalaries();
	}
}]);

myApp.controller('employeeDelete', ['$scope', function($scope){
}]);


// var employees = []; 																			//where the employee objects are stored
// var combinedSalaries = [];
//
// $(document).ready(function() {
//
// 	$('#employeeinfo').on('submit', function(event) { 				// prevents from trying to submit to server
//       event.preventDefault();
//
// 	var values = {};																					// new employee object
// 	var fields = $('#employeeinfo').serializeArray();
//
// 	fields.forEach(function(element, index, array) {					// creates employee based on each field in the form
//         values[element.name] = element.value;
//       });
//
// 	employees.push(values);																		// pushes the employee object to the employees array
//
// 	employees.forEach(function(employee, i){									//
// 		$.extend(employees[i], {"employeeID": (i + 1)})
// 	});
//
// 	//console.log(employees);
//
// 	$('#employeeinfo').find('input[type=text]').val('');			// clears all the values in the form
//
// 	// APPEND THE DOM ... ADDS TO THE TABLE!
// 	$('.employee').remove(); 																	// clears the table
// 	employees.forEach(function(person, i){
// 		appendDom(employees[i])
// 	});
//
// 	function appendDom(empInfo){
// 		$('.table').append('<div class="employee"></div>');
//
// 		var $el = $('.table').last();
// 		$el.append('<tr class="employee emp" data-id="' + empInfo.employeeID + '"><td>' + empInfo.firstName + ' ' + empInfo.lastName + '</td><td>' + empInfo.positionName + '</td><td>' + empInfo.salaryName + '</td><td>' + empInfo.employeeID + '</td><td><button data-id="' + empInfo.employeeID + '">DELETE</button></td></tr>')
// 	};
//
// 		sals();
//
// 		$('.emp').click(function() {
// 			var removeThisID = $(this).data('id');
// 			employees.splice((removeThisID - 1), removeThisID);
// 			combinedSalaries.splice((removeThisID - 1), removeThisID);
// 			sals();
//
// 			$(this).remove();
// 		});
// 		});
//
// 		// Calculates the final monthly salary cost and displays it on the DOM
// 		var totalSal = 0;
// 		var sals = function(){
// 			totalSal = 0;
// 			arr = []
// 			combinedSalaries = arr;
// 			for(var i=0, n=employees.length; i < n; i++) {
// 				var sal = parseInt(employees[i].salaryName);
// 				 combinedSalaries.push(sal);
// 			};
// 			for(i=0, n=combinedSalaries.length; i < n; i++) {
// 				totalSal = totalSal + combinedSalaries[i];
// 			}
// 			var monthlySalaries = (totalSal / 12).toFixed(2);
//
// 			$('.monthlyTotal').empty();
// 			$('.monthlyTotal').append(' $' + monthlySalaries);
// 		};
//
// });
