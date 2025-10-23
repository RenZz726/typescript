enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function takesDirection(direction: string): any {
  if (direction === "Up") return `You moved ${Direction.Up}`;
  else if (direction === "Down") return `You moved ${Direction.Down}`;
  else if (direction === "Left") return `You moved ${Direction.Left}`;
  else if (direction === "Right") return `You moved ${Direction.Right}`;
}

console.log(takesDirection("Up"));
console.log(takesDirection("Down"));
