// прокси - класс в js который позволяет создавать ловушки для объектов класов и тд
// практическое применение

// ------------------------- Wrapper -----------------------------
const witnDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue) // при обращении к ключу которого нет выдается defaultValue
    });
}

const position = witnDefaultValue({
    x: 33,
    y: 42,
}, 0);

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        // has позволяет обращатся к значсениям объекта через ключ
        has: (target, propName) => {
            (propName in target) && (!propName.startsWith(prefix)); // если propName есть в объекте и не начинается с prefix
        },
        ownKeys: (target) => {
            Reflect.ownKeys(target) // получает массив строк из ключей объекта
                .filter(item => !item.startsWith(prefix))
        },
        get: (target, propName, receiver) => {
            return (propName in receiver) ? target[propName] : undefined;
        }
    })
}

// при обращении к ключу который обозначен через нижнее подчеркивание выдается undefined
// в цикле _password тоже не будте учавствовать
// _password м все ключи с _ будут приватными
const data = withHiddenProps({
    name: 'wolf',
    age: 25,
    _password: 'wwwqqqeee'
})

// ------------------------- Optimisation -----------------------------
// оптимизация поиска по массиву для огромных кластеров через прокси и индексацию в локальнеом сторе (засоряет память но ускоряет работу)

// обычный массив
const userData = [
    {id: 1, name: 'Wolf', job: 'Master', age: 21},
    {id: 2, name: 'Wert', job: 'Web', age: 11},
    {id: 3, name: 'Wdft', job: 'WER', age: 15},
    {id: 4, name: 'Wuytr', job: 'Low', age: 54}
]

const IndexedArray = new Proxy(Array, {
    // ловушка над new Array
    construct(target, [argArray], newTarget) {
        const index = {}; // хранилице с индексами (карта)
        argArray.forEach(item => index[item.id] = item); // при создании массива создает индексы

        return new Proxy(new target(...argArray), {
            get(target, propertyKey, receiver) {
                // необходимо реализовать все методы массива которые удаляют или доюбавляют в него параметры
                // и добавить все в index
                switch (propertyKey) {
                    case 'push': return item => {
                        index[item.id] = item;
                        target[propertyKey].call(target, propertyKey);
                    }
                    case 'findById': return id => index[id];
                    default: return target[propertyKey];
                }
            }
        });
    }
})

const users = new IndexedArray(userData);


