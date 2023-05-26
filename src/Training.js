// Объекты меняй и сравнивай
// Массивы 4 метода (Плюс мап и фильтр)

// 01 Сравнение 2 объектов:
// let object1 = {};
// let object2 = {};
// console.log(object1 === object2)

// 02 Обращение к значениям объекта по ключу

// let human = {
//     "name": "Anton",
//     age: 28,
// };
//
// console.log(human.name)
// console.log(human["age"])

// 03 Добавление свойств и Переприсваивание

// let human = {
//     name: "Anton",
//     age: 28,
// };
//
// human.isMarried = false;
// console.log(human)
//
// console.log("---------------------Поясните почему произошло так?---------------------")
// human.isMarried = true;
// console.log(human)

// 04 Проверка на тот же самый объект
// let object1 = {
//     name: "Anton",
//     age: 28,
//     address: {
//         city: "Minsk",
//         street: "Kirova",
//         house: 17
//     },
// };
//
// let object2 = object1;
//
// console.log(object2)
// console.log("------------------------------------------")
// console.log(object1=== object2)


// 05 Проверка на изменение свойств объекта         // ОДНОГО И ТОГО ЖЕ!!!!

// let object1 = {
//     name: "Denis",
//     age: 35,
//     address: {
//         city: "Moscow",
//         street: "Pushkina",
//         house: {
//             number: 56,
//             floor: "2-nd",
//             flat: 11
//         }
//     },
// };
//
// let object2 = object1;
// console.log(object2)
//
//
// object2.name = "Antony"
// object2.age = 27;
// object2.address.city = "London";
// object2.address.house.flat = 13;
//
// console.log("-----------------------------------------------------------------------")
// console.log(object1.address.city === "London")
// console.log(object1.address.house.flat === 13)
//
// console.log("-----------------------------------------------------------------------")
// console.log(object1)
// console.log(object2)
//
//
// console.log("-----------------------------------------------------------------------")
// console.log(object1.address === object2.address)
//
// console.log("-----------------------------------------------------------------------")


// 06 spread - Копирование объекта - 1 и 2 разные и по идее не зависимы друг от друга

// let object1 = {
//     name: "Denis",
//     age: 35,
//     address: {
//         city: "Moscow",
//         street: "Pushkina",
//         house: {
//             number: 56,
//             floor: "2-nd",
//             flat: 11
//         }
//     },
// };


// let object2 = {...object1}

//
// console.log(object2)
//
// console.log("-----------------------------------------------------------------------")
// console.log(object2 === object1)
// console.log("-----------------------------------------------------------------------")

// console.log("-----------------------------------------------------------------------")
// console.log(object1.age === object2.age)
// console.log(object1.address.city === object2.address.city)
// console.log(object1.address.house.flat)
// console.log(object2.address.house.flat)
// console.log(object1.address.house.flat === object2.address.house.flat)


// console.log("-----------------------------------------------------------------------")
//
// object2.name = "Anton";
// console.log(object1.name)
// console.log(object2.name)



// console.log("-----------------------Почему проблема? Перезапись города в первом?------------")
// object2.address.city = "Minsk"
// console.log(object1.address.city)
// console.log(object2.address.city)

// console.log("-----------------------------------------------------------------------")



// console.log("-----------Почему произошла перезапись номера квартиры в первом?------------")
// object1.address.house.flat = 17
// console.log(object1.address.house.flat)
// console.log(object2.address.house.flat)
//


//---------------------------------------------------------------------------------------------------

// Задание 1:
// Поменяйте в object3 иммутабельно city: с "Moscow" на "Minsk":

// let object3 = {...object1, address: {...object1.address, city: "Minsk"}}
// console.log(object1)
// console.log(object3)

// Задание 2:
// Поменяйте в object4 иммутабельно:
// 1) name: с "Denis" на "Anton";
// 2) street: с 'Pushkina' на 'Kirova'

// let object4 = {...object1, name: "Anton", address: {...object1.address, street: "Kirova"}}
// console.log(object1)
// console.log(object4)


