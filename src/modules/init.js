function createHeader() {
    const header = document.createElement('header');
    header.setAttribute('class', 'hero-image');
    const heroDiv = document.createElement('div');
    heroDiv.setAttribute('class', 'hero-text')
    header.appendChild(heroDiv);
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Wynette Grill';
    const heroText = document.createElement('p');
    heroText.textContent = 'Home of Niche Cuisine';
    heroDiv.appendChild(heroTitle);
    heroDiv.appendChild(heroText);
    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'nav');
    const aboutBtn = createBtn('about', 'about');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.setAttribute('id', 'tab-content');
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'foot-container');
    const p1 = document.createElement('p');
    p1.setAttribute('class', 'tab');
    p1.textContent = 'Wynette Grill © 2020';
    const p2 = document.createElement('p');
    p2.setAttribute('class', 'tab');
    p2.textContent = 'A truly unforgettable experience.'
    const p3 = document.createElement('p');
    p3.setAttribute('class', 'tab');
    p3.textContent = '✆ 0121456732';
    footer.appendChild(p1);
    footer.appendChild(p2);
    footer.appendChild(p3);
    return footer;
}

function loadPage() {
    const content = document.getElementById('content');
    const header = createHeader();
    content.appendChild(header);
    const nav = createNav();
    content.appendChild(nav);
    const main = createMain();
    content.appendChild(main);
    const footer = createFooter();
    content.appendChild(footer);
}

export default loadPage;