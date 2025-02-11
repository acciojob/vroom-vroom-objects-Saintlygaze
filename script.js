// Complete the js code
class Car {
	constructor(make,model){
		this.make = make;
	this.model =model;
	}
	
}

Car.prototype.getMakeModel=function()
{
	return `${this.make} ${this.model}`
}

class SportsCar extends Car {
	constructor(make,model,topspeed){
	super(make,model);
	this.topSpeed = topSpeed;
	}
	
}

Car.prototype.getTopSpeed=function()
{
	return this.topSpeed;
}

Sportscar.prototype= Object.create(Car.prototype);
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
