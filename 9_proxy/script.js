// прокси - класс в js который позволяет создавать ловушки для объектов класов и тд

// объект
const person = {
    name: 'Wolf',
    age: 43,
    job: 'Master'
}

// оборачиваем target в прокси и передаем ловушки хендлеры которые будут добавлены в target
const objectProxy = new Proxy(person, {
    // стандартное поведение get
    /*get(target, prop) {
        return target[prop];
    }*/
    get(target, prop) {
        console.log('Target', target); // новая логика которая теперь будет выполнятся (ловушка)
        console.log('Prop', prop); // новая логика которая теперь будет выполнятся (ловушка)

        // практический пример с кастомной логикой // objectProxy.age_name_job => "43 Wolf Master"
        if (!(prop in target)) { // если перечислить ключи через нижэнее подчеркивание то будут выданы результаты
            return prop
                .split('_')
                .map(item => target[item])
                .join(' ');
        }

        return target[prop];
    },
    // стандартное поведение set
    /*set(target, prop, value) {
        target[prop] = value;
    },*/
    // измененый set при помощи прокси и ловушек
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`No ${prop} field in target`);
        }
    },
    // дефолтная валидация
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop); // 'name' in objectProxy => true
    },
    defineProperty(target, prop, attributes) {
        console.log('Target', target); // новая логика которая теперь будет выполнятся (ловушка)
        delete  target[prop];
        return true;
    }
});

// Function и прокси

const log = text => `Log: ${text}`;
const functionProxy = new Proxy(log, {
    // target - сама функция thisArg - контекст argArray - все параметры которые мы передаем в ф-ю
    apply(target, thisArg, argArray) {
        console.log('Calling function...'); // новая логика при запуске ф-ии
        // return target.apply(thisArg, argArray); // дефолтное поведение
        return target.apply(thisArg, argArray).toUpperCase() ; // новое поведение
    }
});

// Classes

// простейший класс
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonClassProxy = new Proxy(Person, {
    // ловушка для конструктора
    construct(target, argArray, newTarget) {
        console.log('Construct...'); // сделать что то при создании конструктора

        //return new target(...argArray); // дефолтное поведение

        return new Proxy(new target(...argArray), { // измененное поведение экземпляров класса
            get(targetGet, prop, receiver) {
                console.log(`Getting prop ${prop}`); // любая логика которая будет отрабатывать в get
                return targetGet[prop];
            }
        });
    }
});

// создание класса обернутого в прокси
const personProxy = new PersonClassProxy('Wolf', 30);























