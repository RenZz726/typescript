// VARIABLES & TYPES
const username: string = "John";
const age: number = 12;
const isAdmin: boolean = true;
const hobbies: string[] = ["reading"];

type Status = "Active" | "Inactive"; // Wrap string literals
const status: Status = "Active";

// OBJECTS
type User = { name: string; age: number; isAdmin: boolean };
const user: User = { name: "John", age: 32, isAdmin: false };

// FUNCTIONS

function add(a: number, b: number): number {
  return a + b;
}

function getUserInfo(user: User) {
  return `${user.name} (${user.age}) - Admin: ${user.isAdmin}`;
}

getUserInfo({ name: "Alice", age: 25, isAdmin: true });

function printStatus(status: Status): string {
  return status;
}
printStatus("Active");


function doubled(arr: number[]) {
  return arr.map((num) => num * 2);
}
const numbers: number[] = [1, 2, 3, 5];
doubled(numbers);

function onlyAdmins(users: User[]) {
  return users.filter((user) => {
    if (user.isAdmin === true) return user.name;
  });
}
const user1: User[] = [
  { name: "abc", age: 23, isAdmin: true },
  { name: "bcd", age: 32, isAdmin: false },
];
