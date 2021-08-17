import BLT from './blt.jpeg'
import Bagel from './bagel.jpeg'
import Coffee from './coffee.jpeg'

export default function createMenu() {
    const menuBox = document.createElement('div');
    const menuHeader = document.createElement('h2');
    const bltHeader = document.createElement('h3');
    const bagelHeader = document.createElement('h3');
    const coffeeHeader = document.createElement('h3');
    const bltInfo = document.createElement('p');
    const bagelInfo = document.createElement('p');
    const coffeeInfo = document.createElement('p');
    const bltImg = new Image();
    const bagelImg = new Image();
    const coffeeImg = new Image();
    bltImg.classList = "menu-item-img";
    bagelImg.classList = "menu-item-img";
    coffeeImg.classList = "menu-item-img";
    bltImg.src = BLT;
    bagelImg.src = Bagel;
    coffeeImg.src = Coffee;
    menuHeader.innerHTML = "Menu";
    bltHeader.innerHTML = "B.L.T.";
    bagelHeader.innerHTML = "Bagel";
    coffeeHeader.innerHTML = "Coffee";
    bltInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    bagelInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    coffeeInfo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    menuBox.classList = "translucent menu-box viewing-area";
    menuBox.appendChild(menuHeader);
    menuBox.appendChild(bltImg);
    menuBox.appendChild(bltHeader);
    menuBox.appendChild(bltInfo);
    menuBox.appendChild(bagelImg);
    menuBox.appendChild(bagelHeader);
    menuBox.appendChild(bagelInfo);
    menuBox.appendChild(coffeeImg);
    menuBox.appendChild(coffeeHeader);
    menuBox.appendChild(coffeeInfo);    
    return menuBox;
}