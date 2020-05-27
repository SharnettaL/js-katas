function add (x, y){
    return (x + y)

}
console.log(add(10, 2))


function multiply (x, y){
    let total = 0
    for(let index = 0; index < y; index += 1){
    total = add(x, total)
}

return total
}
console.log(multiply(10,2))

function power (x, n){
    let total = 1
    for(let index = 0; index < n; index += 1){
    total = multiply(x,total)
    }
return total
}
console.log(power(10,2))


function factorial (x){
    let total = 1
    for(let index = 2; index <= x; index +=1){
        total = multiply(index, total)
    }
  return total
}
console.log(factorial(10))

