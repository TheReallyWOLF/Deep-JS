// Destructuring
function calcValues(a, b){
    return [
        a + b,
        a - b,
        a * b,
        a / b,
        undefined
    ];
}

console.log(calcValues(45, 30));

const result = calcValues(63, 32);
const sum = result[0];
const sub = result[1];

// что бы не обращаться отдельно к каждому индексу массива можно воспользоваться Деструктуризацией
const [sumDes, subDes, mult,, sumArr = 'Значение по умолчанию'] = result;
// ,, - можно пропустить не нужные аргументы не создавая под нее отдельную переменную

// можно еще больше упростить написание
// const [sumDes, subDes] = calcValues(63, 32);

console.log(sumDes, subDes, mult, sumArr); // 95 31 2016 "Значение по умолчанию"


// **** Деструктуризациея с объектами ****

const citiesRussiaWithPopulation = {
    Moscow: 20,
    Novosib: 4,
    Spb: 14,
    Sertolovo: {
        www: 'www',
        xxx: 'swan'
    }
};

function log({Moscow: firstName = 'wolf', Sertolovo: {www}}){
    console.log(firstName, www);
}

log(citiesRussiaWithPopulation); // 20 "www"

const {
    Moscow: NewTown = 'без имении',
    Novosib, name = 'Нет ключа',
    age = 'Нет ключа', car = 'Нет ключа',
    Sertolovo: {www: w, xxx}
} = citiesRussiaWithPopulation;

// создает переменные NewTown, Novosib, name, car, age, xxx, w и присваивает им значения
console.log(NewTown, Novosib, name, car, age, xxx); // 20 4 "Нет ключа" "Нет ключа" "Нет ключа" "swan"













