const menu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    const handleMenu = e => {
        const target = e.target;
        if (target.closest('.menu')) {
            menu.classList.toggle('active-menu');
        } else if (target !== menu && target.closest('[href^="#"]')) {
            menu.classList.toggle('active-menu');
        }
    };

    btnMenu.addEventListener('click', handleMenu);
    menu.addEventListener('click', handleMenu);

};
export default menu;
