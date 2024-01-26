import { animate } from './helpers';

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const popup = document.querySelector('.popup');
    const screenWidth = window.innerWidth;



    const animateWidth = () => {
        if (screenWidth > 768) {

            animate();
        }
    };

    buttons.forEach(button => button.addEventListener('click', animateWidth));

    popup.addEventListener('click', e => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        }
    });

};

export default modal;
