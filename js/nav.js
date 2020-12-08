const checkbox = document.querySelector('#navi-toggle');
let naviList = document.querySelector('.navigation__list');

naviList.addEventListener('click', e => {
    e.preventDefault;
    checkbox.checked = false;
})

