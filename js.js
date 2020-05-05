var item = document.querySelector('.logo-o');

item.addEventListener('load', (e) => {
    item.classList.toggle('invisible');
    item.addEventListener('animationend', animationEndCallback);
});

animationEndCallback = (e) => {
    item.removeEventListener('animationend', animationEndCallback);
    item.classList.remove('invisible');
}