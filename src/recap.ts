const myName = 'Luis';
const myAge = 22;

const suma = (a: number, b: number) => a + b;
console.log(suma(2, 3));
console.log(myName);
console.log(myAge);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
}

const luis = new Persona(myAge, myName);
console.log(luis.getSummary());
