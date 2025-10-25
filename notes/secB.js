// OPTIONAL & DEFAULT PARAMETERS
// ?? nullish coalescing to handle undefined
function introduce(name, greeting, age) {
    if (greeting === void 0) { greeting = "Hi"; }
    //   return age
    //     ? `${greeting}, I'm ${name} (${age}.)`
    //     : `${greeting}, I'm ${name}.`;
    return "".concat(greeting, ", ").concat(name, " ").concat(age ? "(".concat(age, ")") : "");
}
console.log(introduce("Alice", "Hi"));
function atheleteInfo(athelete) {
    return "".concat((athelete.name, athelete.grade, athelete.sport));
}
atheleteInfo({ name: "June", grade: 4, sport: "tennis" });
