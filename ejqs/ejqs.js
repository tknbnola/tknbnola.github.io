//ELOQUENT JAVASCRIPT HOMEWORK



//      CHAPTER 2
//      Looping a Triangle


for(var i = '#'; i.length < 8; i+= '#'){
    console.log(i);
}

//      Fizz Buzz

var three = 'Fizz';
var five = 'Buzz';
var fifteen = 'FizzBuzz';
for (var counter = 1; counter < 101; counter++) {
    if (counter %3 === 0 && counter %5 !== 0) {
        console.log(three);
    } else if (counter %5 === 0 && counter %3 !== 0) {
        console.log(five);
    } else if (counter %3 === 0 && counter %5 === 0) {
        console.log(fifteen);
    } else {
        console.log(counter);
    }
}


//      Chess Board

var size = 8;
var grid = "";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 === 0)
      grid += " ";
    else
      grid += "#";
  }
  grid += "\n";
}

console.log(grid);


//      CHAPTER 3


//      Minimum

function min(num1,num2) {
  if(num2 < num1) {
    return num2;
  } else
    return num1;
}
min(12, 35);

//      Recursion

function isEven(num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
    return false;
    } else if (num < 0) {
    return isEven(-num);
    } else
    return isEven(num - 2);
    }
isEven(35);


//        BEAN COUNTING

function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) === char)
      count += 1;
  return count;
}

function countBs(str) {
  return countChar(str, "B");
}
countBs('babbalou');


//        CHAPTER 4


//        SUM OF A RANGE

function range(start, end, step) {
  if (step === null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++)
    total += arr[i];
  return total;
}
console.log(range(1, 10));

console.log(range(15, 2, -1));

console.log(sum(range(1, 10)));


//      Reversing an Array

function reverseArray(array){
  var reversed = [];
  for(var i = array.length - 1; i > -1; i--){
  	 reversed.push(array[i]);
  }
  return reversed;
}
var arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(array) {
  var reversed = [];
  for(var i = array.length - 1; i > -1; i--){
  	 reversed.push(array[i]);
  }
  return reversed;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

console.log(reverseArrayInPlace(arrayValue));

console.log(arrayValue);
// → [5, 4, 3, 2, 1]


//      A List

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}


function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));


//      DEEP COMPARISON

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a === null || typeof a !== "object" ||
      b === null || typeof b !== "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA === propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//      FLATTENING

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));

// → [1, 2, 3, 4, 5, 6]


//        AGE DIIFERENCE

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
// → 31.2


//        LIFE EXPECTANCY

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94


//      EVERY & THEN SOME

function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false