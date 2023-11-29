/* const buttonClick = document.querySelector('.menubutton');
const buttonClickTwo = document.querySelector('.menubutton2');
const buttonClickThree = document.querySelector('.menubutton3');



// make the buttons redirect to about us / menu pages


buttonClick.addEventListener('click', function() {
	window.location.href = 'about.html';
});



buttonClickTwo.addEventListener('click', function() {
	window.location.href = 'menu.html';
});

// not working, maybe because its not on the home page?


buttonClickThree.addEventListener('click', function() {
	window.location.href = 'menu.html';
	console.log('hi');
});

console.log(buttonClickThree); */




  // function for underlining categories when selected

  function underlineButton() {
	const tabButtons = document.querySelectorAll('.underlinedTabs');
  
	tabButtons.forEach(button => {
	  button.addEventListener('click', function() {
		tabButtons.forEach(button => {
		  button.style.textDecoration = 'none';
		});
		this.style.textDecoration = 'underline';
	  });
	});
  }
  
  underlineButton();
  

// filters between cocktails, wine and snacks

function filter(category) {
	const items = document.querySelectorAll('.item');
	
	items.forEach(item => {
	  if (item.classList.contains(category)) {
		item.style.display = 'block';
	  } else {
		item.style.display = 'none';
	  }
	});
	console.log("category");
  }
  
  function showAll() {
	const items = document.querySelectorAll('.item');
	
	items.forEach(item => {
	  item.style.display = 'block';
	});
  }
  

// not working, maybe because its not on the home page?


buttonClickThree.addEventListener('click', function() {
	window.location.href = ('menu.html');
});

console.log(buttonClickThree);

// make the buttons redirect to about us / menu pages


buttonClick.addEventListener('click', function() {
	window.location.href = ('about.html');
});



buttonClickTwo.addEventListener('click', function() {
	window.location.href = ('menu.html');
});







// Scroll effect on homepage - not finished

const pageSections = document.querySelectorAll('.two-column-section1');

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

let lastScrollPosition = 0;
let scrollDirection = 'down';

const activateSections = () => {
	const pixelsScrolledFromTopOfViewport = window.scrollY;

	pageSections.forEach(section => {
		const positionFromTopOfViewport = section.offsetTop;
		const offsetFromBottom = 200;
		const positionToDisplaySection = positionFromTopOfViewport - (viewportHeight - offsetFromBottom);
		
		if (pixelsScrolledFromTopOfViewport > positionToDisplaySection) {
			section.classList.add('page-section--visible');

		} else {
			return;
		}
	})
}



window.addEventListener('scroll', () => {
	activateSections();

});