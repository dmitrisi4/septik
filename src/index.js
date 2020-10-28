import * as FsLightbox from 'fslightbox';


// accordion
let accItem = document.getElementsByClassName('accordionItem');
let accHD = document.getElementsByClassName('accordionItemHeading');
for (let i = 0; i < accHD.length; i++) {
		accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
	let itemClass = this.parentNode.className;
	for (let i = 0; i < accItem.length; i++) {
			accItem[i].className = 'accordionItem close';
	}
	if (itemClass == 'accordionItem close') {
			this.parentNode.className = 'accordionItem open';
	}
}

let btnHide = document.getElementById('btnHide')
btnHide.onclick = function() {
	for (let i = 0; i < accItem.length; i++) {
			accItem[i].className = 'accordionItem close';
	}
}

// end accordion
// slider
var mySwiper1 = new Swiper('.swiper-container', {
	effect: 'coverflow',
  loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 0,
		stretch: -300,
		depth: 1000,
		modifier: 1,
		slideShadows : false,
	},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
// end slider
// slider
var mySwiper2 = new Swiper('.swiper-box', {
	spaceBetween: 30,
  effect: 'fade',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',

  // If we need pagination
  pagination: {
		el: '.swiper-pagination',
		clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
// end slider
// modal
let modalOpen = document.getElementsByClassName('btn-modal');
let bodyVar = document.getElementsByTagName('body');
let modalClose = document.querySelector('[data-modal="close"]');
let modalWrapper = document.querySelector('[data-modal="wrapper"]');
let openModal = () => {
	modalWrapper.classList.add("modal-opened");
	bodyVar[0].classList.add("oveflowHidden")
}
let closeModal = () => {
	modalWrapper.classList.remove("modal-opened")
	bodyVar[0].classList.remove("oveflowHidden")
}

for(let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener('click', openModal, false);
}
modalClose.onclick = () => {
  closeModal();
}

let footerForm = document.forms.namedItem('footer-form');
let modalForm = document.forms.namedItem('modal-form');

footerForm.addEventListener('submit', handleFormSubmit);
modalForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
	event.preventDefault();
	formSubmit(event.target);
}

function formSubmit(form) {
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', form.getAttribute('action'), true);
	xhr.onload = function() {
		let message = this.responseText.startsWith('We are very sorry') ? 'error' : 'Отправлено';
		alert(message);
	};
	// SEND
	xhr.send(formData);
	footerForm.reset();
	modalForm.reset();
}

// end modal