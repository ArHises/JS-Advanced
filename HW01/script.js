// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const superEl = document.getElementById("super_link");
console.log(superEl);

// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardEl = document.querySelectorAll('a.card-link');
cardEl.forEach(element => {
    element.textContent = 'ссылка';
});
console.log(cardEl);

// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardInBody = document.querySelectorAll('.card-body .card-link');
console.log(cardInBody);

// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const element = document.querySelector('[data-number="50"]');
console.log(element);

// []()
// 5. Выведите содержимое тега title в консоль.

console.log(document.querySelector('title').innerText);
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

console.log(document.querySelector('.card-title').parentNode);

// []()
// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const hello = document.createElement('p');
hello.textContent = 'Привет';

document.querySelector('.card').prepend(hello);

// 8. Удалите тег h6 на странице.

document.querySelector('h6').remove();