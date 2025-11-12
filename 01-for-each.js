const letter = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < letter.length; i++) {
  const element = letter[i];
  console.log('for',element);
}

letter.forEach(u => console.log('foreach',u))