/* this указывает на объект который вызывает функцию по дефолту */

// this указывает на window если ее запустить contextThis() или window.contextThis()
function contextThis() {
    console.log('Hello', this)
}
// this указывает на person если запустить person.sayHello()
const person = {
    name: 'Wolf',
    age: 33,
    contextThis: 'person',
    sayHello: contextThis,
    sayHelloWindow: contextThis.bind(window), // изменил контекст выполнения на window
    logInfo: function (job = 'none', pfone = 'none') {
        console.groupCollapsed(`${this.name} info:`);
        console.log(`Name is ${this.name} age ${this.age}`);
        this.contextThis === 'person' ? console.warn('Default') : console.error('Контекст выполнения изменен');
        console.log(`Job is ${job}`);
        console.log(`${pfone}`);
        console.groupEnd();
    }
};
// обычный объект который будет использован для изменения контекста при вызове функции из другого объекта
const woman = {
    name: 'Elena',
    age: 23
}
// вызов функции logInfo с дефолтным контекстом
person.logInfo('master', 895222233344); // Name is Wolf age 33 Job is master 895222233344
// вызов функции logInfo с другим (woman) контекстом выполнения
person.logInfo.call(woman, 'передача параметров в call', 123); // Name is Elena age 23 Job is передача параметров в call 123
person.logInfo.apply(woman, ['передача параметров в apply', 123]); // Name is Elena age 23 Job is передача параметров в bind 123
person.logInfo.bind(woman)('передача параметров в bind', 123); // Name is Elena age 23 Job is передача параметров в apply 123
