// Методы массивов

// обычный массив
const userData = [
    {id: 1, name: 'Wolf', job: 'Master', age: 21, money: 100},
    {id: 2, name: 'Sam', job: 'Web', age: 11, money: 900},
    {id: 3, name: 'Juli', job: 'WER', age: 15, money: 1100},
    {id: 4, name: 'Sti', job: 'WOW', age: 54, money: 200},
    {id: 4, name: 'Wild', job: 'LOW', age: 24, money: 500},
    {id: 6, name: 'Bob', job: 'None', age: 10, money: 300}
];

// =============================== forEach - перебирает каждый элемент массивa изменяя текущий массив

/*
element - элемент массива
index порядковый номер в массиве (индекс)
userDataArr - текущий итерируемый массив
*/
userData.forEach((element , index, userDataArr) => {
    // что то сделать с каждым элементом
})

// =============================== map - перебирает каждый элемент массивa совершая кастомную логику и возращает новый массив

/*
element - элемент массива
index порядковый номер в массиве (индекс)
userDataArr - текущий итерируемый массив
*/
const newUserDataMap = userData.map((element , index, userDataArr) => {
    // вернуть данные которые попадут в новый массив с текущим индексом
    return element.name;
}) // ["Wolf", "Sam", "Juli", "Sti", "Wild", "Bob"] - новый массив созданный при помощи изменненого исходного

// =============================== filter перебирает массив возращая те элементы которые дали true при выполнении кол бек ф-ции в новом массиве

/*
element - элемент массива
index порядковый номер в массиве (индекс)
userDataArr - текущий итерируемый массив
*/
const newUserDataFilter = userData.filter((element , index, userDataArr) => {
    if (element.age >= 18) {
        return true;
    }
})
/* // более лаконичная запись работающая так же
const newUserDataFilter = userData.filter(element => element.age >= 18)
*/

// =============================== reduce

// просумировать все элементы money в массиве userData
let sum = 0;
for (let i = 0; i < userData.length; i++) {
    sum += userData[i].money;
}
console.log(sum);
// тоже самое на при помощи reduce
const sumReduce = userData.reduce((total, arr) => {
    return total + arr.money;
}, 0); // 0 в конце значение по умолчанию для начала аккумуляции
console.log(sumReduce);

// =============================== find перебирает массив возращая те элементы которые дали true при выполнении кол бек ф-ции

const wolf = userData.find(element => {
    return element.name === 'Wolf';
});
console.log(wolf); // {id: 1, name: "Wolf", job: "Master", age: 21, money: 100}

// =============================== findIndex перебирает массив возращая индекс элементов которые дали true при выполнении кол бек ф-ции

const wolfIndex = userData.findIndex(element => {
    return element.name === 'Wolf';
});
console.log(wolfIndex); // 0

// =============================== практическтий пример

const practice = userData
    .filter(item => item.money > 300)
    .map(item => {
        return {
            info: `${item.name} (${item.age})`,
            budget: item.money
        }
    });

console.log(practice);
/*\
[0: {info: "Sam (11)", budget: 900}
1: {info: "Juli (15)", budget: 1100}
2: {info: "Wild (24)", budget: 500}]
*/

const sumBudget = practice.reduce((total, person) => {
    return total + person.budget;
}, 0);

console.log(sumBudget); // 2500









