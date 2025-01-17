//oppg 1
var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

console.log(arr.length);

//oppg 2

var tekst1 = "12345"

if (tekst1.length > 0) {
    console.log("TEksten er ikke tom");
} else {
    console.log("TEksten er tom");

}

//oppg 3

const tekst2 = "HELLO WORLD"
console.log(tekst2.indexOf("W"));


// opp 4
/*  
    At er en bedre version av CharAt fordi At kan du bruke negative tall, mens charAt kan du ikke.
*/

//oppg 5

// for å trekke ut en del av en streng er det A (slice) som er riktig

function Tekst3 (params) { 
    let Tekst3 = "Apple, Banana, Kiwi";
    let svar = Tekst3.slice(7,13)
    console.log(svar);
    
}
 Tekst3();
 


        