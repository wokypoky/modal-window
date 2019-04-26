// Модально окно

let modalWindow = document.querySelector('.modalwindow');
let btnShowSummer = document.querySelector('.btn-time-until-summer');
let btnCloseSummer = document.querySelector('.remove-summer-btn');
let blackblur = document.querySelector('.blackphone');

// Обработчик события на кнопку, открывающий модальное окно
modalWindow.style.opacity = 0.05;
btnShowSummer.addEventListener('click', function() {
    modalWindow.style.visibility = 'visible';
    let op = 0.05;
    let increaseOpacityOfModal = setInterval(increaseOpacity, 30);
    function increaseOpacity () {
    modalWindow.style.opacity = op;
    op = op + 0.05;
    if (modalWindow.style.opacity >= 1) {
        clearInterval(increaseOpacityOfModal);
    }
}
    document.body.style.overflow = 'hidden';
    blackblur.style.display = 'block';
    blackblur.style.opacity = '0.8';
});
btnCloseSummer.addEventListener('click', function() {
    modalWindow.style.visibility = 'hidden';
    document.body.style.overflow = '';
    blackblur.style.display = 'none';
    blackblur.style.opacity = '0';
    modalWindow.style.opacity = 0.05;
});
document.addEventListener('keydown', function(evt) {
    if(evt.keyCode == 27) {
    modalWindow.style.visibility = 'hidden';
    document.body.style.overflow = '';
    blackblur.style.display = 'none';
    blackblur.style.opacity = '0';
    modalWindow.style.opacity = 0.05;
    }
});