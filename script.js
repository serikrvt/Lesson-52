// 1. Фильтрация по возрасту  
// Дан массив объектов:  
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
const filtorUsers=users.filter(user=>user.age>25)
console.log(filtorUsers);

// Получите массив пользователей старше 25 лет.  

//  2. Поиск по имени  
// Найдите объект пользователя с именем `"Charlie"`.  
const users1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
const findUsers=users1.filter(users=>users.name==="Charlie")


//  3. Добавление свойства в объекты  
// Добавьте каждому пользователю свойство `status: "active"`.  
const users2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
const pushUsers2=users2.push('status: "active"')



//  4. Сортировка по возрасту (по возрастанию)  
// Отсортируйте массив по возрасту пользователей.  

const users3 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
users3.sort((a,b)=>a-b)

//  5. Изменение структуры объектов  
// Преобразуйте массив так, чтобы объекты имели структуру `{ fullName: имя, ageInYears: возраст }`.  
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];

//  6. Подсчет количества пользователей с возрастом больше 25  
// Найдите, сколько пользователей старше 25 лет.  
const users4 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
users4.reduce((curr,users)=>curr+users.age>25,0)

//  7. Удаление определенных элементов  
// Удалите из массива пользователей с возрастом меньше 30 лет.  
const users5 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
users5.slice
//  8. Поиск индекса пользователя по имени  
// Найдите индекс объекта с именем `"Bob"`.  
const users6 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
users6.indexOf(users=>users.age==="Bob")

//  9. Преобразование массива объектов в массив имен  
// Создайте массив, содержащий только имена пользователей.  
const users7 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
users7.slice(users=>users.name)
//  10. Преобразование в объект с именем как ключом  
// Создайте объект вида `{ "Alice": 25, "Bob": 30, "Charlie": 22, "David": 35 }`.  

const users8 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];
users8.flat(Infinity)

//! ### 🔹 Циклы + массивы  

//  11. Сумма четных чисел массива  
const numbers = [12, 5, 8, 130, 44, 27];
// Найдите сумму всех четных чисел. 
let sum = 0;
for (let i=0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        sum += numbers[i];
    }
}
const summ = arr.reduce((acc, item) =>  acc += item % 2 ? 0 : item, 0);


//  12. Поиск наибольшего числа в массиве  
// Найдите максимальное число в массиве `numbers`.  
const numbers1 = [12, 5, 8, 130, 44, 27];
let max = -Infinity;
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > max) {
        max = numbers1[i];
    }
}
const maxx = arr.sort((a, b) => b - a)[0]



//  13. Поиск второго по величине числа  
// Найдите второе по величине число в массиве.  
// const numbers = [12, 5, 8, 130, 44, 27];


//  14. Перевернуть массив без `reverse()`  
// Напишите код, который переворачивает массив без использования `reverse()`.  
const numbers3 = [12, 5, 8, 130, 44, 27];

for (let i = 0; i > numbers3.length; i--) {
    console.log();
    
}

// 15. Удаление дубликатов из массива
const data = [3, 5, 2, 3, 8, 2, 7, 8, 10];
// Удалите дубликаты, используя цикл.  

const dataDabl= new Set(...data)

//  16. Объединение двух массивов без`concat()`
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Объедините массивы в один.

// const newArray = [...arr1, ...arr2];
// const mergedArrayWithoutRepeat = [...new Set([...newArray])



//  17. Нахождение элементов, которых нет во втором массиве
// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7];
// Найдите элементы из`a`, которых нет в`b`.  

//  18. Преобразование двумерного массива в одномерный
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
matrix.flat(Infinity)
// Преобразуйте его в `[1, 2, 3, 4, 5, 6, 7, 8, 9]` без`flat()`.  

//  19. Генерация массива из чисел от 1 до 100  
// Создайте массив `[1, 2, 3, ..., 100]` с помощью цикла. 
let number=[]
let arrMax=10
for(let i=0;i<arrMax; i++){
    number.push(i)
}

//  20. Перемешивание массива(рандомный порядок)  
// Реализуйте алгоритм для перемешивания элементов массива.  
// const numbers = [12, 5, 8, 130, 44, 27];



//! ### 🔹 Методы строк

// 21. Подсчет количества гласных в строке
// const text = "JavaScript is awesome!";
// Подсчитайте количество гласных(`a, e, i, o, u`).  

//  22. Замена пробелов на`-`  
// Замените все пробелы в строке на`-`.  
// const text = "JavaScript is awesome!";

//  23. Разворот строки  
// Переверните строку`"Hello, world!"`.  



//  24. Извлечение цифр из строки
// const str = "User ID: 49876, Age: 27";


// Извлеките все числа в виде массива`[49876, 27]`.