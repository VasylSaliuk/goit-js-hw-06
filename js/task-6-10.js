import users from './array.js';

// Write code under this line
const getSortedUniqueSkills = (array) => 
array.reduce((acc, value) => [...acc, ...value.skills], 
[]).filter((v, i, a) => a.indexOf(v) === i).sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
