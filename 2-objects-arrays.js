// let name = 'Masha';
// let age = 18;
// let gender = 'female';

// let boyName = 'Kolya';
// let boyAge = 10;
// let boyGender = 'male';

// user = {name: 'Masha', age: 18, gender: 'female'}
// boyUser = {name: 'Kolya', age: 10, gender: 'male'}

// alert('Привет, кожаные!');
// alert(user.age + ' ' + user.gender)

// user.age = 24;

// boyUser.name = 'Vitya';
// boyUser['name'] = 'Andrey';

// userProperty = 'age';
// alert(user[userProperty]);

// Задание 2

let zp = {Den: 1000, Matt: 5000, Steve: 2000};

console.log(`Заработная плата Dan составляет 1000 рублей`);
console.log(`Заработная плата Matt составляет 5000 рублей`);
console.log(`Заработная плата Steve составляет 2000 рублей`);

stringArray = ['game', 'application', 'music'];
stringArray[0] = 'sergey';
alert(stringArray[stringArray.lenght - 1]);


// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

let brends = ['Abibas', 'Nuke', 'Pamu', 'BlackBaton', 'Zhiguli'];
for (let i = 0; i < brends.length; i += 2) {
    console.log(brends[i]);
}


// Задание 4
// Есть массив произвольных чисел: let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:

// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Индексу ${i} соответсвует число ${numbers[i]}`);
}


// Задание 5
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
// 2) Посчитать и вывести в консоль сумму элементов в массиве. Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
// 3) Посчитать и вывести в консоль сумму четных элементов в массиве.
// 4) Найти и вывести в консоль максимальное число массива. Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.
// 5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let item of numbers) {
    console.log(item);
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log(sum);
let sum2 = 0
for(let i = 0; i < numbers.length; i++) {
    if (i % 2) {
        sum2 = sum2 + numbers[i];
    }
}

console.log(sum2);
let max = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
}

console.log(max);

for (let i = 0; i < numbers.length; i++) {
    console.log(`Числу ${numbers[i]} пренадлежит индекс ${i}`);
}


// Задание 6
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if ( arr[i] > 0) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);


// Задание 7
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

let nums = [5, 4, 3, 8, 0];
let limit = 5;
let mt5 = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= limit) {
        mt5.push(nums[i]);
    }
}

console.log(mt5);


// Задание 8
// Описать массив из объектов с двумя полями: строковым и числовым.
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 9}]
// Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 9}];
for (let user of users) {
    if (user.age > 10) {
        console.log(user.name);
    }
}

for ( let i = 0; i < users.length; i++) {
    if (users[i].age > 10) {
        console.log(users[i].name)
    }
}