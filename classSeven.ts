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
type User = {
    id: number,
    name: string,
    address: {
        city: string
    }
}
const user : User = {
    id: 333,
    name: 'rr',
    address: {
        city: 'ctg'
    }
}

// const myId = user.id;
const  myId = user['id']
// const myName = user.name
const myName = user['name']
// const address = user.address
const address = user['address']
console.log(myId,myName,address)

// type Key = keyof User

const getPropertyObject = (obj: User, key: keyof User)=> {
    return obj[key]
}
const getProperty = getPropertyObject(user, 'name')
console.log(getProperty);