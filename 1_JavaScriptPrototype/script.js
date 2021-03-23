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
