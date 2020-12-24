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

export default loadPage;