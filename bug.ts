function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will work fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return i; //Error: i is not defined
}

printNumbers2(10);