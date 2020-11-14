import users from './array.js'

const getUsersWithGender = (array, gender) => 
array.filter((sex) => sex.gender === gender).map(({name}) => name);

console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
