class Citizen {
    // private id: number;
    // public firstName: string;

    constructor(private id: number,protected firstName: string){
       
    }

    printName(){
        console.log(`Your name is all in caps: ${this.firstName} and you are ${this.id} years old`);
    }
}


class UsCitizen extends Citizen {
    private ssn: string

    constructor( id: number, name: string, ssn: string){
        super(id,name);
        this.ssn = ssn;
    }

    rename(newName: string) {
        this.firstName = newName;
    }
}    

const john = new UsCitizen( 5,'John','#1234')
console.log(john);

john.rename('Juniorro');
console.log(john);
john.printName();