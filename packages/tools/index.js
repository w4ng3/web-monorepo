export class Person {
  constructor(name, plan) {
    this.name = name;
    this.plan = plan;
  }
  get slogan() {
    return `${this.plan} is just my plan B`;
  }
}