// Задание 3:
// Поменяйте в object5 иммутабельно:
// 1) age: с 35 на 23;
// 2) city: с 'Moscow' на 'Brest'
// 3) flat:  с 11 на 15

// let object5 = {...object1, age: 23, address: {...object1.address, city: "Brest", house: {...object1.address.house, flat: 15}}}
// console.log(object1)
// console.log(object5)



// Массивы:

// Доступ к элементам массива:

// let array1 = [1, "Hi", true, 45, null, "Alex"]
// console.log() // Выведите в консоль 46
// console.log() Выведите в консоль строку "Hi, Alex"
// console.log("--------------------------------------------")

// let array2 = [2, -1, 23, 0, -9, 12, -7, 36, 49]
//
// let newArray = array2.map(el=>el)
// console.log(newArray === array2) // Какой результат и почему?
//
// Задача: Увеличить каждый элемент массива array2 на 7,результат присвоить в переменную array3
// let array3 = //
// console.log(array3)

// console.log("--------------------------------------------")
//Задача: Вывести в консоль числа из массива array2, которые меньше -3, результат присвоить в переменную array4
//
// let array4 = //
// console.log(array4)
// console.log("----------------------------------------------------------------------------")

// Задача вывести в консоль названия каждой модели телефона (title)
// const wishes = [
//     {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//     {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     {id: 3, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
//     {id: 4, title: 'Xiaomi 13', OS: "Android", checked: true},
//     {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
// ]
//
// console.log(wishes.map(el => el.title))

// console.log("----------------------------------------------------------------------------")

// Задача вывести в консоль объекты, где значение checked - true

// const wishes = [
//     {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//     {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     {id: 3, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
//     {id: 4, title: 'Xiaomi 13', OS: "Android", checked: true},
//     {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
// ]
//
// console.log(wishes.filter(el => el.checked))

// console.log("----------------------------------------------------------------------------")


// Задача вывести в консоль объекты, где значение OS - "iOS"

// const wishes = [
//     {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//     {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     {id: 3, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
//     {id: 4, title: 'Xiaomi 13', OS: "Android", checked: true},
//     {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
// ]
//
// console.log(wishes.filter(el => el.OS === "iOS"))

// console.log("----------------------------------------------------------------------------")

// Копирование:

// Три главных правила:
//     1) Видишь Объект - Делай копию!
//     2) Видишь Массив - Делай копию!
//     3) Видишь ключ - Создавай новый!
// © Игорь =)

// console.log("----------------------------------------------------------------------------")


// const wishes = [
//     {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//     {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     {id: 3, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
//     {id: 4, title: 'Xiaomi 13', OS: "Android", checked: true},
//     {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
// ]
//
// Увеличьте каждый Id на 1
// let changedWishes1 = wishes.map(el => ({...el, id: el.id + 1}))
// console.log(changedWishes1);
//
// Замените checked с true на false, с false на true:
// let changedWishes2 = wishes.map(el => ({...el, checked: !el.checked}));
// console.log(changedWishes2);

// console.log("----------------------------------------------------------------------------")


// Замените в phones id:2 title с 'Huawei' на "Samsung Galaxy S7"

/*const wishes = {
    phones: [
        {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
        {id: 2, title: 'Huawei', OS: "Android", checked: false},
    ],
    books: [
        {id: 1, title: 'Dark Tower', Author: "Stephen King", price: 15},
        {id: 2, title: 'Flowers for Algernon', Author: "Daniel Keyes", price: 12},
    ],
}

console.log({...wishes, phones: wishes.phones.map(el => el.id === 2 ? {...el, title: "Samsung Galaxy S7"}: el)})

console.log("----------------------------------------------------------------------------")*/

// Замените в books в id:1 title с 'Dark Tower' на "IT"

