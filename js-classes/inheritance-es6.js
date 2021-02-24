class Car {
    constructor(name, model, year, color, speed, fuelCapacity, fuelConsumption) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.year = year;
        this.color = color;
        this.speed = speed;
        this.fuelCapacity = !fuelCapacity ? 60 : fuelCapacity;
        this.fuelConsumption = !fuelConsumption ? 10 : fuelConsumption;
    }

    getFullName() {
        return `${this.name} ${this.model}`;
    }

    getAge() {
        return `${2021 - this.year} `;
    }
    changeColor(newColor) {
        console.log(this.color === newColor ? `Авто уже покрашено в ${newColor} цвет` : `Ваше авто теперь окрашено в ${this.color = newColor} цвет`)
    }

    calculateWay(kilometers, fuel) {
        if (fuel < 10) console.log(`Осторожно уровень топлива критический и равен, ${this.fuelCapacity = fuel}`);
        let travelTime = kilometers / this.speed;
        console.log(`Запланированное время пути ${travelTime} часов`);
        if (fuel / this.fuelConsumption < travelTime) console.log(`Для успешной поездки Вам нужно будет заправиться на ${travelTime * this.fuelConsumption - fuel} литров`)
    }
}


class BMW extends Car {
    constructor(name, model, year, color, speed, fuelCapacity, fuelConsumption, song) {
        super(name, model, year, color, speed, fuelCapacity, fuelConsumption)
        this.song = !song ? 'Черный бумер' : song;
    }
    getWeapon(weapon) {
        return `Вы выбрали в качестве оружия ${weapon}`
    }
}

let bmw1 = new BMW('bmwE', 'e-tron', 2020, 'синий', 299, 0, 0, 'electro-boomer')
console.log(bmw1)
console.log(bmw1.getFullName())
console.log(bmw1.getWeapon('sks-carabine'))

