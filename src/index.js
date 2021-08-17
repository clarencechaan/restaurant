import Logo from './logo.jpg'
import './style.css';
import createMenu from './menu.js'
import createContact from './contact.js'
import createAbout from './about.js'

const content = document.getElementById("content");


function createLogo() {
    const element = document.createElement('div');
    const myLogo = new Image();
    myLogo.classList = "logo";

    myLogo.src = Logo;
    element.appendChild(myLogo);
    return element;
}

function createHeader() {
    const header = document.createElement('h1');
    const headerBox = document.createElement('div');
    headerBox.classList = "translucent header-box"

    header.classList = "header-text";
    header.innerHTML = "Café Bleu";
    headerBox.appendChild(header);

    return headerBox;
}

function createTabs() {
    const tabBox = document.createElement('div');
    const aboutTabBox = document.createElement('h3');
    const menuTabBox = document.createElement('h3');
    const contactTabBox = document.createElement('h3');
    aboutTabBox.classList = "tab translucent";
    menuTabBox.classList = "tab translucent";
    contactTabBox.classList = "tab translucent";
    aboutTabBox.id = 'about-tab';
    menuTabBox.id = 'menu-tab';
    contactTabBox.id = 'contact-tab';
    aboutTabBox.innerHTML = "About Us";
    menuTabBox.innerHTML = "Menu";
    contactTabBox.innerHTML = "Contact"
    tabBox.classList = "tab-box";
    tabBox.appendChild(aboutTabBox);
    tabBox.appendChild(menuTabBox);
    tabBox.appendChild(contactTabBox);
    return tabBox;
}

function addEventListenersToTabs() {
    const aboutTab = document.querySelector('#about-tab');
    const menuTab = document.querySelector('#menu-tab');
    const contactTab = document.querySelector('#contact-tab');

    aboutTab.addEventListener('click', function() {
        loadTab(createAbout())
    });

    menuTab.addEventListener('click', function() {
        loadTab(createMenu())
    });

    contactTab.addEventListener('click', function() {
        loadTab(createContact())
    });
}

function loadTab(element) {
    const viewingArea = document.getElementsByClassName("viewing-area");
    while(viewingArea.length > 0){
        viewingArea[0].parentNode.removeChild(viewingArea[0]);
    }
    content.appendChild(element);
}

content.appendChild(createLogo());
content.appendChild(createHeader());
content.appendChild(createTabs());
content.appendChild(createAbout());
addEventListenersToTabs();