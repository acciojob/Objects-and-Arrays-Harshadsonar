// players array
var players = ["John", "Mike", "Sarah"];

// person object
var person = {
  name: "Alice",
  age: 25,
};

// Create a variable team that references players array
var team = players;

// Create a variable team1 that is a copy of players array
var team1 = players.slice();

// Create a variable cap1 that is a copy of person object
var cap1 = Object.assign({}, person);

console.log(team);   // Output: ["John", "Mike", "Sarah"]
console.log(team1);  // Output: ["John", "Mike", "Sarah"]
console.log(cap1);   // Output: { name: "Alice", age: 25 }
