//conditional type: je type condition er depend 
type A = null;
type B = undefined;
type C = A extends null ? true : B extends undefined ? true : false

type RichPeople = {
    bike: string;
    car: string;
    ship: string
}
type CheckVehicle<T> = T extends keyof RichPeople ? true : false 
type HasBike = CheckVehicle<'ship'>