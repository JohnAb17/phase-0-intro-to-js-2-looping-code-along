// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }

  return gifts;
}
wrapGifts(gifts);


function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
    }
    
    return messages;
    
}
writeCards(["Guadalupe","Ollie", "Aki"], "surprise");

function countDown(number) {
    let countup = 10;
    while (countup >= 0) {
      console.log(countup--);
 }
 }
countDown(10);
    
