// Объекты

// создание и настройка объекта
// Object.create ---> первый агрумент это ссылка на прототип второй сам оюбъект
const person = Object.create({
    calculateAge() {
        console.log('Age: ', new Date().getFullYear() - this.birthYear)
    }
}, {
    // поля задаються объектами с найстройкай каждого поля (дескрипторами)
    name: {
        // дескрипторы
        value: 'Wolf', // значение ключа
        enumerable: true, // позволяет использовать ключ для перебора в for, по умолчанию false
        writable: true, // позволяет менять поля, по умолчанию false
        configurable: true, // позволяет удалять поле, по умолчанию false
    },
    birthYear: {
        value: 1999,
        enumerable: false,
        writable: false,
        configurable: false,
    },
    age: {
        // возращает значение когда обращаешься к ключу
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(val) {
            document.body.style.backgroundColor === 'green' ? document.body.style.backgroundColor = 'white' : document.body.style.backgroundColor = 'green';
            console.log(val);
        }
    },
    valueGetSet: {
        value: 100500,
        writable: true
    },
    getSet: {
        get() {
            return this.valueGetSet;
        },
        set(val) {
            this.valueGetSet = val;
            return val;
        }
    }
})

console.log(person)
