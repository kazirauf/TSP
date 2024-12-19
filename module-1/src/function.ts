// Function Learning 

// * normal function

function add(num1:number, num2:number) :number {
    return num1 + num2;
}

console.log(add(12, 23));

//* arrow function 

const addNumber = (num1:number, num2:number) :number => num1 + num2;

console.log(addNumber(45, 50));

//* object => function => method

const bankUser = {
    name: "kazi",
    balance: 100,
    greet(balance:number): string {
        return `My new balance: ${this.balance + balance}`;

    }
}


const array : number[] = [12, 423,134,6,32,134];

const newArray :number[] = array.map((element: number):number => element*element)