$(document).ready(function(){
	$.ajax({
		url: "http://localhost:8080/classrooms/", type: 'get'
	}).then(function(data){
		var tableClassrooms = document.getElementById("classrooms_table");
		for (let i = 0; i < data.length; i++) {
			let row = tableClassrooms.insertRow(i + 1);
			const cellId = row.insertCell(0);
			const cellLogin = row.insertCell(1);
			cellId.innerHTML = data[i]["id"];
			cellLogin.innerHTML = data[i]["name"];
		}
		// for (let i = 0; i < data.length; i++) {
		// 	$('#classrooms_table').insertRow(i + 1).html('<tr><td>' + data[i]["id"] + '</td><td>' + data[i]["name"] + '</td></tr>');
		// }

		// $('.classroom-id').append(data.id);
		// $('.classroom-name').append(data.name);
	});


	$.ajax({
		url: "http://localhost:8080/subjects/", type: 'get'
	}).then(function(data){
		var tableSbjects = document.getElementById("subjects_table");
		for (let i = 0; i < data.length; i++) {
			let row = tableSbjects.insertRow(i + 1);
			const cellId = row.insertCell(0);
			const cellLogin = row.insertCell(1);
			cellId.innerHTML = data[i]["id"];
			cellLogin.innerHTML = data[i]["name"];
		}
		// for (let i = 0; i < data.length; i++) {
		// 	$('#classrooms_table').insertRow(i + 1).html('<tr><td>' + data[i]["id"] + '</td><td>' + data[i]["name"] + '</td></tr>');
		// }

		// $('.classroom-id').append(data.id);
		// $('.classroom-name').append(data.name);
	});
});
