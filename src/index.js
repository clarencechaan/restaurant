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

function about() {
    const about = document.createElement('p');
    about.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const aboutBox = document.createElement('div');
    about.classList = "about-text";
    aboutBox.classList = "translucent about-box";
    aboutBox.appendChild(about);
    return aboutBox;
}

document.body.appendChild(component());
document.body.appendChild(header());
document.body.appendChild(about());
