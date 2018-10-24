let button = document.getElementById('rotateBtn');
let body = document.querySelector('body');


button.addEventListener('dblclick', () => {
	document.body.setAttribute( "style", "-webkit-transform: rotate(-180deg);");
}) 
button.addEventListener('dblclick', () => {
	body.classList.add('rotate')
})