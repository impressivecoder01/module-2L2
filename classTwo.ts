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
const user3 : UserWithRole = {
    name: 'na',
    age: 3,
    role: 'admin'
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

type IUSerWith