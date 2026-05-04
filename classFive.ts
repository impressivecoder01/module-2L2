// const createArrayString = (value: string) => [value];
// const createArrayNumber = (value: number) => [value]
// const createArrayUserObject = (value:{id: number, name: string}) => {
//     return [value]
// }
const createArrayWithGeneric = <T>(value:T)=>{
    return[value]
}
const arrString = createArrayWithGeneric('apple')
const arrNumber = createArrayWithGeneric(33)
const arrObj = createArrayWithGeneric({id: 3, name:'mr'})