class Car {
    constructor(private make: string, private model: string){

    }

    set carMake(value: string){
        this.make = value;
    }

    get carMake(){
        return this.make;
    }

}

const acura = new Car('Acura', 'TL');

console.log(acura.carMake)
acura.carMake = 'Honda';
console.log(acura.carMake)

