// OPTIONAL & DEFAULT PARAMETERS
// ?? nullish coalescing to handle undefined
function introduce(name: string, greeting: string = "Hi", age?: number) {
  //   return age
  //     ? `${greeting}, I'm ${name} (${age}.)`
  //     : `${greeting}, I'm ${name}.`;
  return `${greeting}, ${name} ${age ? `(${age})` : ""}`;
}
console.log(introduce("Alice", "Hi"));

// UNION & INTERSECTION TYPES
// Union (|) either this or that
// Intersection (&) must have both

type Student = { name: string; grade: number };
type SportsPlayer = { sport: string };
type Athelete = Student & SportsPlayer;

function atheleteInfo(athelete: Athelete): string {
  return `${(athelete.name, athelete.grade, athelete.sport)}`;
}
atheleteInfo({ name: "June", grade: 4, sport: "tennis" });

// Type Aliases Vs Interfaces
type Point = { x: number; y: number };
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  salary: number;
}

interface Car {
  brand: string;
  model: number;
  year: number;
}
interface ElectricCar extends Car {
  batterCapacity: number;
}

const myCar: ElectricCar = {
  brand: "abc",
  model: 1234,
  year: 2025,
  batterCapacity: 4000,
};

// Literals and Enums
// Literals - string literals, numeric literals, boolean literals, template literals
// template literal - Allow you to construct new string literal types using template string syntax, often combined with union types.
type Color = "red" | "blue";
type Shade = "light" | "dark";
type ColoredShade = `${Color}-${Shade}`;
