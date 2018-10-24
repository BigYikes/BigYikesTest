let button = document.getElementById("rotateBtn");
let body = document.querySelector('body');
let CatButton = document.getElementById("rotateCat");
let cat = document.querySelector('main');

button.addEventListener('dblclick', () => {
	body.classList.add('rotate')
});
