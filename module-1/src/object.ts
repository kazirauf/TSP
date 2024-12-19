
const user: {
 id: string;
 company: "DevMaster Guild"; // type ---> literal types
 name: string;
 isMarried?: boolean;
 age: number;
 phoneNumber: string;
 address:string
 email: string;

 
} ={
id: "7984bh",
company: "DevMaster Guild",
name: "kazi rauf elahi",
age:13,
phoneNumber: "01404555331",
address: "rajshahi, bangladesh",
email: "raufelahi9876@gmail.com"
}



//! readonly method

const user2: {
 id: string;
 readonly company: string; // type ---> literal types
 name: string;
 isMarried?: boolean;
 age: number;
 phoneNumber: string;
 address:string
 email: string;

 
} ={
id: "7984bh",
company: "DevMaster Guild",
name: "kazi rauf elahi",
age:13,
phoneNumber: "01404555331",
address: "rajshahi, bangladesh",
email: "raufelahi9876@gmail.com"
}