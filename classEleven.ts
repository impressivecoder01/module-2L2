const arrayNumber: number[] = [3,4,565,43]
const arrayString: string[] = ['3', '3']
const arrayStringUsingMap : string[] = arrayNumber.map((num)=> num.toString())
console.log(arrayStringUsingMap);

type AreaOfNum = {
    height: number;
    width: number;
}
// type AreaOfString = {
//     height: string;
//     width: string
// }
type AreaOfString<T> = {
    [key in keyof T]: T[key]
}
const area1 : AreaOfString<{height: number, width: number}> = {height: 50,  width: 30}