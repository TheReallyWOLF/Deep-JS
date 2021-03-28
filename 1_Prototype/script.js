// обычный объект
const person = {
    name: 'Wolf',
    age: 33,
    greet: () => {
        console.log('greet')
    }
};
// создание объекта без синтаксичесчкого сахара
const personObj = new Object(person);
// создать пустой объект и задать ему прототип person у которого бует прототип Object
const wolf = Object.create(person);
// создание обычной строки без синтаксического сахара что бы было видно прототайп
const str = new String('I am string');
// создание обычной строки без синтаксического сахара (прототип не видно)
const str2 = String('I am string');
// создание нового метода который унаследуют все сущности которые будет созданы от него
Object.prototype.sayHello = () => {
    console.log('Hello!')
};
// Добавление своего метода масива в прототип
const array = [1,2,3,4,5,6,7];

Array.prototype.multByArr = function (n = 1) {
    // this будет указывать на исходный массив по дефолту к которому применяется метод
    return this.map(i => {
        return i * n;
    })
}
// теперь у всех массивов будет дефолтный метод multByArr
