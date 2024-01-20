const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const popup = document.querySelector('.popup');
    const popupClose = popup.querySelector('.popup-close');
    const popupContent = popup.querySelector('.popup-content');
    const screenWidth = window.screen.width;
    console.log(screenWidth);

    const animationPopup = () => {
        if (screenWidth > 768) {
            const start = Date.now();
            const draw = timePassed => {
                popupContent.style.left = timePassed / 5 + 'px';
            };
            const timer = setInterval(() => {
                const timePassed = Date.now() - start;
                if (timePassed >= 4000) {
                    clearInterval(timer);
                    return;
                }
                draw(timePassed);
            }, 20);
            popup.style.display = 'block';
        } else {
            popup.style.display = 'block';
        }
    };

    buttons.forEach(button => button.addEventListener('click', animationPopup));



    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });


};

export default modal;
