/* // Filter function on the menu page

function filter(category) {
	const items = document.querySelectorAll('.item');
  
	// Toggle underline for "Drinks" button
	const cocktailsButton = document.getElementById('cocktailsButton');
	const snacksButton = document.getElementById('snacksButton'); // Add an ID to the "Snacks" button
	const wineButton = document.getElementById('wineButton'); // Add an ID to the Wine button too
	
	if (category === 'cocktails') {
	  cocktailsButton.classList.add('active');
	  wineButton.classList.remove('active');
	  snacksButton.classList.remove('active'); // Remove underline from "Snacks" button
	} else if (category === 'wine') {
		cocktailsButton.classList.remove('active');
		wineButton.classList.add('active');
		snacksButton.classList.remove('active');
	} else if (category === 'snacks') {
	  cocktailsButton.classList.remove('active');
	  wineButton.classList.remove('active');
	  snacksButton.classList.add('active');
	} else {
	  cocktailsButton.classList.remove('active');
	  wineButton.classList.remove('active');
	  snacksButton.classList.remove('active');
	}
  
  } */

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
  }
  
  function showAll() {
	const items = document.querySelectorAll('.item');
	
	items.forEach(item => {
	  item.style.display = 'block';
	});
  }
  



// make the buttons redirect to about us / menu pages
const buttonClick = document.querySelector('.menubutton');

buttonClick.addEventListener('click', function() {
	window.location.href = ('about.html');
});

const buttonClickTwo = document.querySelector('.menubutton2');

buttonClickTwo.addEventListener('click', function() {
	window.location.href = ('menu.html');
});



// not working, maybe because its not on the home page?

const buttonClickThree = document.querySelector('.menubutton3');

buttonClickThree.addEventListener('click', function() {
	window.location.href = ('menu.html');
});



// Scroll effect on homepage - not finished

const pageSections = document.querySelectorAll('.two-column-section1');
//const pageItemSections = document.querySelectorAll('.page-item-section');
//const header = document.querySelector('.header');

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

let lastScrollPosition = 0;
let scrollDirection = 'down';

//const activateHeader = () => {
//	const pixelsScrolledFromTopOfViewport = window.scrollY;
 
//	if (pixelsScrolledFromTopOfViewport > lastScrollPosition) {
//		scrollDirection = 'down';
//	} else {
//		scrollDirection = 'up';
//	}

//	if (scrollDirection === 'down' && pixelsScrolledFromTopOfViewport > 500) {
//		header.classList.add('header--hidden');
//	}

//	if (scrollDirection === 'up') {
//		header.classList.remove('header--hidden');
//	}

//	lastScrollPosition = pixelsScrolledFromTopOfViewport;

//}

const activateSections = () => {
	const pixelsScrolledFromTopOfViewport = window.scrollY;

	pageSections.forEach(section => {
		const positionFromTopOfViewport = section.offsetTop;
		const offsetFromBottom = 200;
		const positionToDisplaySection = positionFromTopOfViewport - (viewportHeight - offsetFromBottom);
		
		if (pixelsScrolledFromTopOfViewport > positionToDisplaySection) {
			section.classList.add('page-section--visible');

			 //setTimeout(() => {
			 //	section.classList.add('page-section--rotate');
			 //}, 200);
		} else {
			return;
		}
	})
}

//const activateItemSections = () => {
//	const pixelsScrolledFromTopOfViewport = window.scrollY;

//	pageItemSections.forEach(section => {
//		const positionFromTopOfViewport = section.offsetTop;
//		const offsetFromBottom = 200;
//		const positionToDisplaySection = positionFromTopOfViewport - (viewportHeight - offsetFromBottom);

//		if (pixelsScrolledFromTopOfViewport > positionToDisplaySection) {
//			const sectionItems = section.querySelectorAll('.page-item');
			
			// sectionItems.forEach(item => {
			// 	item.classList.add('page-item--visible');
			// });

//			const delay = 80;

//			sectionItems.forEach((item, index) => {
//				setTimeout(() => {
//					item.classList.add('page-item--visible');
//				}, delay * index);
//			});
//	
//		}
//	});
//}

window.addEventListener('scroll', () => {
//	activateHeader();
	activateSections();
//	activateItemSections();
});