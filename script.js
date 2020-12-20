// Nav Script
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const navItems = [nav1, nav2, nav3, nav4];

function navAnimation(direction1, direction2) {
	navItems.forEach((nav, i) => {
		nav.classList.replace(
			`slide-${direction1}-${i + 1}`,
			`slide-${direction2}-${i + 1}`
		);
	});
}

function toggleNav() {
	menuBars.classList.toggle('change');

	overlay.classList.toggle('overlay-active');
	if (overlay.classList.contains('overlay-active')) {
		overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
		navAnimation('out', 'in');
	} else {
		overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
		navAnimation('in', 'out');
	}
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
	nav.addEventListener('click', toggleNav);
});

// Form Script
const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function processForm(e) {
	let error = [];
	let x = e.target;
	e.preventDefault();
	if (x.name.value.length > 26 || x.name.value.length < 2) {
		console.log('name');
		error.push('name');
	}
	if (x.subject.value.length > 26 || x.subject.length < 0) {
		console.log('subject');
		error.push('subject');
	}
	if (x.message.value.length > 300 || x.message.value.length < 10) {
		console.log('message');
		error.push('message');
	}
	console.log(error);
}

form.addEventListener('submit', processForm);
