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

//tuple 
const createArrayWithoutTuple = (params: string, params2: number) => [params,params2]
const createArrayWithTuple = <X,Y>(params: X, params2 :Y) => [params,params2]
const res1 = createArrayWithTuple('mr', 333)
console.log(res1);
const res2 = createArrayWithTuple(333, false)
console.log(res2)

const addStudentToCourse = <T>(studentInfo: T) => {
    return {course: 'PH', ...studentInfo}
}
const student1 ={
    id: 343,
    name: 'mahabub',
    hasPen: true
}
const student2 = {
    id: 3245,
    hasCar: 'big',
    hasWife: false
}
const result = addStudentToCourse(student1)
console.log(result)
const result2= addStudentToCourse(student2)
console.log(result2)