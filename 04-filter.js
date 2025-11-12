const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const newArray = [];

for (let i = 0; i < words.length; i++){
    const palabra = words[i];
    if (palabra.length>=6){
        newArray.push(palabra);
    }
}

console.log('original', words);
console.log('newArray', newArray);


const rta = words.filter((item) => {
    if (item.length >= 6){
        return item
    }
})

console.log('rta', rta)