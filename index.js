// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(Broom){
    return[...cats,Broom];
}
function prependCat(Arnold){
    return[Arnold,...cats]
}
function removeLastCat(){
    return cats.slice(0, 2)
}
function removeFirstCat(){
    return cats.slice(1)
}