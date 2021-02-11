for (let i = 1; i <= 3; i++) {
    let username = prompt("Введите имя");
    let age = +prompt("Введите возраст");
    let objUser = {
        name: username,
        age: age,
    }
    console.log(`Пользователь ${i}`);
    console.log(`Ваше имя ${objUser.name}`);
    console.log(`Ваш возраст ${objUser.age}`);
} 

