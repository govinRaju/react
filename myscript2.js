//self calling function
(function() {
  "use strict";
  function greetme(yourName) {
    //   alert("Hello " + yourName);
  }
  greetme("World");
})();

//Block Statement

var x = 1;
{
  var x = 2;
}
console.log(2);
// Conditional statements

function checkData() {
  if (document.from1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      "Enter exactly threee charecters. " +
        document.form1.threeeChar.value +
        " is not valid. "
    );
    return false;
  }
}
//Exception handling statements

// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
// Make the exception convert to a pretty string when used as a string
// (e.g. by the error console)
UserException.prototype.toString = function() {
  return this.name + ' : "' + this.message + '"';
};
// Create an instance of the object type and throw it
throw new UserException("Value too high ");

//try catch  statement

function getMonthName(mo) {
  mo = mo - 1;
  var months = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo";
  }
}
try {
  monthName = getMonthName(myMonth); //function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler -> your own function
}

// finally block

function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true; //this return statement is suspended
    //until finally block has completed
    console.log(2);
  } finally {
    console.log(3);
    return false; //overwrites the previous "return"
    console.log(4); //not reachable
  }
  //"return false" is executed now
  console.log(5); // not reachable
}
f(); //console 0, 1, 3 ;return false
