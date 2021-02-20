// let myName = "Busayomi";
// console.log(myName)
// const myAge = 37;
// console.log(myAge)


// let myNumber = 12;
// myNumber += 4; // myNumber = myNumber + 4
// console.log(myNumber)


// let myAge = 37;
// console.log(myAge)

// newAge = myAge * 2
//newAge = myAge - 2 //
//  newAge = myAge + 2
 //newAge = myAge / 2

//console.log(newAge)

// myAge += 2;
// console.log(myAge)
// myAge -= 2;
// console.log(myAge)
// myAge *= 2;
// console.log(myAge)
// myAge /= 2;
// console.log(myAge);

// let a = "what is your name ?"
// let b = " my name is yomi"
// console.log(a+b)
// let c = "yomi"
//  console.log(`my name is ${c}`)

        //array
// let myList = ["rice", "beans", "yam", "bread", "potatoes"];
// console.log(myList.length);
// console.log(myList[1]);
// myList[1]= "tea"
// console.log(myList[1]);

        //object
// let car = {
//     color: "blue",
//     model: "honda",
//     doors: 2
// };

// car.driver = "yomi";
// console.log(car)
// console.log(car.doors)


// let me ={
//    name: "ola",
//     Height: "5in 10ft",
//     favoriteFood: "fries"
// }
// console.log(me.name)
// console.log(me.Height)
// console.log(me.favoriteFood)
// console.log(me)
// me.favoriteFood = "rice"
// console.log(me)

        //logic
// let myName = 'Mike';
// let myAge = 44;
// myName === 'Mike' && myAge >=40;

        //if statement
// let myAge =26;
// //let myAge =12;
// if(myAge > 25){
//     console.log('you must have a great insurance')
// }

        //if else
// let myAge =21;
// if(myAge > 21){
//     console.log('youare old to drink')
// }else if(myAge < 21){
//     console.log('sorry no drink')
// }else{
//     console.log('allowed')
// }

// let age =22;
// // let age =20;
// // let age =21;
// if(age > 21){
//     console.log('you can come in')
// }else if(age < 21){
//     console.log('you can come back in few years')
// }else{
//     console.log('just made it')
// }


            //loop
            //whileloop
            //infinite-loop
//   let numbers = [1,2,3,4,5];
//   let i = 0;
  
//   while(i < numbers.length){
//     }

    //whileloop
//   let numbers = [1,2,3,4,5];
//   let i = 0;
//   while(i < numbers.length){
//       console.log(numbers[i]);
//       i += 1;
//   }

    //for loop
    // let numbers = [1,2,3,4,5];
    // for(let j =0; j < numbers.length; j++){
    //     console.log(numbers[i]);
    //     let sum = 
    // }


     //whileloop

//  let numbers = [1,2,3,4,5];
//  let i = 0;
//  while(i < numbers.length){
//      console.log(numbers[i]);
//      i += 1;
//  }


  //let numbers = [1,2,3,4,5]; //adding all this number and looping thru
    // let total = 0;
    // for(let j =0; j < numbers.length; j++){
       
    //     total = total + numbers[j] // OR   //total +=numbers[j]
    // }
    // console.log(total);


    


    //FUNCTIONS

    function printGreeting(recipient){
        console.log(`Good afternoon ${recipient}`);
    }    
    printGreeting('GOLD')
    printGreeting('YOMI')
    printGreeting('ANNY')
    
    //es6 - arrow func
    const greeting =(recipient) =>{
        console.log(`Good morning ${recipient}`);
    }    
    greeting('GOLD')
    greeting('YOMI')
    greeting('ANNY')
    
    
    const creatGreeting =(recipient) =>{
        return `Good morning ${recipient}`;
    }    
    const message = creatGreeting('mike')
    console.log(message);
    
    
    function calculateArea(length, width){
        return length * width;
    }
    let area = calculateArea(10, 5)
    console.log(area)