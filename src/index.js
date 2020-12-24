import loadPage from './modules/init';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

function addNavEvents() {
    const menuBtn = document.getElementById('menu');
    const aboutBtn = document.getElementById('about');
    const contactBtn = document.getElementById('contact');
    menuBtn.addEventListener('click', loadMenu);
    aboutBtn.addEventListener('click', loadHome);
    contactBtn.addEventListener('click', loadContact);
}

function init() {
    loadPage();
    loadHome();
    addNavEvents();
}

init();