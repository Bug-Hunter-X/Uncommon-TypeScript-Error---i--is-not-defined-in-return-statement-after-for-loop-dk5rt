function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will work fine

function printNumbers2(n: number): void {
  let finalValue:number;
  for (let i = 1; i <= n; i++) {
    console.log(i);
    finalValue = i; 
  }
  return finalValue; //Corrected: i is now accessible
}

printNumbers2(10);