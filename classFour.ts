interface Developer<T,Y=null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: T;
  bike?: Y
}

interface BrandCharaWatch  {
heartRate: string;
  stopWatch: boolean;
}
const poorDeveloper: Developer<BrandCharaWatch, {brand: 'Yamaha', engineCapacity: '222cc'}> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releaseYear: "2000",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
  bike: {
    brand: 'Yamaha',
    engineCapacity: '222cc'
  }
};
interface ApppleWatch {
 heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AI: boolean;
}
const richDeveloper: Developer<ApppleWatch> = {
  name: "Mr. Rich",
  salary: 20555,
  device: {
    brand: "hp",
    model: "A421",
    releaseYear: "2600",
  },
  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: true,
    AI: true,
  },
  bike: null
};

console.log(richDeveloper)