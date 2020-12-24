function createAboutSection() {
    const about = document.createElement('section');
    about.setAttribute('class', 'section');
    const aboutTitle = document.createElement('h2');
    aboutTitle.setAttribute('class', 'section-title');
    aboutTitle.textContent = 'About';
    const aboutText = document.createElement('p');
    aboutText.setAttribute('class', 'section-text');
    aboutText.textContent = 'We serve illegal food.';
    about.appendChild(aboutTitle);
    about.appendChild(aboutText);
    return about;
}

function loadHome() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const aboutSection = createAboutSection();
    content.appendChild(aboutSection);
}


export default loadHome;