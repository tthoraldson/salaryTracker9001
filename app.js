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
	console.log(employees);
	 $('#employeeinfo').find('input[type=text]').val('');			// clears all the values in the form



});
});
