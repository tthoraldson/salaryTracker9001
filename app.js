$(document).ready(function() {
	var employees = []; 																			//where the employee objects are stored


	$('#employeeinfo').on('submit', function(event) { 				// prevents from trying to submit to server
      event.preventDefault();

	var values = {};																					// new employee object
	var fields = $('#employeeinfo').serializeArray();

	fields.forEach(function(element, index, array) {					// creates employee based on each field in the form
        values[element.name] = element.value;
      });

	employees.push(values);																		// pushes the employee object to the employees array

	employees.forEach(function(employee, i){									//
		$.extend(employees[i], {"employeeID": (i + 1)})
	});

	console.log(employees);

	$('#employeeinfo').find('input[type=text]').val('');			// clears all the values in the form

	// APPEND THE DOM ... ADDS TO THE TABLE!
	$('.employee').remove(); 																	// clears the table
	employees.forEach(function(person, i){
		appendDom(employees[i])
	});

	function appendDom(empInfo){
		$('.table').append('<div class="employee"></div>');

		var $el = $('.table').last();
		$el.append('<tr class="employee"><th>' + empInfo.firstName + ' ' + empInfo.lastName + '</th><th>' + empInfo.positionName + '</th><th>' + empInfo.salaryName + '</th><th>' + empInfo.employeeID + '</th></tr>')

		// Calculates the final monthly salary cost and displays it on the DOM
		var combinedSalaries = 0;
		var monthlySalaries = 0;
		employees.forEach(function(employee, i){
				combinedSalaries = combinedSalaries + parseInt(employees[i].salaryName);
		});

		monthlySalaries = combinedSalaries / 12;

		$('.monthlyTotal').empty();
		$('.monthlyTotal').append(' $' + monthlySalaries);
		console.log(monthlySalaries);
	};


});
});
