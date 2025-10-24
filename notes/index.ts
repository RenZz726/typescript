console.log(Math.floor(12.4));

// type alias
type MyStringOrNumber = string | number;
let myValue: MyStringOrNumber = 10;

// intersection type
type FirstType = {
  name: string;
  age: number;
};
type SecondType = {
  address: string;
  phone: number;
};

type CombinedType = FirstType & SecondType;

const person = {
  name: "John",
  age: 30,
  address: "asdf",
  phone: 1234,
};

let array: (string | number) [] = [1, 3, 4, 4, "A", "B"];

// Tuple
let article: readonly [number, string, boolean] = [11, "Title", true];

article = [12, "Body", false];
// Destructuring tuple

const [id, title, published] = article;
console.log(id);

// Enums
