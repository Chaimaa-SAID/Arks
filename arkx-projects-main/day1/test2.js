// Task 1 : Even or Odd

let number=4;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
//Task 2 :  Days of the week

var day =7;

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednsday");
        break;
    case 4:
         console.log("Thursday");
        break;
    case 5:
          console.log("Friday");
        break;
    case 6:
         console.log("Saturday");
         break;

    case 7:
         console.log("Sunday");
        break;
    default:
        console.log("Unvalid Day");}

//Task 3 : Maximum 

let a = -15;
let b = 6;
let c = 2.6;


let maximum;

if (a >= b && a >= c) {
    maximum = a;
} else if (b >= a && b >= c) {
    maximum = b;
} else {
    maximum = c;
}

console.log("le maximum est:", maximum);

//Task 4 : The Teacher

let score=60;
if(score>85){
    console.log("A")
}
else{
    if(score<=85 && score>70){
        console.log("B")
    }
    else{
        if(score<=70 && score>55){
            console.log("C")
        }
        else{
            if(score<=55 && score>40){
                console.log("D")

            }
            else{
                if(score<=40 && score>15){
                    console.log("E")
                
            }
            else{
                console.log("D") 
            }
        }
    }
    }}