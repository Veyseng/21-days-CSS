const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-link');
const links = document.querySelectorAll('.nav-link li');

hamburger.addEventListener('click', ()=>{
	navLink.classList.toggle("Open");
	links.forEach(link => {
		link.classList.toggle('fade');
	});
})