const date = new Date();
let welcome = '';
const hour = date.getHours();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

if (hour < 12) {
    welcome = "Доброе утро";
} else if (hour < 17) {
    welcome = "Добрый день";
} else {
    welcome = "Добрый вечер";
}

const today = new Date();

const nextDate = new Date("January 1, 2025");
const msPerDay = 24 * 60 * 60 * 1000;
const daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);

const addElement = () => {
    const myDiv = document.getElementById('my-div');
    const hello = document.createElement('div');
    hello.innerHTML = welcome;
    document.body.insertBefore(hello, myDiv);

    const today = document.createElement('div');
    today.innerHTML = 'Сегодня: ' + days[date.getDay()];
    document.body.insertBefore(today, myDiv);

    const currentTime = document.createElement('div');
    currentTime.innerHTML = 'Текущее время: ' + date.toLocaleTimeString('en');
    document.body.insertBefore(currentTime, myDiv);

    const timeToNewYear = document.createElement('div');
    timeToNewYear.innerHTML = 'До нового года осталось ' + daysLeft + ' дней';
    document.body.insertBefore(timeToNewYear, myDiv);

};

document.body.onload = addElement();
