// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const formElem = document.getElementById('from');
const spanElem = document.querySelector('span');
console.log(formElem);
console.log(spanElem);

formElem.addEventListener('input', function(e) {
    spanElem.innerHTML = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const msgBtn = document.querySelector('button.messageBtn');
const msgElem = document.querySelector('div.message');

msgBtn.addEventListener('click' , function(e) {
    msgElem.classList.add('animate_animated', 'animate_fadeInLeftBig');
    msgElem.style.visibility = 'visible';
});



// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formElement = document.querySelector('form');

formElement.addEventListener('submit', function(e) {
  e.preventDefault();

  formElement.querySelectorAll('.form-control').forEach(function(input) {
    if (!input.value) {
      input.classList.remove('error');
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
});

formElement.addEventListener('input', function(e) {
    const target = e.target;
    if (target.classList.contains('form-control')) {
      if (!target.value.trim()) {
        target.classList.add('error');
      } else {
        target.classList.remove('error');
      }
    }
});
