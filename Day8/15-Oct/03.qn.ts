function newArray(arr: obj[]): obj[] {
  let newArr: obj[] = [];
  for (let item of arr) {
    let obj: obj = {};
    if (item.marks  > 48) {
      obj = { name: item.name, status: "Pass" };
    } else {
      obj = { name: item.name, status: "Fail" };
    }
    newArr.push(obj);
  }
  return newArr;
}
type obj = { name?: string; marks?: number; status?: string };
let students: obj[] = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];

console.log(newArray(students));
