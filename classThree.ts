// dynamically generalize: Generic
// const friends: string[] = ['mrx','mry','mrz']
const friends: Array<string> = ['mrx','mry','mrz']
// const rollNumber : number[] = [3,2,3,4,45]
const rollNumber: Array<number> = [2,2,1,34,45]
// const isEligibleList: boolean[] = [true,false,true]
const isEligibleList: Array<boolean> = [true,false,true]

type GenericArray = Array<string>
type GenericArrayF<T> = Array<T>
const friendsF: GenericArrayF<string> = ['mrx','mry','mrz']
const rollNumberF: GenericArrayF<number> = [2,2,1,34,45]
const isEligibleListF: GenericArrayF<boolean> = [true,false,true]

// const sqrFun = (value: number):number => {
//    return value*value //not important
// }
type Coordinates<X,Y> = [X, Y]
const coordinates:Coordinates<number, number> = [21,32]
const coordinates1:Coordinates<string,string> = ['21','32']
const userList = [
    {
        nam: 'mx.x',
        age: 66
    },
    {
        nam: 'mr.y',
        age: 33
    }
]