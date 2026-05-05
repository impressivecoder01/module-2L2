// constrain : strict rules 
type ObjectForStudent = {id: number, name: string, home: string,dateOfBirth: string}
const addStudentToCourse6 = <T extends ObjectForStudent>(studentInfo: T) => {
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
    hasWatch: true,
    home: 's',
    dateOfBirth: '3,3,3'

}
const result3 = addStudentToCourse6(studentThree)
console.log(result3);