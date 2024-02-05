
function addNumbers(a,b){
    return a+b;

}
function SubtractNumbers(a,b){
    return a-b;

}
function multiplyNumbers(a,b){
    return a*b;
    
}
function mivideNumbers(a,b){
    if(b!=0){
        return a/b;
    }
    else{
        console.log("error");
    }
    
}
r1=addNumbers(4,2);
console.log(r1)
r2=SubtractNumbers(5,3);
console.log(r2)
r3=multiplyNumbers(2,1);
console.log(r3)
r4=mivideNumbers(3,2);
console.log(r4)