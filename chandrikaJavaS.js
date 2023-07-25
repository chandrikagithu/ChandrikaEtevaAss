let List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
let List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

let result1 = List1.filter(person => !List2.includes(person));
let result2 = List2.filter(person => !List1.includes(person));
let result3 = List1.filter(person => List2.includes(person));
console.log(result1);
console.log(result2);
console.log(result3);