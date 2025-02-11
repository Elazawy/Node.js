const numbers = [5, 2, 9, 1, 7, 3];
let large = numbers[0];
let small = numbers[0];
for(let i=0; i<5; i++){
    large = Math.max(large, numbers[i]);
    small = Math.min(small, numbers[i]);
}
console.log(`Largest: ${large}`);
console.log(`Small: ${small}`);