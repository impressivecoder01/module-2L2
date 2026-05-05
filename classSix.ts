// constrain : strict rules 
const addStudentToCourse6 = <T extends {id: number, name: string}>(studentInfo: T) => {
    return {course: 'PH', ...studentInfo}
}
const student16 ={
    id: 343,
    name: 'mahabub',
    hasPen: true
}
const student26 = {
    id: 3245,
    hasCar: 'big',
    hasWife: false
}

const studentThree = {
    id: 44,
    name: 'r',
    hasWatch: true
}
const result3 = addStudentToCourse6(studentThree)
console.log(result3);