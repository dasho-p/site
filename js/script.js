"use strict"

var user = {
  firstName: "Вася",
  sayHi: function(who) { // здесь у sayHi есть один аргумент
    alert( this.firstName + ": Привет, " + who );
  }
};

var sayHi = bind(user.sayHi, user);

sayHi("Петя"); // Вася: Привет, Петя
sayHi("Маша"); // Вася: Привет, Маша

document.write("branch master");