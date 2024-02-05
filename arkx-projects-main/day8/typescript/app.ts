/******* variables  */
// strings
let firstname: string = 'HELLO';
console.log(firstname);

// numbers
var n: number = 6;
console.log(n);

// boolean
let isPresent: boolean = true;
console.log(isPresent);

// any
let a: any = 7; // any means this variable can hold any value. (not recommended)
a = false; // NO ERROR
console.log(a);
/******* les tableaus  */
let arr: number[] = [1, 2, 3];
let a2: string[] = ["hi", "friends"];
console.log(arr.push(5));
console.log(arr);
console.log(a2)
// define our tuple
let ourTuple: [number, boolean, string];
/******* les objests  */
let obj: { name: string; age: number };
// Initialized Correctly
obj = { 
    name: "Steve",
    age: 40
}
// ERROR: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
console.log(obj)
/******* les fonctions  */
function add (a: number, b: number) : number {
    return a + b;
}


const greet = (name: string) : string => {
    return `Hello ${name}`;
}


// The type void can be used to indicate a function doesn't return any value.
function display (name: string): void {
    console.log(name);
}
display("aissame")
/***** custom types */
// the type User holds a name (string) and an age (number)
type User = { name: string; age: number };

const john: User = { name: "John Doe", age: 23 };

type Absence = boolean[];
const johnAbsence: Absence = [true, true, false, true];
//syntaxe aliases
type MyAlias = { prop: string };
//syntaxe interfaces 
interface MyInterface { prop: string; }





