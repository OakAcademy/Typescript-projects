const client = {
  id: '1234',
  age2: 25,
  BMI: 1.5,
  condition: {
    mass: 80,
    height: 185,
  },

  setBMI(mass: number, height: number): void {
    this.BMI = mass / (height * height);
  },
};

const { id, age2 }: { id: string; age2: number } = client;

const {
  condition: { mass, height },
}: { condition: { mass: number; height: number } } = client;
