
const animate = () => {
    const popup = document.querySelector('.popup');
    popup.style.display = 'block';
    setTimeout(() => {

        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                popup.style.opacity = progress;
            }
        });
    }, 2000);


    // let op = 0;
    // setTimeout(function func() {
    //     if (op > 1)
    //         return;
    //     popup.style.display = 'block';
    //     popup.style.opacity = op;
    //     op += 0.1;

    // }, 60);
};

export { animate };


