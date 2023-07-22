let settinsMenu = document.querySelector('.settings-menu');
let darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle() {
	settinsMenu.classList.toggle('settings-menu-height');
}

darkBtn.onclick = function () {
	darkBtn.classList.toggle('dark-btn-on');
}