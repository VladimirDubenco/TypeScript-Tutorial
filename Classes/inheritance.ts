class Citizen {
    // private id: number;
    // public firstName: string;

    constructor(private id: number,private readonly firstName: string){
       
    }

    printName(){
        // console.log(`Your name is ${this.firstName} and you are ${this.id} years old`);
    }
}


class UsCitizen extends Citizen {
    private ssn: string

    constructor( id: number, name: string, ssn: string){
        super(id,name);
        this.ssn = ssn;
    }
}    

const john = new UsCitizen( 5,'John','#1234')
console.log(john);