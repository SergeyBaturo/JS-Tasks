// Задание 1
// Дан объект:

// let user = { name: 'Tom', age: 20, isMarried: false }

// Cформировать массив строк вида "имя_поля - значение_поля": ['name - Tom', 'age - 20', 'isMarried - false']
// Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in

let user = { name: 'Tom', age: 20, isMarried: false };
let fun = function(object) {
    let array = [];
    for (let i in user) {
        array.push(`${i} - ${user[i]}`);
    }
    return array;
}

console.log(fun(user));


// Задание 2.1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться cообщение об ошибке.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

let sum = function(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        console.log(a + b);
        return a + b;
    } else {
        console.log('Ошибка, перепроверьте являются ли оба значения числами, пожалуйста');
    };
}

sum(1, 2);
sum('b', 2);
sum(1, [2]);
sum(1);
sum();


// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let ugoday = (a) => {
    if (a > 0 && a  < 11) {
       let random = getRandomInteger(1, 10);
       if (a == random) {
           console.log('Вы выиграли')
       } else {
           console.log(`Вы не угадали, ваше число - ${a}, а выпало число ${random}`);
       }
    } else {
        alert('Проверьте ввели ли вы число от 1 до 10 включительно');
    }
}

ugoday(1);
ugoday(2);
ugoday(10);
ugoday(5);


// Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

let arr = [2, 5, 10 ,4 ,3 ,7 ,9];
let copyArr = arr.map( item => item );
console.log(arr);
console.log(copyArr);

let copy = function(array) {
    return array;
}
copy(arr);
let copyArray = arr.map(copy);
console.log(copyArray);


// Задание 5
// На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).

let list = document.querySelectorAll('li');
let array = [];
for (let key of list ){
    console.log(key)
    let a = key.innerText % 2;
    if (a == 0) {
        console.log('Число четное');
        array.push(key.innerText);
    } else {
        console.log('Число не является четным');
    }
}

array.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item;
    document.querySelector('ul').appendChild(li);
})

console.log(array);


// Задание 6
// 1) Создать разметку формы с инпутом для текста и селектом для категории ( добавить несколько option с текстом Категория 1, Категория 2, Категория 3 ). Опшны создайте и добавьте в select через цикл.
// 2) Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li с произвольным текстом (напр. Hello). Для этого можно использовать функцию setInterval:
// Почитайте об этой функции здесь: https://learn.javascript.ru/se...
// Свою функцию (которая формирует li - например, она называется createLi) вы будете запускать внутри setInterval:
// setInterval(createLi, 1000);

function kategoryAdd () {
    for ( let i = 0; i < 3; i++) {
        let option = document.createElement('option');
        option.innerText = `Категория ${i + 1}`;
        document.querySelector('select').appendChild(option);
    }
}

let ol = document.createElement('ol');
document.body.append(ol);

function createLi () {
    let li = document.createElement('li');
    li.innerText = `Hello World`;
    ol.appendChild(li);
}

setInterval(createLi, 1000);