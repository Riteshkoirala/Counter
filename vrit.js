// alert("hi i am ritesh");
// console.log('my name is ritesh koirala');
// let name = "ritesh";
// console.log(`my name is ${name} koirala` );

// document.getElementById("count").innerText = 5

// let myAge = 30;
// let humanDogRatio = 7
// myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

let count = 0
saver = document.getElementById("read")
conte = document.getElementById("count")
saver.innerText += "Saved Entries: "

function increment(){
count +=  1
document.getElementById("count").innerText = count

}

function save(){

    let countStr =  " - "+count
    saver.textContent += countStr

    count = 0
    conte.innerText = count

}



// for(let i=0; i<=5; i++){
//     console.log(i)
// }

// let lap1 = 0
// let lap2 = 34
// let lap3 = 45

// function count(){

//     lap1= lap1+1
//     console.log(lap1)
// }

// count()
// count()
// count()

