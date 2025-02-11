// Complete the js code
class Car {
	constructor(make,model){
		this.make = make;
	this.model =model;
	}
	
}

Car.prototype.getMakeModel()
{
	return `${this.make} ${this.model}`
}

class SportsCar extends Car(make, model, topSpeed) {
	super(make,model);
	this.topSpeed = topSpeed;
}

Car.prototype.getTopSpeed()
{
	return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
