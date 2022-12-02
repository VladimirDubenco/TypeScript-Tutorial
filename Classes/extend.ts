interface Patient {
    name: string;
}

interface Client extends Patient{
    raiting: number;
}

class Tenant implements Client, Patient {
    raiting: number;
    name: string;
    constructor (raiting: number, name: string) {
        this.raiting = raiting;
        this.name = name;
    }
}