/**
*	Visual Frameworks Project 2
*	By: Deus Duke
*	Term:  1303
**/

/**
 * Validations fields, if and error if found and alert
 * is displdyed
 * @return {bool} true if valid, otherwise false
 */

// utility function to create formatted string similar to .Net
String.prototype.format = function() {
	str = this;
	for (int i = 0; i < arguments.length; ++i) {
		str = str.replace('{' + i.toString() + '}', arguments[i + 1]);
	}

	return str;
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function validateFields()
{
	var itxName = document.getElementById('projectName');
	var idStartDate = document.getElementById('startDate');

	if (isBlank(itxName.value))
	{
		alert('You must enter a project name');
		return false;
	}

	if (isBlank(idStartDate.value))
	{
		alert('You must enter a start date');
		return false;
	}

	// at this point, all information is valid
	return true;
}

/**
 * Create a project and store it to the client */
function createProject()
{
	// validate all fields, if information is missing or
	// incorrect return
	if (!validateFields()) return;

	// build the project objet
	var project = {};

	project.name = document.getElementById('projectName').value;
	project.startDate = document.getElementById('startDate').value;
	project.type = document.getElementById('mainForm').type;
	project.priority = document.getElementById('mainForm').priority;

	// store the date
	storeProject(project);

	// show all data
	showAllProjects();
}

// send the project to local storage
function storeProject(project) {
	// convert to JSON and store in the database
	data = JSON.stringify();

	// use timestamp to make unique
	localStorage.setItem((new Date()).getTime().toString(), data);
}

// retrieve all of our projects from local storage
function retrieveProjects(project) {
	var projects = new Array();

	// get all the data back out and convert back to projects
	for (var i = 0; i < localStorage.length; i++){
		var json = localStorage.getItem(localStorage.key(i));
		projects[i] = eval('({0})'.format(json));
	}

	return projects;
}