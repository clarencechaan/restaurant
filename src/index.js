import Logo from './logo.jpg'
import './style.css';

function component() {
    const element = document.createElement('div');
    const myLogo = new Image();
    myLogo.classList = "logo";

    myLogo.src = Logo;

    element.appendChild(myLogo);

    return element;
}

function header() {
    const header = document.createElement('h1');
    const headerBox = document.createElement('div');
    headerBox.classList = "translucent header-box"

    header.classList = "header-text";
    header.innerHTML = "Café Bleu";
    headerBox.appendChild(header);

    return headerBox;
}

function tabs() {
    const tabBox = document.createElement('div');
    const aboutTabBox = document.createElement('h3');
    const menuTabBox = document.createElement('h3');
    const contactTabBox = document.createElement('h3');
    aboutTabBox.classList = "tab translucent";
    menuTabBox.classList = "tab translucent";
    contactTabBox.classList = "tab translucent";
    aboutTabBox.innerHTML = "About Us";
    menuTabBox.innerHTML = "Menu";
    contactTabBox.innerHTML = "Contact"
    tabBox.classList = "tab-box";
    tabBox.appendChild(aboutTabBox);
    tabBox.appendChild(menuTabBox);
    tabBox.appendChild(contactTabBox);
    return tabBox;

}

function about() {
    const aboutBox = document.createElement('div');
    const aboutHeader = document.createElement('h2');
    const about = document.createElement('p');
    aboutHeader.innerHTML = "About Us"
    about.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    about.classList = "about-text";
    aboutBox.classList = "translucent about-box";
    aboutBox.appendChild(aboutHeader);
    aboutBox.appendChild(about);
    return aboutBox;
}

const content = document.getElementById("content");

content.appendChild(component());
content.appendChild(header());
content.appendChild(tabs());
content.appendChild(about());
