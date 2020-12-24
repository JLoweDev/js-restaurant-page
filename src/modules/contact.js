function createContactSection() {
    const contact = document.createElement('section');
    contact.setAttribute('class', 'section');
    const contactTitle = document.createElement('h2');
    contactTitle.setAttribute('class', 'section-title');
    contactTitle.textContent = 'Contact';
    const contactText1 = document.createElement('p');
    contactText1.setAttribute('class', 'section-text');
    contactText1.textContent = '✆ 0121456732';
    const contactText2 = document.createElement('p');
    contactText2.setAttribute('class', 'section-text');
    contactText2.textContent = '✉ dave@wynettegrill.com';
    contact.appendChild(contactTitle);
    contact.appendChild(contactText1);
    contact.appendChild(contactText2);
    return contact;
}

function loadContact() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const contactSection = createContactSection();
    content.appendChild(contactSection);
}


export default loadContact;