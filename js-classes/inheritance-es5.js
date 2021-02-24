function Car(name, model, year, color, speed, fuelCapacity, fuelConsumption) {

    this.name = name;
    this.model = model;
    this.year = year;
    this.year = year;
    this.color = color;
    this.speed = speed;
    this.fuelCapacity = !fuelCapacity ? 60 : fuelCapacity;
    this.fuelConsumption = !fuelConsumption ? 10 : fuelConsumption;

    this.getFullName = function () {
        return `${this.name} ${this.model}`;
    }

    this.getAge = function () {
        return `${2021 - this.year} `;
    }
    this.changeColor = function (newColor) {
        console.log(this.color === newColor ? `Авто уже покрашено в ${newColor} цвет` : `Ваше авто теперь окрашено в ${this.color = newColor} цвет`)
    }

    this.calculateWay = function (kilometers, fuel) {
        if (fuel < 10) console.log(`Осторожно уровень топлива критический и равен, ${this.fuelCapacity = fuel}`);
        let travelTime = kilometers / this.speed;
        console.log(`Запланированное время пути ${travelTime} часов`);
        if (fuel / this.fuelConsumption < travelTime) console.log(`Для успешной поездки Вам нужно будет заправиться на ${travelTime * this.fuelConsumption - fuel} литров`)
    }
}

//bmw child

function Bmw(name, model, year, color, speed, fuelCapacity, fuelConsumption, song) {
    this._super.call(this, name, model, year, color, speed, fuelCapacity, fuelConsumption);
    this.song = !song ? 'Черный бумер' : song;
}


Bmw.prototype = Object.create(Car.prototype)

Bmw.prototype.constructor = Bmw;

Bmw.prototype._super = Car;

Bmw.prototype.getBMWInfo = function () {
    return this.name + " " + this.model + ", " + this.year;
};

let bmw1 = new Bmw('bmwZ', 'el-ro', 2008, 'blue', 300)
console.log(bmw1)
console.log(bmw1.getBMWInfo())

//subaru child
function Subaru(name, model, year, color, speed, fuelCapacity, fuelConsumption, pipeLength) {
    this._super.call(this, name, model, year, color, speed, fuelCapacity, fuelConsumption);
    this.pipeLength = !pipeLength ? '666' : pipeLength;
}

Subaru.prototype = Object.create(Car.prototype)

Subaru.prototype.constructor = Subaru;

Subaru.prototype._super = Car;

Subaru.prototype.getSubaruInfo = function () {
    return this.name + " " + this.model + ", " + this.year + ", " + this.pipeLength;
};

let suba = new Subaru('suba', 'impreza', 2007, 'blue', 290)
console.log(suba)
console.log(suba.getSubaruInfo())

//volvo child
function Volvo(name, model, year, color, speed, fuelCapacity, fuelConsumption, armor) {
    this._super.call(this, name, model, year, color, speed, fuelCapacity, fuelConsumption);
    this.armor = !armor ? '9999' : armor;
}

Volvo.prototype = Object.create(Car.prototype)

Volvo.prototype.constructor = Volvo;

Volvo.prototype._super = Car;

Volvo.prototype.getVolvoInfo = function () {
    return this.name + " " + this.model + ", " + this.year + ", " + this.armor;
};

let volvo = new Volvo('volvoHeavy', 'c-60 armor', 1998, 'black', 210)
console.log(volvo)
console.log(volvo.getVolvoInfo())