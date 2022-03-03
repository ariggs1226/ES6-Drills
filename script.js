// The [movie = "Fern Gully"] is setting a default if nothing is called in the parameter part of the function.
function favMovie(movie = "Fern Gulley", name = "Tommy Wiseau") {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
}
// The function above and the one below accomplish the same result.
let favMovie = (movie = "Fern Gulley", name = "Tommy Wiseau") => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie("A Silent Voice", "Aric Riggs");
favMovie("Josh");

//Below function returns "josh".
let getFirstName = (name) => {
    return name.split(" ")[0]; // ["josh", "hurn"][0]
}
//More ways to do the above function are:
// const getFirstName = (name) => {
//     const nameArr = name.split(" "); // ["josh", "hurn"][0]
//     return nameArr[0];
// }
//
//const getFirstNameConscise = (name) => name.split(" ")[0];
console.log(`
    ${getFirstName("josh hurn")},

    ${getFirstNameConcise("josh hurn")}
`);

console.log()



let doMath = (val1, val2) => {
    return {
        exponent: val1**val2, //Another way to do this is: Math.pow(val1, val2)
        product: val1 * val2
    };
};

const doneMath = doMath(2, 3);

console.log(`the exponent result is ${doneMath.exponent} and the product is ${doneMath.product}`);



const logThreeThings = (name, location, favFood) => console.table(name, location, favFood);
const arr = ["Paul", "Birmingham", "Kimchi"];

logsThreeThings(...arr);

const myName = "Henry";

const myFunc = string => {
    const arrName = [...string]; //["H", "e", "n", "r", "y"]

    for (let i= 0; i < arr.length; i++) {
        console.log(arr[1]);
    }
};

myFunc(myName);