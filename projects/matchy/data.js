/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'Battle Cat';
animal['name'] = 'Benton';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'Battle Roar';
noises.push('War Hiss');
noises.unshift("Humble Cry");
noises[noises.length] = 'Whistle Poot';
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal['noises'].push('Screech');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * By DOT notation and BRACKET notation.
 
 * 2. What are the different ways of accessing elements on arrays?
 *  For loops
    DOT notation
 
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', 
            name: 'Jerome',
            noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var dog = { species: 'dog', name: 'Porkchop', noises: ['bark', 'howl', 'sneeze', 'poot'] };
var bird ={ species: 'bird', name: 'Ptery', noises: ['gawk', 'screech']};
animals.push(dog, bird);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*5. [ ] Write a function that takes our `animals` array and returns a ANIMAL using `Math.random`
 6. [ ] Using this function that you just created, get a random animal and add its `name` to `friends`.
 7. [ ] `console.log` `friends`.
 8. [ ] add `friends` as a **property** named `friends` on one of the animals in `animals`
 9. [ ] `console.log` your work.*/
 // I chose to make friends an array to be able to find, add and return friends easier.
    var friends = [];
    var animalFriend;
    var min = Math.ceil(0);
    var max = Math.floor(animals.length);
function getRandomAnimal(animals) {
       return animalFriend = animals[Math.floor(Math.random() * (max - min)) + min];//The maximum is exclusive and the minimum is inclusive
}
getRandomAnimal(animals);
friends.push(animalFriend.name);
console.log(animalFriend);
console.log(friends);

for (var i = 0; i < animals.length; i++){
      if(animalFriend.name !== animals[i].name){
        animals[i]['friends'] = friends;
    }
   
   }
  
        
console.log(animals);

/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
