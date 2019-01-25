
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('methods').del()
    .then(function () {
      // Inserts seed entries
      return knex('methods').insert([
        {
          "id": 1,
          "name": ".map",
          "syntax": "var new_array = arr.map(callback[, thisArg])",
          "description": "Creates a new array with the results of calling a provided function on every element in the calling array.",
          "example": "var array1 = [1, 4, 9, 16]; // pass a function to map const map1 = array1.map(x => x * 2); console.log(map1); // expected output: Array [2, 8, 18, 32]",
          "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
        },
        {
          "id": 2,
          "name": ".filter",
          "syntax": "var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])",
          "description": "Creates a new array with all elements that pass the test implemented by the provided function.",
          "example": "ar words = ['spray', 'limit' 'elite', 'exuberant', 'destruction' 'present'] const result = words.filter(word => word.length > 6) console.log(result) // expected output: Array ['exuberant', 'destruction', 'present']",
          "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
        },
        {
          "id": 3,
          "name": ".reduce",
          "syntax": "arr.reduce(callback[, initialValue])",
          "description": "Executes a reducer function (that you provide) on each member of the array resulting in a single output value.",
          "example": "const array1 = [1, 2, 3, 4]; const reducer = (accumulator, currentValue) => accumulator + currentValue; // 1 + 2 + 3 + 4 console.log(array1.reduce(reducer)); // expected output: 10 // 5 + 1 + 2 + 3 + 4 console.log(array1.reduce(reducer, 5)); // expected output: 15",
          "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
        },
        {
          "id": 4,
          "name": ".pop",
          "syntax": "arr.pop()",
          "description": "The pop method removes the last element from an array and returns that value to the caller. .pop is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.",
          "example": "var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']; var popped = myFish.pop();console.log(myFish); // ['angel', 'clown', 'mandarin' ] console.log(popped); // 'sturgeon'",
          "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
        },
        {
          "id": 5,
          "name": ".push",
          "syntax": "arr.push(element1[, ...[, elementN]])",
          "description": "The push method appends values to an array. push is intentionally generic. This method can be used with call() or apply() on objects resembling arrays. The push method relies on a length property to determine where to start inserting the given values. If the length property cannot be converted into a number, the index used is 0. This includes the possibility of length being nonexistent, in which case length will also be created. Although strings are native, Array-like objects, they are not suitable in applications of this method, as strings are immutable.  Similarly for the native, Array-like object arguments.",
          "example": "var sports = ['soccer', 'baseball']; var total = sports.push('football', 'swimming'); console.log(sports); // ['soccer', 'baseball', 'football', 'swimming'] console.log(total);  // 4",
          "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
        },
      ]);
    });
};
