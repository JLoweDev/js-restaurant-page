function createMenuSection() {
    const menu = document.createElement('section');
    menu.setAttribute('class', 'section');
    const menuTitle = document.createElement('h2');
    menuTitle.setAttribute('class', 'section-title');
    menuTitle.textContent = 'Menu';
    
    menu.appendChild(menuTitle);
    return menu;
}

function loadMenu() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const menuSection = createMenuSection();
    content.appendChild(menuSection);
}

export default loadMenu;