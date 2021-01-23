const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
// const counters = querySelectorAll('.progress__bar__header-num');
// const lines = querySelectorAll('.progress__bar__meter-indicate')
// console.log(lines);
hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.progress__bar__header-num');
const lines = document.querySelectorAll('.progress__bar__meter-indicate');
counters.forEach((item,i)=>{
	lines[i].style.width=item.innerHTML;
})