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
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function processForm(e) {
	const elements = ['name', 'email', 'subject', 'message'];
	let error = [];
	let x = e.target;
	e.preventDefault();
	elements.map((input) => {
		if (input === 'message') {
			document
				.getElementById('message')
				.classList.remove('textarea-error');
		}
		document.getElementById(input).classList.remove('error');
	});
	if (x.name.value.length > 26 || x.name.value.length < 2) {
		error.push('name');
	}
	if (
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			x.email.value
		) === false
	) {
		error.push('email');
	}
	if (x.subject.value.length > 26 || x.subject.value.length < 1) {
		error.push('subject');
	}
	if (x.message.value.length > 300 || x.message.value.length < 10) {
		error.push('message');
	}

	if (error.length !== 0) {
		error.map((input) => {
			if (input === 'message') {
				document
					.getElementById('message')
					.classList.add('textarea-error');
			}
			document.getElementById(input).classList.add('error');
		});
		return false;
	}
	return true;
}

// form.addEventListener('submit', processForm);
