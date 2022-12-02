interface Computer {

    name: string;
    ram: string;
    size: number;

    connect(adapter: string): void;
}

let latitude: Computer;

latitude = {
    name: 'Latidude',
    ram: '32G',
    size: 15,

    connect(adapter: string):void {
        console.log(`Power ON. Connected to adapter ${adapter}`);
    }
}

latitude.connect('Adapter 1');
console.log(latitude);

interface HttpConnection {
    createConnection(url: string): void;
}

class MakeConnection implements HttpConnection{
    private headers: string[];
    private body: string;

    constructor(headers:string[], body: string) {
        this.headers = headers;
        this.body = body;
    }
    createConnection(url: string): void {
        console.log(`Connection created to ${url}`)
    }

}