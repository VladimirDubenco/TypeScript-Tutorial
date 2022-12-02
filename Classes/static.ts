class Bicycle {
    static NUM_OF_WHEELS: number = 2;
    constructor(private make:string, private model: string){

    }
    static stats(mile: number) {
        console.log(Bicycle.NUM_OF_WHEELS)
        return { mileage: mile, type: 'Bipedal'}
    }
}

console.log(Bicycle.NUM_OF_WHEELS)
console.log(Bicycle.stats(100))