interface Developer<T>{
    name: string,
    salary: number,
    device: {
        brand: string,
        model: string,
        releaseYear: string
    },
    smartWatch: T
}
const poorDeveloper :Developer<{
    heartRate: string,
    stopWatch: boolean
}> = {
    name: 'Mr. Poor',
    salary: 20,
    device: {
        brand: 'lenovo',
        model: 'A21',
        releaseYear: '2000'
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true
    } 
}