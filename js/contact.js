//  1. adds an eventlistener to the form, listens for the submit event

//  2. takes the values the visitor entered into the form and each "getelementbyid" call gets the value of the input field

document.getElementById('bookingForm').addEventListener('submit', function(event) {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const date = document.getElementById('date').value;
	const time = document.getElementById('time').value;
	const guests = document.getElementById('guests').value;
  
// 3. the if statement checks if any of the form fields is empty and dislpays a popup message that asks the visitor to fill out all fields.
// if all the fields are filled out the "thanksPopup" displays. 
// the "setTimeout" function hides the "thanksPopup" after 3 seconds if the visitor doesnt cancel it, then it resets the form to remove
// the entered values.

	if (!name || !email || !date || !time || !guests) {
	  event.preventDefault();
	  document.getElementById('popup').style.display = 'flex';
	} else {
	  event.preventDefault();
	  document.getElementById('thanksPopup').style.display = 'flex';
	  setTimeout(function() {
		document.getElementById('thanksPopup').style.display = 'none';
		document.getElementById('bookingForm').reset();
	  }, 3000); // to hide the thanks message after 3 seconds and reset
	}
  });

  // makes the visitor able to close the popup messages manually instead of waiting 3 seconds.
  
  document.getElementById('close').addEventListener('click', function() {
	document.getElementById('popup').style.display = 'none';
  });
  
  document.getElementById('closeThanks').addEventListener('click', function() {
	document.getElementById('thanksPopup').style.display = 'none';
  });