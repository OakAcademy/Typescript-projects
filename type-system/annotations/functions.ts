const multiply = (x: number, y: number): number => {
  return x * y;
};

const divide = (x: number, y: number): number => {
  return x / y;
};

function sum(x: number, y: number): number {
  return x + y;
}

const substract = function (x: number, y: number): number {
  return x - y;
};

const printer2 = (content: string): void => {
  console.log(content);
};

const throwError = (content: string): void => {
  throw new Error(content);
};

const earthquake = {
  date: new Date(),
  velocity: 4.5,
};

const logVelocity = ({
  date,
  velocity,
}: {
  date: Date;
  velocity: number;
}): void => {
  console.log(date);
  console.log(velocity);
};

logVelocity(earthquake);
