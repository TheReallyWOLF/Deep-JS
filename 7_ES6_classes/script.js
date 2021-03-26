// Классы

// создание дефолтного класса
class Animal {
    // создание статической переменной (метода) будет доступоно только у класса и не будут доступны у экземпляра класса
    static type = 'ANIMAL';

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    voice() {
        console.log('Class animal send');
    }
}
// создание второго класса который наследован от Animal
class Cat extends Animal {
    static type = 'CAT';
    constructor(options) {
        // вызов родительского контруктора что бы можно было добавлять что либо в новый класс cat
        super(options);
        this.color = options.color;
    };

    voice() {
        // вызывает родительсктй метод (иногда нужно вызвать тк новый метод voice перетирает родительский)
        super.voice();
        console.log('I am cat');
    };
    // реализация геттеров в классах
    get ageInfo () {
        return this.age * 7;
    };
    // реализация сеттеров в классах
    set ageInfo (newAge) {
        this.age = newAge;
    }
}
// создание экземпляра класса
const animal = new Animal({
    name: 'Animal',
    age: 13,
    hasTail: true
});
// создание экземпляра класса
const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
});

//================ практические примеры ============//'

// глобальный класс
class Component {
    constructor(selector) {
        // сохраняем узел дом дерева в переменную ($ - в названии переменной обозначает что тут сохранен узел дом дерева)
        this.$divElementDom = document.querySelector(selector);
    };
//
    hide () {
        this.$divElementDom.style.display = 'none'
    };

    show () {
        this.$divElementDom.style.display = 'block'
    };
}
// дочерний класс
class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$divElementDom.style.width = this.$divElementDom.style.height = options.size + 'px';
        this.$divElementDom.style.background = options.background;
    }
}
// еще больше частностей от класса box
class Circle extends Box {
    constructor(options) {
        super(options);
        this.$divElementDom.style.borderRadius = '50%'
    }
}
// создаем экземпляр класса для box-red в html дереве
const redBox = new Box({
    selector: '#box-red',
    size: 100,
    background: 'red'
})
// создаем экземпляр класса для box-green в html дереве
const greenBox = new Box({
    selector: '#box-green',
    size: 120,
    background: 'green'
})
// создаем экземпляр класса для circle-green в html дереве от Circle
const greenCircle = new Circle({
    selector: '#circle-green',
    size: 60,
    background: 'green'
})





