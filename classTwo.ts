type User = {
    name: string,
    age: number
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role
const user1 : User = {
    name: 'md',
    age: 3
} 
const user2 : User = {
    name: 'mm',
    age: 3
}

interface IUser {
    name: string,
    age: number
}
const user0 : IUser = {
    name: 'dfd',
    age: 444
}

type IsAdmin = boolean;
const isAdmin: IsAdmin = false

interface IUserWithAdmin extends IUser {
    role: 'admin' | 'user' 
}

const user3 : IUserWithAdmin = {
    name: 'na',
    age: 3,
    role: 'admin'
}
console.log(user3)
type Add = (num1: number, num2: number)=> number
const add: Add = (num1, num2) => num1+num2
console.log(add(4,4))

interface IAdd {
    (num1: number, num2: number): number
}