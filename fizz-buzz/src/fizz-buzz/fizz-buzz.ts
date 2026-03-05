export const fizzBuzz = (value: number): string =>{
    if(value % 3 ===0  && value % 5 ===0) return "fizzBuzz";
    if(value % 5 === 0) return "buzz"
    if(value % 3 === 0) return "fizz";
    return value.toString()
}

// First Cycle:
// Red: should return number as string
//      You must write a failing test before you write any production code.
//      You must not write more of a test than is sufficient to fail, or fail to compile.
// Green: returns a number as string
//      You must not write more production code than is sufficient to make the currently failing test pass
// Refactor: returns a number as string


// Second Cycle:
// Red: returns 'fizz' for a number multiple of 3
// Green: returns fizz for the number multiple of 3.
// Refactor: returns fizz for the multiple of 3.


// Third Cycle:
// Red: return 'buzz' for a number multiple of 5
// Green: return 'buzz' for a number multiple of 5
// Refactor: return 'buzz' for a number multiple of 5


// Fourth Cycle
// Red: return 'fizzBuzz' for a number multiple of 5 and 3
// Green: return 'fizzBuzz' for a number multiple of 5 and 3
// Refactor: return 'fizzBuzz' for a number multiple of 5 and 3