// The documentation in the instructions kinda gave it away..

function sum(array) {
let start = 0
let addUp = array.reduce((accumulator, currentValue) => accumulator + currentValue,start)
return addUp
}
