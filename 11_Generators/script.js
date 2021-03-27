// Генераторы

// функция генератор * можно писать и в начале *function(){}
function* generatorString() {
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
    yield ' ';
    yield 'w';
    yield 'o';
    yield 'r';
    yield 'l';
    yield 'd';
}

const genStrFoo = generatorString();
// через метод next можно получать последующие yield
function next() {
    console.log(genStrFoo.next());
}
next(); next(); next(); next(); next(); next(); next(); next(); next(); next(); next(); next();
/* результаты выполнения
 {value: "H", done: false}
 {value: "e", done: false}
 {value: "l", done: false}
 {value: "l", done: false}
 {value: "o", done: false}
 {value: " ", done: false}
 {value: "w", done: false}
 {value: "o", done: false}
 {value: "r", done: false}
 {value: "l", done: false}
 {value: "d", done: false}
 {value: undefined, done: true}
 */

// функция Генератор которая выдает порционно каждую итерацию благодаря yield и методу next
function* numberGenerator(number = 10) {
    for (let i = 0; i < number; i++) {
        yield i; // вызов останосится тут до следующего next
    }
}

const num = numberGenerator(7);

// свой генератор

const iterator = {
    //generatorFoo (num = 10) {
    [Symbol.iterator] (num = 10) { // спец ключ который позводит использовать оператор of в цикле for
        let i = 0;

        return {
            next() {
                if (i < num) {
                    return {value: ++i, done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}
// аналог генератора с собственным методом next => testIterator().next()
const testIterator = iterator[Symbol.iterator];

// ===================== //
const string = 'string';
// выводит посимвольно строку
// оператор of может быть притменен если присутствует поле Symbol в прототипе переданных данных
for (let k of string) {
    console.log(k)
}
// вручную создали валидный генератор с возможностью перебора в массиве по ключу (в данный момент k = i из объекта iterator
for (let k of iterator) {
    console.log(k)
}
// в дефолтной ф-ции конструкторе есть уже ключ Symbol.iterator поэтому возможен перебор через for of
function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
// перебор по символу через for of
for (let k of iter(6)) {
    console.log(k)
}



















