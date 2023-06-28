let ages = [3,9,23,64,2,8,28,93,55]
// question 1
// created an array anf then made a function that subtracts the first ages represented with age[0] 
// since the array start at 0 and then the last array using .length -1 since the last array will be 
// the length -1 since arrays start at 0.
function subtractArray(array) {
    let subtract =  (ages[0] - ages[ages.length -1])

    for(i = 0; i < ages.length-1; i++)
    return subtract += ages[i]
    }   
// I then created a for loop starting at 0 and going the length of the array that will subtract 
//front and back array but also cycle through the entire array this one was a little tricky and im not 
// 100% i did it correctly but i think it is right.

console.log(subtractArray(ages))

// this one was tricky to but i did something similar to the first one. The big difference between them
// is i created two more variables to add and thats the sum of numbers and then the length of variables 
//in the array so the return would be the addition of all the numbers divided by the length of the array

function averageArray(array) {
    var sum = 0;
    var count = ages.length
    for( i = 0; i < count; i++){
        sum += ages[i];
    }
    return sum/count;
}
console.log(averageArray(ages));

// question 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function averageArrayName(array) {
    var total = 0;

    for( i = 0; i < array.length; i++){
      total += names[i].length;
    }
    return total / names.length;
}
console.log(averageArrayName(names));
// first part is to get the the length of all the arrays. I did that using a for loop that will add
// all the totals together as a number using .length. the for loop cycled through those and then
// I used the return to be that number minus the length of the array to find the average. 


    let namesSpaced = [];
    let space = " ";
    for( i = 0; i < names.length; i++){
        namesSpaced += names[i];
        if (i < names.length-1) namesSpaced += space;
       
    }

console.log(namesSpaced);
// for this question i created a new array that would be the old one with spaces. I created a loop 
// that would irrate until the length of the array and then an if statement so that when it iterated
// on the last line of the array it would add them all together with a space in between them using
// a space variable i created and added to it. Then you just have to log out the new array.

// question 3 
// you can access it by accessing .lenght-1 because an array starts at 0 so the last 
// element will be the length of the array -1. 

//question 4

// the first element is easier as you just access [0] since the array starts at 0

// Question 5

let namesLengths = [];

for( i = 0; i < names.length; i++){    
    
    if( i < names.length) {
    console.log(names[i].length += space);
}
}
// Question 6   ???????


 



// Question 7 

function combine(word,n){
 console.log(word.repeat(n)) 
}

combine("hello",3)

// Question 8 

function fullName(firstName,lastName){
    console.log(firstName + " " +lastName);
}
fullName("Henry", 'Jones')

//Question 9

function sumArray(array1) {
    let sum =  0;
    for(let i = 0; i < array1.length; i++){
        sum += array1[i];
    }
   if(sum > 100){
    console.log(true)
   }else{
    console.log(false)
   }
   }
    
sumArray([3,56,3,4,9])

// Question 10

function averageArray1(array) {
    var sum = 0;
    var count = array.length
    for( i = 0; i < count; i++){
        sum += array[i];
    }
    console.log(sum/count);
}
averageArray1([12,32,4,5,45,4])

// Question 11

function difference(array1,array2){
    var sum1 = 0;
    var count = array1.length
    for( i = 0; i < count; i++){
        sum1 += array1[i];
    }
    var sum2 = 0;
    var count = array2.length
    for( i = 0; i < count; i++){
        sum2 += array2[i];
    }
    if(sum1 > sum2){
    console.log(true)
    }else{
        console.log(false)
    }
     
}
difference([3,2,56,5,3],[4,5,6,4,34,76,87])

//Question 12
function willBuyDrink (isHotOutside,moneyInPocket){
    if(isHotOutside == true && moneyInPocket >= 10.50){
    console.log(true) 
      }  else {console.log(false)}
}

willBuyDrink(true,11.00)

//Question 13

function willBuyLego (cool,cost,moneyOwned){
    if(cool == true && cost < moneyOwned){
    console.log('Yes new Lego set') 
      }  else {console.log('Ehh not worth it')}
}
willBuyLego(false,24.50,38.90)
willBuyLego(true,39.00,94.00)


    
  



