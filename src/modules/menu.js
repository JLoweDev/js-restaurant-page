function createMenuSection() {
    const menu = document.createElement('section');
    menu.setAttribute('class', 'section');
    const menuTitle = document.createElement('h2');
    menuTitle.setAttribute('class', 'section-title');
    menuTitle.textContent = 'Menu';
    const menuItem1Title = document.createElement('h4');
    menuItem1Title.setAttribute('class', 'menu-item');
    menuItem1Title.textContent = 'A Squid';
    const menuItem1Price = document.createElement('p');
    menuItem1Price.setAttribute('class', 'menu-price');
    menuItem1Price.textContent = '$30';
    const menuItem1Image = document.createElement('img');
    menuItem1Image.src = 'images/Menu2-Squid.jpg';
    menuItem1Image.alt = 'Squid image';
    const menuItem1Text = document.createElement('p');
    menuItem1Text.setAttribute('class', 'item-info');
    menuItem1Text.textContent = 'Man not included. Cooked in butter.';
    const menuItem2Title = document.createElement('h4');
    menuItem2Title.setAttribute('class', 'menu-item');
    menuItem2Title.textContent = 'Fermented Beans';
    const menuItem2Price = document.createElement('p');
    menuItem2Price.setAttribute('class', 'menu-price');
    menuItem2Price.textContent = '$5';
    const menuItem2Image = document.createElement('img');
    menuItem2Image.src = 'images/Menu1-Natto.jpg';
    menuItem2Image.alt = 'Fermented Beans';
    const menuItem2Text = document.createElement('p');
    menuItem2Text.setAttribute('class', 'item-info');
    menuItem2Text.textContent = 'Looks great.';
    menu.appendChild(menuTitle);
    menu.appendChild(menuItem1Title);
    menu.appendChild(menuItem1Price);
    menu.appendChild(menuItem1Image);
    menu.appendChild(menuItem1Text);
    menu.appendChild(menuItem2Title);
    menu.appendChild(menuItem2Price);
    menu.appendChild(menuItem2Image);
    menu.appendChild(menuItem2Text);
    return menu;
}

function loadMenu() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const menuSection = createMenuSection();
    content.appendChild(menuSection);
}

export default loadMenu;