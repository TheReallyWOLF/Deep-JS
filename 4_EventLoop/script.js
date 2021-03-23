console.log('Start');  // 1
console.log('Start 2'); // 2
window.setTimeout(function (){ // setTimeout уйдет в Web Api и запустит таймер
    console.log('after 2000 ms') // 4 выполнится по истечению работы Web Api в анонимной функции которая попадет сначала в кол бек потом в колл стак
}, 2000);
console.log('End'); // 3
