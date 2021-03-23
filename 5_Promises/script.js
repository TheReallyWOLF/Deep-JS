// Promise





















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
