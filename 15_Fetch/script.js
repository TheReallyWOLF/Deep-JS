// Fetch, Ajax
const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest (method, url, body = null) {
    // перечисление хедеров как ключ значение
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(url, {
        // настройка запроса метод, тело запроса (ксли это не GET) и хедер (мета данные)
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => { // fetch возращает промисс
       //return response.text(); // возвращает строку
        // обработка ошибки
        if (response.ok) { // или (response.status < 400)
            return response.json(); // возвращает json
        }
        // формирование ответа с ошибкой запроса
        return response.json().then(error => {
            const errorNew = new Error('Что то пошло лесом');
            errorNew.data = error;
            throw errorNew;
        })
    })
}
/*
// пример гет запроса
sendRequest('GET', requestUrl)
    .then(data => console.log(data))
    .catch(error => console.log(error))
*/

// привер пост запроса
const body = {
    name: 'Wolf',
    age: 23
}

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(error => console.log(error))
