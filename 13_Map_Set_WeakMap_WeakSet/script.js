// Map, Set, WeakMap, WeakSet

// обычный объект
const object = {
    name: 'Wolf',
    age: 23,
    job: 'Master'
}

// массив с массивами по подобию с object переменной
const entries = [
    ['name', 'Wolf'],
    ['age', 23],
    ['job', 'Master']
]

console.log(Object.entries(object));
/* результат выполнения entries
[
    ['name', 'Wolf'],
    ['age', 23],
    ['job', 'Master']
]
* */
console.log(Object.fromEntries(entries));
/* результат выполнения entries fromEntries
{
    name: 'Wolf',
    age: 23,
    job: 'Master'
}
*/

// ========================= MAP - карта

// принимает массив типа entries => обращаться к данным можно только через get map.get("name") // "Wolf"
// в качестве ключей можно использовать любые типы данных
const map = new Map(entries);
console.log(map);
/*
    {"name" => "Wolf"}
    {"age" => 23}
    {"job" => "Master"}
*/
// добавить
map.set('string', 'str'); // строка в качестве ключа
map.set(object, 'str'); // объект в виде ключа для получение его значения нужно запросить map.get(object);
map.set(NaN, 'NaN');
// удалить
map.delete('job');
// проверить ключ
map.has('job');
// очистить всю карту map.clear();
// размер карты map.size

// ============================

for (let entry of map.entries()) {
    console.log(entry);
}
// аналог кода выше
/*for (let [key, value] of map) {
    console.log(key, value);
}*/


/*
[
    ["name", "Wolf"]
    ["age", 23]
    ["string", "str"]
    [{…}, "str"]
    [NaN, "NaN"]
]
*/
// только значения
for (let value of map.values()) {
    console.log(value);
}
// только ключи
for (let key of map.keys()) {
    console.log(key);
}
// методы перебора массива работают тоже
map.forEach((value, key, map) => {
    console.log(value, key);
});
// ================ сделать обычный массив из map
const arraySpreed = [...map];
// или
const arrayFrom = Array.from(map);
// ================ сделать объект из карты
const mapObj = Object.fromEntries(map.entries());
// все ключи не из простейших типов станут строкой например объект в данном примере будет '[object, Object]'

// ================ Применения карт

const users = [
    {name: 'Wolf'},
    {name: 'Shons'},
    {name: 'Elf'},
    {name: 'Greed'},
    {name: 'Bob'}
]

const visits = new Map();

visits
    .set(users[0], new Date())
    .set(users[1], new Date())
    .set(users[2], new Date())
    .set(users[3], new Date(new Date().getTime() + 1000 * 60))
    .set(users[4], new Date(new Date().getTime() + 3000 * 60))

function lastVisit(user) {
    return visits.get(user);
}
// получать дату визита пользователя при помощи обращения к массиву users
console.log(lastVisit(users[1]));


// ||||||||||||||||||||||||||||| SET ||||||||||||||||||||||||||||||||||

// возращает set сущность с уникальнымит значениями, все дубликаты будут удалены
const set = new Set([1, 2, 2, 2, 3, 3, 3, 4, 4, 5]);

console.log(set) // Set(5) {1, 2, 3, 4, 5}

// set.add(10) - добавление значений дубликаты добавлять не будет
// set.has(30) - булево значение о наличии поля
// set.size - размер
// set.delete(1) - удалить
// set.clear() - очистить
// set.values() set.keys() - выдают одно и тоже

// =============================== практическое применение
// написать функцию которая возвращает уникальные значения

function uniqValue (array) {
    // return [...new Set(array)];
    return Array.from(new Set(array));
}

// ||||||||||||||||||||||||||||| WeakMap |||||||||||||||||||||||||||||||||| - слабая карта
// в структуре WeakMap ключи являются ТОЛЬКО объектами

// позволяет избежать утечек памяти в js

let weakMapObj = {name: 'WeakMap'}

const arr = [weakMapObj];

const weakMap = new WeakMap([
    [weakMapObj, 'data']
]);

weakMapObj = null;
// пример засорения памяти
console.log(weakMapObj); // null
console.log(arr[0]); // {name: "WeakMap"} ненужный объект хранится в памяти
// при помощи WeakMap сборщик мусора удалил ненужный объект
console.log(weakMap.get(weakMapObj)); // undefined

// рабочий пример с кешированием и WeakMap

const cacheUsers = new WeakMap();

function cacheUsersFoo (user) {
    if (!cacheUsers.has(user)) {
        cacheUsers.set(user, Date.now())
    }
    return cacheUsers.get(user);
}

let wolf = {name: 'Wolf'};
let sweta = {name: 'sweta'};

cacheUsersFoo(wolf);
cacheUsersFoo(sweta);

sweta = null;
// сборщик мусора моментально удалит объект sweta из WeakMap в этом его идея
console.log(cacheUsers.has(wolf)); // true
console.log(cacheUsers.has(sweta)); // false

// ||||||||||||||||||||||||||||| WeakSet ||||||||||||||||||||||||||||||||||
// WeakSet отличается от WeakMap только тем что ключи должны быть объектами в остальнеом работает так же

const usersWeakSet = [
    {name: 'Wolf'},
    {name: 'Shons'},
    {name: 'Elf'},
    {name: 'Greed'},
    {name: 'Bob'}
]

const weakSet = new WeakSet();
weakSet.add(usersWeakSet[0]).add(usersWeakSet[1]).add(usersWeakSet[3]);
// удалит автоматом и из weakSet, очистит память
users.splice(1,1);

console.log(weakSet.has(usersWeakSet[0]));
console.log(weakSet.has(usersWeakSet[1]));

