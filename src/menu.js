
export default function createMenu() {
    const menuBox = document.createElement('div');
    const menuHeader = document.createElement('h2');
    const menu = document.createElement('p');
    menuHeader.innerHTML = "Menu"
    menu.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    menuBox.classList = "translucent menu-box viewing-area";
    menuBox.appendChild(menuHeader);
    menuBox.appendChild(menu);
    return menuBox;
}