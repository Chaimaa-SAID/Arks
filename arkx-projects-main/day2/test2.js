//Task 1 : Going back in Time !

//factorial
let n=5;
function factorial(n){
    
    let fact=1;
        let i;
        for ( i =1 ; i <= n; i++) {
        fact*=i;
       
}
return fact ;
    
}

fact=factorial(n);
console.log("factorial de "+n+" est: "+fact);
// nomnre des chifres

let number=123456;
     function nDigits(number){
       let j = 0;
       while (number!=0) {
       number = Math.floor(number / 10);
        j++;

           }
      return j;


}
j=nDigits(number);
console.log("le nombre de chiffre est: "+j);
// number to day

var day =7;
function numberToDay(day){
   

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

}
numberToDay(day);
// le max entre 3 nombres
let a=4,b=3,c=9;
function max(a, b, c){
    let maximum;

if (a >= b && a >= c) {
    maximum = a;
} else if (b >= a && b >= c) {
    maximum = b;
} else {
    maximum = c;
}

console.log("le maximum est:", maximum);

}
max(a,b,c);
// function qui donner le grade
   let score=83
   function myGrade(score){
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

}
myGrade(score);
//Task 2 : The Extended Factorial
let n1=5,p=4;
function combinator(n1,p){
let c;
let pfac=1;
let defpn=1;
let i,j;
        for ( i =1 ; i <= p; i++) {
        pfac*=i;
       
      }
      for ( j =1 ; j <= n1-p; j++) {
        defpn*=j;
       
      }

return  factorial(n1)/(pfac*defpn);
}
c=combinator(5,2);
console.log("le combinateur est  :"+c);
// 3 :  The Calculator

function Calculator(num1,aperateur,num2){
    switch (aperateur){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/" :
             if(num2!=0){
                return num1/num2;
             }
             else{
                return false;
             }
            break;
        case "%":
            if(num2!=0){
                return num1%num2;
             }
             else{
                return false;
             }
            break;
        case "c":
             return combinator(num1,num2);
             break;
        default:
            console.log("no resultat");}

    

            }
            let num1=5,num2=2;
            r=Calculator(num1,"c",num2);
            console.log("resultat est :"+r);

//  autre methode
            function myGrade(score) {
                if (score > 85) {
                    console.log("A");
                } else if (score <= 85 && score > 70) {
                    console.log("B");
                } else if (score <= 70 && score > 55) {
                    console.log("C");
                } else if (score <= 55 && score > 40) {
                    console.log("D");
                } else if (score <= 40 && score > 15) {
                    console.log("E");
                } else {
                    console.log("F");
                }
            }
            
           
            myGrade(75); 
            