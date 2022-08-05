class Employee {
  constructor(public age: number) {}

  protected endShift(): void {
    console.log('Shift has been ended');
  }
}

const employee = new Employee(29);
console.log(employee.age);

class Mechanic extends Employee {
  constructor(public name: string, age: number) {
    super(age);
  }

  private startShift(): void {
    console.log('Mechanic started to shift');
  }

  goToWork(): void {
    this.startShift();
    this.endShift();
  }
}

const mechanic = new Mechanic('Jack', 30);
mechanic.goToWork();
