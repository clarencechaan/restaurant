export default function createAbout() {
    const aboutBox = document.createElement('div');
    const aboutHeader = document.createElement('h2');
    const about = document.createElement('p');
    aboutHeader.innerHTML = "About Us"
    about.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    aboutBox.classList = "translucent about-box viewing-area";
    aboutBox.appendChild(aboutHeader);
    aboutBox.appendChild(about);
    return aboutBox;
}