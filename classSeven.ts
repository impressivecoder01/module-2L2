// key constrain
// keyof: type operator
type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle = 'bike' | 'car' | 'cng'
type MyVehicle2 = keyof RichPeopleVehicle;
const myV = 'bike'
const myV1: MyVehicle = 'bike'
const myV2: MyVehicle2 = 'bike'
console.log(myV,myV1,myV2);