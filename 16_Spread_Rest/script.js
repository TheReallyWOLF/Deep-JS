// Spread, rest
const citiesRussia = ['Москва', 'Новосибирск', 'Ленинград', 'Улан-Уде', 'Спб'];
const citiesEurope = ['Киев', 'Париж', 'НьюЙорк', 'Париж', 'Сантьяго'];

const citiesRussiaWithPopulation = {
    Moscow: 20,
    Novosib: 4,
    Spb: 14,
    Sertolovo: 2
};
const citiesEuropeWithPopulation = {
    New: 20,
    Nerf: 14,
    Berlin: 14,
    Paris: 12
};

// Spread
console.log(...citiesRussia); // Москва Новосибирск Ленинград Улан-Уде Спб
console.log(...citiesEurope); // Киев Париж НьюЙорк Париж Сантьяго
// копирует не ссылку а создает новый массив
const allCities = [...citiesRussia, 'Англия' ,...citiesEurope]; // все массивы в одном
// как это выглядело раньше
//const allCities = citiesEurope.concat(citiesRussia);
console.log(allCities);

// *** спред оператор с объектами ***
console.log(citiesRussiaWithPopulation);
console.log(citiesEuropeWithPopulation);
// копирует не ссылку а создает новый объект
console.log({...citiesRussiaWithPopulation}); // {Moscow: 20, Novosib: 4, Spb: 14, Sertolovo: 2}
console.log({...citiesEuropeWithPopulation}); // {New: 20, Nerf: 14, Berlin: 14, Paris: 12}
// происходит умный мерж если есть одинаковые ключи то берет ключи с последнего объекта (перезаписываются)
console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation}); // 1 общий объект

// Практическое применение spread оператора
const numbers = [5, 37, 11, 23, 54];
Math.max(5, 37, 42, 17);
Math.max(...numbers); // Math.max не принимает объект !

// как работало раньше
console.log(Math.max.apply(null, numbers));


const divs = document.querySelectorAll('div'); // коллекция div элементов
const nodes = [...divs]; // позволяет преобразовать дом коллекцию в массив и использовать все методы массива



// ************* REST ************************

function sum(a, b, ...rest) {
    console.log(rest); // массив всех остальных параметров кроме первых в массиве
    return a + b + rest.reduce((acc, item) => {
        return acc + item
    }, 0);
}

console.log(sum(...numbers)); // 130


//const a = numbers[0]; // 5
//const b = numbers[1]; // 37

const [a, b, ...other] = numbers; // ДЕСТРУКТУРИЗАЦИЯ массива запись идентична той что выше

const person = {
    name: 'Wolf',
    age: 22,
    city: 'Спб',
    country: 'WolfLand'
}

const {name, age, ...address} = person; // ДЕСТРУКТУРИЗАЦИЯ объекта массива

console.log(name, age); // Wolf 22
console.log(address); // {city: "Спб", country: "WolfLand"}























