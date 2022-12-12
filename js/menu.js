(function () {
    const buttonMenu = document.querySelector('.header-menu-burger');
    const itemsMenu = document.querySelector('.header-menu-items')
    const headerMenu = document.querySelector('.header-menu');

    const handleButtonMenuClick = () => {
        headerMenu.classList.toggle('header-menu-show');
    }

    const handleItemMenuClick = () => {
        headerMenu.classList.remove('header-menu-show')
    }

    buttonMenu.addEventListener('click', handleButtonMenuClick);
    itemsMenu.addEventListener('click', handleItemMenuClick);
})()
