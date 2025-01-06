# Uncommon TypeScript Error: 'i' is not defined in return statement after for loop

This repository demonstrates a common yet easily overlooked TypeScript error: attempting to use a variable declared within a `for` loop's scope in a return statement outside the loop.  This often happens when developers are accustomed to other languages where variable scope might be less strict.

The `bug.ts` file shows the erroneous code, while `bugSolution.ts` provides a corrected version.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts` in a TypeScript compiler.
3. Observe the compiler error.

## Solution

The solution involves understanding variable scope.  The variable 'i' is only accessible within the `for` loop. To fix this, move the return statement inside the loop or declare and use the variable in the appropriate scope.  The `bugSolution.ts` file demonstrates the correct approach.