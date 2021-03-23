// Promise

// асинхронность без промисов

        /*-----

console.log('...Request data');

setTimeout(() => {
    console.log('Preparing data...');

    const data = {
        server: 'aws',
        port: 8080,
        status: 'loading'
    }

    setTimeout(() => {
        data.status = 200;
        console.log('Request data...' , data)
    }, 2000)
}, 2000);

// асинхронность с промисами
const _promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // эмуляция ответа вервера
        console.log('Preparing data...');
        const data = {
            server: 'aws',
            port: 8080,
            status: 'loading'
        }
        resolve(data); // говорим промису что он завершился
     }, 5000);
});

_promise.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.status = 200;
            console.log('Resolve data...');
            resolve(data);
        }, 2000)
    })
}).then(data => {
    console.log('Request data...' , data);
});
// можно не возращать промис
const _promise_ = new Promise((resolve, reject) => {
    setTimeout(() => {
        // эмуляция ответа вервера
        console.log('Preparing data... 1');
        const data = {
            server: 'aws',
            port: 8080,
            status: 'loading'
        }
        resolve(data); // говорим промису что он завершился
    }, 5000);
});

_promise_.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.status = 200;
            console.log('Resolve data... 2', data);
            //reject('error') // имитация ошибки
            resolve(data);
        }, 2000);
    })
}).then(data => {
    setTimeout(() => {
        console.log('Request data... 3' , data);
    }, 1000)
}).catch(err => {
    console.error('Error', err)
}).finally(() => { // выполняется в любом случае даже если есть ошибка
    console.log('finally')
});

        -----*/

// имитация задержки
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Выполнился промис на ', ms)
            resolve(ms)
        }, ms)
    })
}
// отработает когда выполнится все промисы
Promise.all([sleep(2000), sleep(3000), sleep(4000), sleep(1000),])
    .then((arr) => {
        console.log('Выполнились все промисы!', arr)
    })
// отработает когда выполнится первый промис
Promise.race([sleep(200), sleep(300), sleep(400), sleep(100),])
    .then((firstAnswer) => {
        console.log('Выполнилися первый race промис!', firstAnswer);
    })



















// Примеры

Promise.reject('a') // a
    .catch(p => p + 'b') // ab
    .catch(p => p + 'с') // опускается
    .then(p => p + 'd') // abd
    .finally(p => p + 'e') // ничего не принимает
    .then(p => console.log(p)) //abd

console.log('f');

//f, abd

// Promise
function doSomething() {
    return Promise.resolve(1);
}

function doSomethingElse() {
    return Promise.resolve(2);
}

//1
doSomething().then(function () {
    return doSomethingElse();
}).then(res => console.log(res)); // 2
//2
doSomething().then(function () {
    doSomethingElse();
}).then(res => console.log(res)); // undefined
//3
doSomething().then(doSomethingElse()).then(res => console.log(res)); // проваливание, 1
//4
doSomething().then(doSomethingElse).then(res => console.log(res)); // 2

//...............................................................

Promise.resolve().then(() => console.log(1));
setTimeout(() => console.log(2));
Promise.reject()
    .then(() => console.log(3))
    .catch(() => console.log(4))
    .catch(() => console.log(5))
    .then(() => console.log(6));
console.log(7);

//7 1 4 6 2
