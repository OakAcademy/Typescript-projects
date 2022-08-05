const favoriteShows: string[] = ['Friends', 'The Office', 'Breaking Bad'];
const dates = [new Date(), new Date()];

const meals: string[][] = [['breakfast'], ['lunch'], ['dinner']];

// HELP WITH INFERENCE
const office = favoriteShows[1];
const lastKnown = favoriteShows.pop();

// Prevent incopatible values
// favoriteShows.push(100);

// help with methods
favoriteShows.map((show: string): string => {
  return show.concat();
});

// Arrays have multiple types
const holidays: (Date | string)[] = [];
holidays.push('2022-01-01');
holidays.push(new Date());
