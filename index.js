// Code your solutions in this file


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);


function writeCards(name, event) {
    const messages = [];
    for (let i = 0; i < name.length; i++) {
        messages[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    
    }

    return messages;
}

const number = [];

function countDown(number) {
    let x = 10;
while (x >= 0) {
    console.log(x);
    x--;
}
return number;
}
