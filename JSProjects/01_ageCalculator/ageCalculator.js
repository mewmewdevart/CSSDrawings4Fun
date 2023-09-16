// Get current date
let currentlyDate = new Date();
let currentlyDay = currentlyDate.getDate();
let currentlyMonth = currentlyDate.getMonth() + 1;
let currentlyYear = currentlyDate.getFullYear();

// Get form element
const ageCalculatorForm = document.getElementById('ageCalculatorForm');

ageCalculatorForm.addEventListener('submit', function(e) {
	e.preventDefault(); 

	// Get input values
	let day = parseInt(document.getElementById('day').value);
	let month = parseInt(document.getElementById('month').value);
	let year = parseInt(document.getElementById('year').value);

	// Validate input fields
	if (isNaN(day) || isNaN(month) || isNaN(year)) {
		alert("Please, fill in all fields with the correct numbers!");
		return;
	}

	// Check if the year is in the future
	if (year > currentlyYear) {
		alert("Please enter a valid birth year.");
		return;
	}

	// Check the month and day
	if (month < 1 || month > 12 || day < 1 || day > 31) {
		alert("Please enter a valid date.");
		return;
	}

	// Check for valid days in February
	if (month === 2) {
		const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
		if (day > 29 || (day > 28 && !isLeapYear)) {
			alert("Please enter a valid date.");
			return;
		}
	}

	// Calculate age
	let age = currentlyYear - year;
	let monthAge = currentlyMonth - month;
	let dayAge = currentlyDay - day;

	// Adjust negative values
	if (dayAge < 0) {
		monthAge--; // Subtract 1 month
		const daysInLastMonth = new Date(currentlyYear, currentlyMonth - 1, 0).getDate();
		dayAge += daysInLastMonth;
	}
	if (monthAge < 0) {
		age--; // Subtract 1 year
		monthAge += 12;
	}

	// Display age in years, months, and days
	let ageResult = document.getElementById('ages');
	ageResult.innerHTML = age;
	let monthResult = document.getElementById('months');
	monthResult.innerHTML = monthAge;
	let dayResult = document.getElementById('days');
	dayResult.innerHTML = dayAge;

	// Reset form fields
	document.getElementById('day').value = '';
	document.getElementById('month').value = '';
	document.getElementById('year').value = '';
});
