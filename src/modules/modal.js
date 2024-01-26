import { animate } from './helpers';

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const popup = document.querySelector('.popup');






    buttons.forEach(button => button.addEventListener('click', () => {
        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                if (window.innerWidth >= 768) {
                    popup.style.display = 'block';
                    popup.style.opacity = progress;
                }
            }
        });
    }));

    popup.addEventListener('click', e => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        }
    });

};

export default modal;
