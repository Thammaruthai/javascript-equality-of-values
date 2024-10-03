// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // false 
Object.is(0, -0); // false
Object.is(NaN, 100); // false
Object.is("one", "two"); // false
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // trueผิด เฉลยคือ false JavaScript objects ถูกเก็บเป็น references (ตัวชี้ตำแหน่งหน่วยความจำ) ไม่ใช่ค่าที่แท้จริง
Object.is(null, undefined); // true ผิด เฉลยคือ false เพราะใน JavaScript null และ undefined เป็นค่าที่แตกต่างกัน แม้ว่าทั้งสองจะบ่งบอกถึงการไม่มีค่า แต่ความหมายทางเทคนิคของพวกมันแตกต่างกัน และ JavaScript จะไม่ถือว่ามันเท่ากัน

10 === 20;  // false
10 === "10" // false
3.14 !== 3.14; // false
"TechUp" !== "TechUp"; // false
NaN === NaN; // false
0 !== -0; // false

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; // true ผิด เฉลยคือ false เพราะ จะตรวจสอบว่า object สองตัวนั้นอ้างอิง (reference) ถึงตำแหน่งเดียวกันในหน่วยความจำหรือไม่ ไม่ใช่ตรวจสอบว่าเนื้อหาข้างใน object นั้นเหมือนกันหรือไม่

console.log(objectA === objectB);

