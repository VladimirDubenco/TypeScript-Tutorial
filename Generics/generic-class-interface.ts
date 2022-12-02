class Planet<Z> {
    private closestStar: Z;

    constructor(closestStar: Z){
        this.closestStar = closestStar;
    }
}

const earth = new Planet<string>('Sun');
// const planetX = new Planet<{name: string, distance: number}>(name: 'Xorox', distance: 10);

interface UserData<U>{
    size: number;
    data: U[];
}

//not finished yet. Pretty simple