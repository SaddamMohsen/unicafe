
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed
console.log('Array element with for Each')
t.forEach(value => 
{
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})     
const m = [1,2,3]
console.log('Array1 : '+m)
const m2=m.map(value=>value*2)
console.log("Array2 mapping from Array1")
console.log(m2)