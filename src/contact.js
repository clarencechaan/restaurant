
export default function createContact() {
    const contactBox = document.createElement('div');
    const contactHeader = document.createElement('h2');
    const contact = document.createElement('p');
    contactHeader.innerHTML = "Contact Us"
    contact.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    contactBox.classList = "translucent contact-box viewing-area";
    contactBox.appendChild(contactHeader);
    contactBox.appendChild(contact);
    return contactBox;
}