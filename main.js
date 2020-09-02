var Dog= require('./Dog');
var Cat= require('./Cat');

var AquaDog= new Dog('AquaDog');
var Tom= new Cat('Tom');
Tom.say();
AquaDog.eat(Tom);

console.log(AquaDog);