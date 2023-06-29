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
// so for this one i created the namesLength array and then i created the loop. Afte that what i did
// was creat a push function that would replace all the names with there own length using
//.length. then just need to console.log it to get it.
let namesLengths = [];

for( i = 0; i < names.length; i++){    
    
   
    namesLengths.push(names[i].length);
}

console.log(namesLengths);
// Question 6   ???????
//for this i created another loop using nameslength and then just used squigly brackets in order to 
// add the total of the lengths to the sum through each iteration.
var total = 0;

for( i = 0; i < namesLengths.length; i++){
  total += namesLengths[i];
}
console.log(total);

// I also created an arrow function to do the same thing for more practice. The function is very similar
// i created an arrow function sumOfArray and then used a new var total to be the sum and created
// a loop to iterate through the array then i just added them all together using += and returned the total
// then just need to console.log and run the function to get the answer
const sumOfArray = (array5) => {
    var total = 0;
    for( i = 0; i < array5.length; i++){
      total += array5[i];
    }
    return total;
}
console.log(sumOfArray(namesLengths))

 



// Question 7 
//this was a simple function to repeat words. I just created a function that would repeat the word given
// n number of times once the word was given and the number n as well. i used .repeat to do this.

function combine(word,n){
 console.log(word.repeat(n)) 
}

combine("hello",3)

// Question 8 
//simple function that adds the two strings given together. I used just a plus to add the two together
// and then added in a space in a string in order to seperate the answer with a space.

function fullName(firstName,lastName){
    console.log(firstName + " " +lastName);
}
fullName("Henry", 'Jones')

//Question 9
//this was a loop array. I used the loop in order to get the sum of the array using += and the loop
// I then created an if else statent to see if the sum was greater then 100. if it wasnt the else 
// statement would run and if it was the if would run.

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
// This was trickier for me but i created an array much like the sum array. The difference was that i 
//used a second variable count in order to count how many items were in the array using .length
// I then just logged the sum of the array and divided it by the count of the array in order to get 
//the avarage

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
//so this was similar to number 11. I pretty much took the function from number 11 and ran it twice
// once for each array. then i used an if else statement to check the two array averages against
// eachother and log out true or false based on what array has a higher average.

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

// for practice i tried it a different way as well. I created another function and used my already 
//made sumOfArray function from question 6. I then just used an if statment to compare the two 
//averages and return true if array 1 is bigger and if not return false. same as above but way
// more simplified
function difference2(array1,array2){
    if(sumOfArray(array1) > sumOfArray(array2)){
        return true
    } 
    return false
}
console.log(difference2([3,2,56,5,3],[4,5,6,4,34,76,87]))

//Question 12
// created a simple boolean function that would compare two items. then i just used a && function to 
//compare the two so it was simple. as long as it is true and above or equal to 10.50 the cost
//it would return true. if not false.
function willBuyDrink (isHotOutside,moneyInPocket){
    if(isHotOutside == true && moneyInPocket >= 10.50){
    console.log(true) 
      }  else {console.log(false)}
}

willBuyDrink(true,11.00)

//Question 13
// I created a function similar to the above boolean function. I used three items though in order
// to decide if it was worth getting a new lego set. If so three items need to meet the criteria 
//cool needs to be true, and moneyOwned needs to be greater then the cost by at least 50 dollars
//to make sure there is still money in the bank. If all these parameters are met i used an if else
//statement to post the string out come telling me if i can get a new set or not.
function willBuyLego (cool,cost,moneyOwned){
    if(cool == true && cost < moneyOwned + 50){
    console.log('Yes new Lego set') 
      }  else {console.log('Ehh not worth it')}
}
willBuyLego(false,24.50, 65.90);
willBuyLego(true,39.00, 122.00);


    
  



