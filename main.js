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
function validateFields()
{
	var itxName = document.getElementById('projectName');
	var idStartDate = document.getElementById('startDate');

	if (isEmpty(itxName.value))
	{
		alert.show('You must enter a project name');
		return false;
	}

	if (isEmpty(idStartDate.value))
	{
		alert.show('You must enter a start date');
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
}