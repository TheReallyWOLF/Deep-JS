// Асинхронное выполнение кода

// имитация запроса к серверу
const delay = ms => {
    console.log('waiting for a response from the server....')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

/*
// проверка работоспособности
delay(2000).then(() => {
    console.log('2 sec');
});
*/

const url = 'https://jsonplaceholder.typicode.com/todos'; // апишка для тестов

function fetchTodos() {
    return delay(2000)
        .then(() => fetch(url)) // fetch аналолг аякса который возращает промис
        .then(response => response.json()) // json() метод (некий API) fetch для работы с json форматом)
}

fetchTodos()
    .then(data => console.log('Data', data))
    .catch(error => console.log(error));


// аналог кода выше с испльзованием синтаксического сахара Async, Await

async function fetchAsyncTodos() {
    try { // для отлова ошибок в Async, Await исмпользуется скопы try catch
        await delay(4000); // тк функция delay возращает промисс то можно при помощи await дождатся ее выполнения который позволит не переходит к следующей строчке кода внутри функции пока не зарезолвится промис
        const response = await fetch(url); // дожидаемся ответа и сохраняем в переменну ответ
        const data = await  response.json();
        console.log('Data', data);
        return true;
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Выполнится в любом случае была ли ошибка или нет!');
    }

}
// fetchAsyncTodos работает так же как и код выше который написан на промисах
// async функции всегда возращают промисс и можно использовать все его методы
const result = fetchAsyncTodos().then(res => console.log(res));
