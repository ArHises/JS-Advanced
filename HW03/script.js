// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

window.addEventListener('DOMContentLoaded',function() {
    console.log('все теги прогрузились');
}); 

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.onload = function() {
    console.log('страница загрузилась');
}

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener('click', function(event) {
    const target = event.target;
      const tagName = target.tagName.toLowerCase();
      const hasClass = target.classList.contains('super_element');
      const message = `Класс "super_element" ${hasClass ? 'присутствует' : 'отсутствует'} в элементе "${tagName}".`;
      console.log(message);
  });

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const divElement = document.querySelector('textarea');

divElement.addEventListener('mouseover', function() {
  console.log('Вы навели на textarea.');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulElem = document.querySelector('ul');

ulElem.addEventListener('click', function(event) {
    console.log(event.target.textContent);
    }
);

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// при делегировании событий событие click всплывает от элемента button до элемента ul, поэтому сначала срабатывает обработчик события на элементе ul (из 5 задания), а затем обработчик на элементе button.


// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liElem = document.querySelectorAll('li');

liElem.forEach((li, index) => {
  if ((index + 1) % 2 === 0) {
    li.style.backgroundColor = '#ffcc40';
  }
});
