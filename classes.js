class Vehicle {
    constructor(vin, make, model) {
		this.vin = vin;
		this.make = make;
        this.model = model;
	// return is not needed
	// because the new object is returned by default
	}
}

const v1 = new Vehicle('123', 'Boeing') // instance of vehicle
const car = new Vehicle(1234, 'Nissan', 'altima')
// console.log(v1)
console.log(car)

