const row = document.querySelector('.carousel_container');
const pictures = document.querySelectorAll('.picture');
const leftArrow = document.getElementById('left_arrow')
const rightArrow = document.getElementById('right_arrow')

/*Event listener para la flecha derecha*/

rightArrow.addEventListener('click', () => {
	row.scrollLeft += row.offsetWidth;

	const activeindicator = document.querySelector('.ind .activo');
	if(activeindicator.nextSibling){
		activeindicator.nextSibling.classList.add('activo');
		activeindicator.classList.remove('activo');
	}
})

/*Event listener para la flecha izquierda*/

leftArrow.addEventListener('click', () => {
	row.scrollLeft -= row.offsetWidth;

	const activeindicator = document.querySelector('.ind .activo');
	if(activeindicator.previousSibling){
		activeindicator.previousSibling.classList.add('activo');
		activeindicator.classList.remove('activo');
	}
})

/* Paginacion*/

const numPages = Math.ceil(pictures.length / 5);
for(let i = 0; i < numPages; i++){
	const indicator = document.createElement('button');

	if(i === 0){
		indicator.classList.add('activo');
	}


	document.querySelector('.ind').appendChild(indicator);
	indicator.addEventListener('click', (e) => {
		row.scrollLeft = i * row.offsetWidth;

		document.querySelector('.ind .activo').classList.remove('activo');
		e.target.classList.add('activo');
	})
}

/*Hover*/

pictures.forEach( (picture) => {
	picture.addEventListener('mouseenter', (e) => {
		const element = e.currentTarget;
		setTimeout( () => {
			pictures.forEach( picture => picture.classList.remove('hover'));
			element.classList.add('hover');
		}, 300);
	})
});

row.addEventListener('mouseleave', () => {
	pictures.forEach( picture => picture.classList.remove('hover'));
});