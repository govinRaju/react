// Objects
//this refers to the current object where the code is witten inside
/*
var person = {
  name: ["bob", "Smith"],
  age: 32,
  gender: "male",
  intrests: ["music", "skiing"],
  bio: function() {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        "and is having" +
        this.intrests
    );
  },
  greetings: function() {
    alert("Hi! I'm" + this.name[0] + ".");
  }
};
*/
 add properties and methods to this object using dot or bracket notation as desired
/*
person1.name = "Chris";
person1["age"] = 38;
person1.greeting = function() {
  alert("Hi! I'm " + this.name + ".");
};
*/
//object literal

var person1 = new Object({
  name: "Chris",
  age: 38,
  greeting: function() {
    alert("Hi! I'm " + this.name + ".");
  }
});

var person2 = Object.create(person1);

//Prototypes are the mechanism by which JavaScript objects inherit features from one another
