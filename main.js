// Grab the HTML DOM Elements
const toggle = document.querySelector('.offtoggle');
const circle = document.querySelector('.circle');
const onOffText = document.querySelector('span');

toggle.addEventListener ('click', () => {
	if(circle.getAttribute('class') === 'circle' || circle.getAttribute('class') === 'circle off') {
		toggle.setAttribute('class', 'ontoggle');
		circle.setAttribute('class', 'circle on');
		onOffText.textContent = 'on';
		onOffText.style.color = 'rgba(100, 100, 255, .5)';
	} else {
		toggle.setAttribute('class', 'offtoggle');
		circle.setAttribute('class', 'circle off');
		onOffText.textContent = 'off';
		onOffText.style.color = 'rgba(0, 0, 0, .5)';
	}
});