// Encapsulation, Inheritance
class Car {
    color = 'red';
    brand = 'bmw';
    doors = '5';
    price = 25000;
    fuel = 0

    makeMoney() {
        console.log('Doing Uber drving')
    }

    changeBrand(newBrand) {
        this.brand = newBrand
    }

    fillGas(litter) {
        console.log(`current level:${this.fuel}`)
        this.fuel += litter
        console.log(`current level:${this.fuel}`)
    }


    //transport()

    // string interperlation,
    horn(count) {
        this.makeMoney()
        console.log(`I am horn ${count} times`)
    }

    // 构造函数,
    constructor(clrxx, brd, doors) {
        this.color = clrxx;
        this.brand = brd;
        this.doors = doors;
        console.log('im construcotr')
    }
}


class Tesla extends Car {
    emotor = 3
    constructor(clrxx, brd, doors, motorNum) {
        super(clrxx, brd, doors);
        this.emotor = motorNum;
    }
    makeMoney() {
        console.log('drive super star...')
    }

    rejectAcc() {
        console.log('accelarating.....')
    }
}

//static method,
// class instantiation
let car1 = new Car('Green', 'BMW', 3);

let car2 = new Tesla('Black', 'Tesla', 5, 3);
car2.makeMoney()




