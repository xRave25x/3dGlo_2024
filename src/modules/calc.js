const calc = () => {
    const inputFields = document.querySelector('.calc-block');
    const formEmail = document.querySelectorAll('.form-email');
    const formName = document.querySelectorAll('[name="user_name"]');
    const formPhone = document.querySelectorAll('.form-phone');
    const message = document.querySelector('.mess');



    formName.forEach(name => name.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');
    }));

    formPhone.forEach(phone => phone.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/[^0-9-()]/gi, '');
    }));

    formEmail.forEach(email => email.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/[^a-z@-_.!~*0-9]/gi, '');
    }));

    message.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/[^а-яё -]/gi, '');
    });

    inputFields.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/[^.\d]/g, '');

    });

};

export default calc;
