{
    // 1. Spread with Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
console.log(combinedArray);

//  2.Spread with Objects

const obj1 = { name: "John", age: 25 };
const obj2 = { city: "New York", country: "USA" };
const combinedObject = { ...obj1, ...obj2 }; 
// { name: 'John', age: 25, city: 'New York', country: 'USA' }
console.log(combinedObject);

// 3.Function Arguments

const numbers = [10, 20, 30];
const maxNumber = Math.max(...numbers); // 30
console.log(maxNumber);

// 1.Rest with Function Arguments

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// 2. Rest with Destructuring Arrays

const fruits = ["apple", "banana", "cherry", "date"];
const [first, second, ...rest] = fruits;
console.log(first); // apple
console.log(second); // banana
console.log(rest); // ['cherry', 'date']

// 3. Rest with Destructuring Objects

const user = { id: 1, name: "Alice", age: 30, location: "Paris" };
const { name, ...restDetails } = user;
console.log(name); // Alice
console.log(restDetails); // { id: 1, age: 30, location: 'Paris' }
}
const number:number = 12; 
// end

