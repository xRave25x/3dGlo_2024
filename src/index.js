import menu from './modules/menu';
import timer from './modules/timer';
import modal from './modules/modal';
import calc from './modules/calc';
import tabs from './modules/tabs';
import slider from './modules/slider';
import { sliderCarousel } from './modules/sliderCarousel';
import sendForm from './modules/sendForm';
import inputFieldsRules from './inputFiledRules';


timer('23 january 2024');
menu();
modal();

calc(100);
tabs();
slider();
sliderCarousel();
inputFieldsRules();
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});

