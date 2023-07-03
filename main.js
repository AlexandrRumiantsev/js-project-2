//Задача 1. Добавим изображение комнаты в основной блок, в тег style, как свойство background-img
//Шаг 1 Получить элмент, которому мы будем добавлять фоновое изображение и положили в переменную
let room = document.querySelector('.room');
//Шаг 2 Добавить свойсто background-img в элемент room
room.setAttribute("style", "background-image: url('./img/rooms/1.jpeg')");

// Задача 2 заполнить селектор на форме изображениями 
// и сделать так, чтобы при нажатии на изоюражение, 
// оно заменяло основное
//Шаг 1 Создадим массив со списком путей до изображений комнат
let arrayRoomsImg = [
    './img/rooms/1.jpeg',
    './img/rooms/2.jpeg',
    './img/rooms/3.jpeg',
    './img/rooms/4.jpeg',
    './img/rooms/5.jpeg',
    './img/rooms/6.jpeg',
    './img/rooms/7.jpeg',
    './img/rooms/8.jpeg',
    './img/rooms/9.jpeg',
];
//Шаг 2. Перебрать массив с изображениями комнат, 
// При помоши конструкции forEach
arrayRoomsImg.forEach(function(pathToImg){
    //Заполним в цикле, контейнер с типами комнат 
    //с ссылками с изобажениями
    // Создаем элемент ссылки
    let link = document.createElement('a');
    //Добавили класс ссылке
    link.classList.add('option-item');
    // Добавим data атрибут link
    link.setAttribute('data-link', pathToImg)
    // Добавить data атрибут type
    link.setAttribute('data-type', 'room');
    // Добавим изображение в блок
    link.setAttribute("style", `background-image: url('${pathToImg}')`);
    //Добавить событие слика
    // Альтернативный подход - https://doka.guide/js/element-click/
    link.onclick = function(){
        //Установить новое изображение
        room.setAttribute("style", `background-image: url('${pathToImg}')`);
    }
    // Получить элемент в который добавляем ссылки
    let containerRoomSelector = document.querySelector('.btn-container__change-room');
    // Добавляем созданную ссылку в полученый элемент
    containerRoomSelector.appendChild(link);
})