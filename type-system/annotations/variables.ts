let age: number = 3;
let firstName: string = 'John';
let isMarried: boolean = false;

let noValue: null = null;
let notAssigned: undefined = undefined;

let today: Date = new Date();

//*****Arrays*****//

let planets: string[] = ['Earth', 'Mars', 'Jupiter', 'Saturn'];
let luckyNumbers: number[] = [3, 5, 7];
let completed: boolean[] = [false, true, false, false];

//*****Classes*****//
class Phone {}
let phone: Phone = new Phone();

//*****Object Literals*****//
let product: { name: string; price: number } = {
  name: 'pen',
  price: 15,
};

//***Functions***//
const printer: (content: string) => void = (content: string) => {
  console.log(content);
};

// Functions that returns the 'any' type

const place = '{"lat": 45, "lon":-70}';
const newLocation: { lat: number; lon: number } = JSON.parse(place);
console.log(newLocation);

// Initialize variable later
const forecast = ['sunny', 'rain', 'wind', 'cloudy'];
let isSunny: boolean;

for (let i = 0; i < forecast.length; i++) {
  if (forecast[i] === 'sunny') {
    isSunny = true;
  }
}

// Type can't be inferred correctly
let tempratures = [8, 5, -2];
let subzero: boolean | number = false;

for (let i = 0; i < tempratures.length; i++) {
  if (tempratures[i] < 0) {
    subzero = tempratures[i];
  }
}
