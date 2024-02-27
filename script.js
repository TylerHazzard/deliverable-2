let name = prompt("Welcome to GC mini golf! What is your name?");

let holecount = prompt("Hi, " + name + "! Would you like to play 3 or 6 holes?");

let total = 0;

for(let n = 1; n <= holecount; n++) {
    let putts = Number( prompt("How many putts for hole " + n +"? (par: 3)") );
    total += putts;
}

const par = 3 * holecount;
const score = total - par

if (total === par) {
    console.log("Good game, " + name + " Your total par was: 0")
} else if (total < par) {
    console.log("Great job, " + name + "! Your total par was: " + score)
} else {
    console.log("Nice try, " + name + "... Your total par was: +" + score)
}