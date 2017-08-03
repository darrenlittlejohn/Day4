//Story 1
// define Car constructor function in order to create custom Car() objects later
var Car = function(make, modelYear, color) {
this.make = make;
this.modelYear = modelYear;
this.color = color;
this.getCar = function() {return this.make + " " + this.modelYear + " " + this.color;};
};
// instantiate a Person object and store it in the Sports variable
var Sports = new Car("Honda", 2010, 'Black');
console.log(Sports.getCar());

//Story 2
// define Car constructor function in order to create custom Car() objects later
var Car = function(make, modelYear, color, speed) {
this.make = make;
this.modelYear = modelYear;
this.color = color;
this.speed = speed;
this.accelerate = function(){this.speed = this.speed+10};
this.brake = function(){this.speed = this.speed-7};
this.getCar = function() {return this.make + " " + this.modelYear + " " + this.color + " " + this.speed;};
}
// instantiate a Person object and store it in the Sports variable
var Sports = new Car("Honda", 2010, 'Black', 50);
console.log(Sports.getCar());

//Story3
// define Car constructor function in order to create custom Car() objects later
var Car = function(speed) {
  this.speed = speed;
  this.accelerate = function(){

    while (this.speed < 50) {
      this.speed = this.speed+10;
      console.log(this.speed);
    }
  };
}

var Sports = new Car(0);
console.log(Sports.speed);

Sports.accelerate();

//Story 3.2
var Car = function(speed) {
  this.speed = speed;
  this.decelerate = function(){

    while (this.speed > 49) {
      this.speed = this.speed-10;
      console.log(this.speed);
    }
  };
}

var Sports = new Car(0);
console.log(Sports.speed);

Sports.decelerate();