// const wishes = {
//     phones: [
//         {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//         {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     ],
//     books: [
//         {id: 1, title: 'Dark Tower', Author: "Stephen King", price: 15},
//         {id: 2, title: 'Flowers for Algernon', Author: "Daniel Keyes", price: 12},
//     ],
// }
// console.log({...wishes, books: wishes.books.map(el => el.id === 1 ? {...el, title:"IT"}: el)})


// console.log("----------------------------------------------------------------------------")


// Замените в phones значение checked с true на false, с false на true:
// Замените в books в id:2 price с 12 на 13


// const wishes = {
//     phones: [
//         {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//         {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     ],
//     books: [
//         {id: 1, title: 'Dark Tower', Author: "Stephen King", price: 15},
//         {id: 2, title: 'Flowers for Algernon', Author: "Daniel Keyes", price: 12},
//     ],
// }
//
// console.log({...wishes,
//     phones: wishes.phones.map(el => ({ ...el, checked: !el.checked })),
//     books: wishes.books.map(el=> el.id === 2 ? {...el, price: 13}: el)
// })



// console.log("----------------------------------------------------------------------------")

// Задача: Поменять 'JS' на "Typescript"

// const tasks = {
// 		["todolistID1"]: [
// 			{id: 1, title: 'HTML&CSS', isDone: true},
// 			{id: 2, title: 'JS', isDone: true},
// 			{id: 3, title: 'ReactJS', isDone: false},
// 			{id: 4, title: 'Rest API', isDone: false},
// 			{id: 5, title: 'Graph SQL', isDone: false},
// 		],
// 		["todolistID2"]: [
// 			{id: 6, title: 'Milk', isDone: true},
// 			{id: 7, title: 'Fruits', isDone: true},
// 			{id: 8, title: 'Nuts', isDone: true},
// 			{id: 9, title: 'Bread', isDone: false},
// 			{id: 10, title: 'Sugar', isDone: false},
// 		]
// 	}
// console.log({...tasks, ["todolistID1"]: tasks["todolistID1"].map(el=> el.id === 2 ? {...el, title: "Typescript"} : el) })

// Задача: Поменять в объекте с id: 8 и title: 'Nuts' значение isDone с 'true' на "false"

// const tasks = {
//     ["todolistID1"]: [
//         {id: 1, title: 'HTML&CSS', isDone: true},
//         {id: 2, title: 'JS', isDone: true},
//         {id: 3, title: 'ReactJS', isDone: false},
//         {id: 4, title: 'Rest API', isDone: false},
//         {id: 5, title: 'Graph SQL', isDone: false},
//     ],
//     ["todolistID2"]: [
//         {id: 6, title: 'Milk', isDone: true},
//         {id: 7, title: 'Fruits', isDone: true},
//         {id: 8, title: 'Nuts', isDone: true},
//         {id: 9, title: 'Bread', isDone: false},
//         {id: 10, title: 'Sugar', isDone: false},
//     ]
// }
// console.log({...tasks,["todolistID2"]: tasks["todolistID2"].map(el => el.id === 8 ? {...el, isDone: false}: el)  })

// Задача: Перерисовать все таски:
// 1) В todolistID1 оставить только со значением false
// 2) В todolistID2 оставить только со значением true

// const tasks = {
//     ["todolistID1"]: [
//         {id: 1, title: 'HTML&CSS', isDone: false},
//         {id: 2, title: 'JS', isDone: true},
//         {id: 3, title: 'React', isDone: false},
//         {id: 4, title: 'Rest API', isDone: true},
//         {id: 5, title: 'Graph SQL', isDone: false},
//     ],
//     ["todolistID2"]: [
//         {id: 6, title: 'Bread', isDone: false},
//         {id: 7, title: 'Milk', isDone: true},
//         {id: 8, title: 'Nuts', isDone: true},
//         {id: 9, title: 'Fruits', isDone: true},
//         {id: 10, title: 'Sugar', isDone: false},
//     ]
// }
// console.log({...tasks,["todolistID1"]: tasks["todolistID1"].filter(el=> !el.isDone), ["todolistID2"]: tasks["todolistID2"].filter(el=> el.isDone)})
