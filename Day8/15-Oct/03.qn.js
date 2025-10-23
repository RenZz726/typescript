function newArray(arr) {
    var newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var obj = {};
        if (item.marks > 48) {
            obj = { name: item.name, status: "Pass" };
        }
        else {
            obj = { name: item.name, status: "Fail" };
        }
        newArr.push(obj);
    }
    return newArr;
}
var students = [
    { name: "Alice", marks: 42 },
    { name: "Bob", marks: 67 },
    { name: "Charlie", marks: 35 },
];
console.log(newArray(students));
