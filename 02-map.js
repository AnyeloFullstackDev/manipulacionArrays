const letters = [1,2,3,4,5];

const arr = [];
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    arr.push(element.toFixed(1) +" mapped");
}

console.log(letters)
console.log(arr)

const newArr = letters.map((number) => {
    number = number * 2;
    return number;
});
console.log(newArr)