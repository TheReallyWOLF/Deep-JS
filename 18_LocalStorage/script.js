// LocalStorage

const myNumber = 20;

// localStorage работает для текущего домена! На другом домене данные не будут доступны
// localStorage глобальная переменная в БРАУЗЕРЕ которая не перезатирается при перезагрузке страницы
// localStorage работает только со строками

localStorage.setItem('number', myNumber.toString()); // записать что то в LocalStorage
localStorage.getItem('number'); // получить из localStorage значение по ключу
localStorage.clear(); // полностью очищает localStorage
localStorage.removeItem('number'); // удаляет переданный ключ

const obj = {
    name: 'wolf',
    age: 22
}
// тк localStorage работает только со строками объекты и массивы необходимо превращать в строки
localStorage.setItem('person', JSON.stringify(obj));
const raw = JSON.parse(localStorage.getItem('person'));
raw.name = 'Другое имя'
localStorage.setItem('person', JSON.stringify(raw));
console.log(localStorage.getItem('person'));

// синхронизация между вкладками при помощи window

// вызывается когда в localStorage что то записывается если открыто несколько вкладок одного домена
window.addEventListener('storage', event => {
    console.log(event);
})








