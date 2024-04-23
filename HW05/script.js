// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// const data = '';
var fetchedInfo = null;
async function fetchData() {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
    const options = {
        method: 'GET',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '4e368644aamshfc6fa3790b1e2f7p12d884jsn25c6eba7391b',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        fetchedInfo = result;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    console.log(fetchedInfo);
}

fetchData();


// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

data.forEach(element => {

    const contentBox = document.querySelector('.content-box');

    const conteiner = document.createElement('div');
    conteiner.classList.add('conteiner');

    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', element.img);

    const headerElem = document.createElement('h2');
    headerElem.textContent = element.h2;

    const prgElem = document.createElement('p');
    prgElem.textContent = element.p;

    contentBox.appendChild(conteiner);
    conteiner.appendChild(imgElem);
    conteiner.appendChild(headerElem);
    conteiner.appendChild(prgElem);
});
