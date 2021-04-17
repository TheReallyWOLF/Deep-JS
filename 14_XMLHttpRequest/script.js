// XMLHttpRequest (XHR), Ajax
const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // создает объект для запроса xhr

        xhr.open(method, url); // открывает соединение
        xhr.responseType = 'json'; // позволяет не парсить ответ от сервера
        // Content-Type - определяет формат с которым будет работать сервер
        xhr.setRequestHeader('Content-Type', 'application/json'); // установить параметры хедера который будет отправлен с запросом в данном случае изменил text/plain для того что бы боди воспринимался не как текст а как json
// тригер который отрабатывает при завершении запроса
        xhr.onload = () => {
            // xhr.status хранит код статуса от сервера
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);// Ответ будет уже в json формате
                //console.log(JSON.parse(xhr.response)); // ответ лежит в xhr.response в качестве строки если не делать xhr.responseType = 'json'
            }
        }
// обработка ошибки запроса нет ворк ошибка
        xhr.onerror = () => {
            console.log(xhr.response);
        }
        xhr.send(JSON.stringify(body)); // отправляет запрос принимает боди если это пост запрос боди должно быть строчкой
    })
}
// пример гет запроса
/*sendRequest('GET', requestUrl)
    .then(data => console.log(data))
    .catch(error => console.log(error))*/

// привер пост запроса
const body = {
    name: 'Wolf',
    age: 23
}

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(error => console.log(error))
