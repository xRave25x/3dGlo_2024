const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const popup = document.querySelector('.popup');
    const screenWidth = window.innerWidth;

    const animationPopup = () => {
        if (screenWidth > 768) {
            let op = 0;
            setTimeout(function func() {
                if (op > 1)
                    return;
                popup.style.display = 'block';
                popup.style.opacity = op;
                op += 0.1;
                setTimeout(func, 60);
            }, 60);
        }


    };

    buttons.forEach(button => button.addEventListener('click', animationPopup));


    popup.addEventListener('click', e => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        }
    });

};

export default modal;
