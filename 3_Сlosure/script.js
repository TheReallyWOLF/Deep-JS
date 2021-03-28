/* Замыкания и их использование, инкапсуляция при помощи замыкания */

// классическое замыкание
function createCalcFunction(n = 1) {
    return function () {
        console.log(10 * n)
    }
}
// переменная n была замкнута (сохранена) в теле (скоупе) функции которая была возвращена по выполнению createCalcFunction
const calc = createCalcFunction(10);
calc(); // 100

// ===== //

function createIncrementer (n = 1) {
    return function (number = 1) {
        return n + number;
    }
}

const addOne = createIncrementer(1);
const addTwo = createIncrementer(2);

console.log(addOne(10)); // 11
console.log(addOne(41)); // 42

console.log(addTwo(12)); // 14
console.log(addTwo(44)); // 46

// инкапсуляция при помощи замыкания

const privateArr = function () {
    const arr = [1,2,3,4,5,6];
    // возращает объект позволяющтй работать с массивом arr но не позволяющий напрямую его изменять. подобие инкапсуляции
    return {
        getArr: () => {
            return arr;
        },
        get: (n = 0) => {
            // если отрицательне число то выдает элемент с конца
            if(n < 0) {
                // если заданная позиция с минусом попадает в длинну массива с конца
                if(arr.length + n >= -1) {
                    let k = arr.length + n;
                    return arr[k];
                }
                return void 0; // аналог undefined
            }
            return arr[n];
        },
        pushItem: (item) => {
            return arr.push(item)
        },
        deleteItem: (n) => {
            return arr.splice(n, 1)
        }
    }
}

// ======реализация собственного bind====== //

// реализация собственного bind
function bind(context = defaultPerson, changeContextFun = DefaultLogPerson) {
    return function (...args) {
        changeContextFun.apply(context, args);
    }
}
// функция ожидающая контекст
function logPerson () {
    console.log(`Person ${this.name}, ${this.age}, ${this.job}`);
}
// заглушка
function DefaultLogPerson () {
    console.log(`Person ${this.name}`);
}
// заглушка
const defaultPerson = {
    name: 'defaultPerson',
    age: 0,
    job : 'defaultPerson'
}

const personOne = {
    name: 'Wolf',
    age: 12,
    job : 'SWG'
}

const personTwo = {
    name: 'Juli',
    age: 22,
    job : 'QSS'
}

// проверка работоспособности
bind()();
bind(personOne, logPerson)();
bind(personTwo, logPerson)();
