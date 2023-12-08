var starbacksCoffee = {
    name: 'Starbucks Coffee Company.',
    locations: ['USA', 'Asia', 'Europe'],
    foundingYears: 1971,
    headquarters: [
        {
            city: 'Seattle',
            state: 'Washington',
            country: 'USA'
        },
        {
            city : 'Shanghai',
            country: 'China'
        },
        {
            city : 'France',
            country : 'Paris'
        },
    ],

    menu : {
        coffee : [
            {
                name : 'Латте',
                description : 'Напиток на основе эспрессо и молока с небольшим количеством молочной пены',
                price : 4.99
            },
            {
                name : 'Фраппуччино',
                description: 'Фирменный кофейный напиток Starbucks с добавлением молока и молотого льда. Украшен взбитыми сливками',
                price : 3.99
            },
            {
                name : 'Горячий шоколад',
                description : 'Фирменный шоколадный напиток. По вкусу и текстуре напоминает какао',
                price : 2.99
            }
        ],
        snacks : [
            {
                name : 'Двойной Шоколад',
                type : 'Маффин' ,
                price : '2.50'
            },
            {
                name : 'Малиновый чизкейк',
                type : 'Пончик' ,
                price : '3.99'
            },
            {
                name : 'Классический круассан',
                type : 'Французский круассан' ,
                price : '5.50'
            }
        ]
    }
}

console.log(starbacksCoffee)

var array = [[[[[[[[[[[2]]]]]]]]]]]
console.log(array[0][0][0][0][0][0][0][0][0][0][0])


for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

var twelveMonth = prompt("Введите месяц:" )

switch (twelveMonth) {
    case "Декабрь":
    case "Январь":
    case "Февраль":
        alert("Зима")
        break
    case "Март":
    case "Апрель":
    case "Май":
        alert("Весна")
        break
    case "Июнь":
    case "Июль":
    case "Август":
        alert("Лето")
        break
    case "Сентябрь":
    case "Октябрь":
    case "Ноябрь":
        alert("Осень")
        break
    default:
        alert("ERROR")
        break
}



