let anything: any;
// anything = 33;
// (anything as number)
anything = 'md';
// (anything as string)
const kgToGmConvert = (input: string | number): string | number |undefined => {
    if (typeof input === 'number'){
        return input*1000
    }
    else if(typeof input === 'string'){
        const [value] = input.split(' ')
        console.log(value)
        return `converted output is: ${ Number(value)*1000}`
    }

}
const result = kgToGmConvert(2) as number
console.log(result);
const result2 = kgToGmConvert('2 tk') as string
console.log(result2);