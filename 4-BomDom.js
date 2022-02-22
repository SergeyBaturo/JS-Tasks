// Задание 2
// В файле html есть разметка:

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// Вывести в консоль каждое из имен (содержимое каждого li).

for (let li of document.querySelectorAll('li')) {
    console.log(li.innerText)
}


// Задание 3
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

document.body.children[0].children[0].innerText = '0';
document.body.children[0].children[1].innerText = '1';
document.body.children[0].children[2].innerText = '2';
document.body.children[0].children[3].innerText = '3';


// Задание 4
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function createTag(tagName, color, content) {
    let div = document.createElement(tagName);
    document.body.appendChild(div);
    div.style.color = color;
    div.innerText = content;
    console.log(div);
}

createTag('h2', 'red', 'dog');
createTag('div', 'blue', 'beautiful car');
createTag('h1', 'lightgray', 'nice ass, bro');


// Задание 5
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

let p = document.createElement('p');
document.body.appendChild(p);
p.style.fontSize = '36px';
p.style.fontWeight = '900';
p.innerText = 'I very like potato and your ass';


// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

let select = document.createElement('select');
document.body.appendChild(select);
function addOption () {
    for (let i = 1960; i < 2023; i++) {
        let option = document.createElement('option');
        option.innerText = i;
        select.appendChild(option); 
    };
}; 

addOption();



// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// [{name: "Женя", order: true}, {name: "Кристина", order: true}, {name: "Павел", order: false}, {name: "Виолетта" order: false}, {name: "Костя", order: true}];

// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

let ul = document.createElement('ul');
document.body.appendChild(ul);
let nameAndOrders = [{name: 'Женя', order: true}, {name: 'Кристина', order: true}, {name: 'Павел', order: false}, {name: 'Виолетта', order: false}, {name: 'Костя', order: true}];

for (let i = 0; i < nameAndOrders.length; i++) {
    let li = document.createElement('li');
    if (nameAndOrders[i].order == true) {
        li.innerText = `Клиент ${nameAndOrders[i].name} оплатил/оплатила заказ`;
    } else {
        li.innerText = `Клиент ${nameAndOrders[i].name} отменил/отменила заказ`;
    }
    ul.appendChild(li);
}


// Задание 8
// Есть массив ссылок:
// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute: element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
let div = document.createElement('div');
document.body.appendChild(div);
div.style.backgroundColor = 'lightblue';
div.style.width = '770px'
div.style.height = '20px';
div.style.paddingTop = '30px';
div.style.paddingBottom = '30px';
div.style.paddingLeft = '20px';
div.style.paddingRight = '20px';

for (let link of linksArr) {
    let a = document.createElement('a');
    a.style.marginRight = '20px';
    a.setAttribute("href", link);
    a.innerText = link;
    a.setAttribute("target", "_blank");
    div.appendChild(a);
}


// Задание 9
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

let elements = document.getElementsByClassName('forRemove');
console.log(elements);
for (let element of elements) {
    element.remove();
}


// Задание 10*
// Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками, заполненную этими объектами. Name должно быть красного цвета, age - синего.

let people = [{name: 'Женя', age: 15}, {name: 'Кристина', age: 24}, {name: 'Павел', age: 37}, {name: 'Виолетта', age: 10}, {name: 'Костя', age: 60}];

let table = document.createElement('table');
table.setAttribute('border', 1);
table.setAttribute('cellspacing', 0);
table.setAttribute('width', 150)
document.body.appendChild(table);

for (let i = 0; i < people.length; i++) {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.style.color = 'red';
    tdName.innerText = people[i].name;
    tr.append(tdName);
    let tdAge = document.createElement('td');
    tdAge.style.color = 'blue';
    tdAge.innerText = people[i].age;
    tr.append(tdAge);
    table.append(tr);
}