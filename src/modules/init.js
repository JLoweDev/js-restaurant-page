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

export default loadPage;