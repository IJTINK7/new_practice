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
// console.log("-------------------------------------------------------------")