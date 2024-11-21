console.log("testing external javascript")

 let student = "Amaka"
 console.log(student)

 let grade = 96;

 console.log("students grade",grade);
 if(grade >= 90){
    console.log("good")
 }


 /**
  * Atm machine
  * user wants to withdraw money fron atm machine
  * balance 50_000
  * withdraw 10_000
  * 
  * check if user can withdraw the cash
  * if they can log out " please take your cash"
  * "Your current balance is",balance
  * 
  * 
  * Else,"Insufficient funds"
  * "Your current balance is",balance
  */



 let balance = 50_000
 let withdrawalAmount = 10_000

 console.log("withdrawal amount", withdrawalAmount);
 if(withdrawalAmount <= balance)
    {balance = balance - withdrawalAmount
    console.log("Please take your cash,Your current balance is",balance);
     
 } else {
    console.log("Insufficient funds")
    console.log ("Your Current balance is", balance );
 }

 // Switch case

 // Grade system: A,B, C, D, E, F

let studentGrade = "A"

console.log("Student grade", studentGrade);

switch( studentGrade) {
    case "A":
        console.log("Excellent")
        break;
        
        case "B":
        console.log("Good Grade")
        break;

        case "C":
            console.log("Good")
            break;

            case "D":
                console.log("Manageble")
                break;

    default :
    case "F":
        console.log("failed")
        break;
}




//loops
//while loop

let num = 0

while (num < 10){
    num +=1;
    console.log ("num", num)
}

//ASSIGNMENT
//Question 1
let oddNumbers = 0;
let evenNumbers = 0;

for(let i = 1; i <=100; i++){
    if(i % 2 === 0){
        evenNumbers++;}
    else{oddNumbers++}
}
console.log( Totalodds= {oddNumbers})
console.log( Totalevens= {evenNumbers})




//Question 2

let fruit = "Banana";
let n = "";

let i = fruit.length - 1

while (i>=0) {
  n += fruit[i];
  i--;
}
console.log(n);



//Question 3

for(let i = 1; i<=300; i++){
    if(i % 3 ===0 && i % 5 === 0)
    {console.log(i)}
}













