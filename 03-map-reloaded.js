const orders = [
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Zulema', total: 120, delivered: false },
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true },
];

/* console.log('original', orders);
const rta = orders.map(item => item.total)
console.log(rta) */

/* const rta2 = orders.map(item => { 
    item.tax = .19;
    return item;
}
)
console.log(rta2)
console.log(orders) */

const rta3 = orders.map(item => { 
    return {
        ...item,
        tax: .19,
    }
}
)
console.log(orders)
console.log(rta3)


 function sumar(array){
   let acc = 0;

   for (let i=0; i<=array.length -1; i++){
        const element = array[i];
        acc = acc + element
   }
return acc
}

const arr = [20, 30, 40, 50];
const newArray = sumar(arr)

console.log(newArray);