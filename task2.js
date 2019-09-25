"use strict";

function checkSyntax(string) {
  const brackets = {
    '<': '>',
    '[': ']',
    '{': '}',
    '(': ')',
  };
  const stack = [];

  for(let i = 0; i < string.length; i++) {
    if (Object.keys(brackets).includes(string[i])) {
      stack.push(string[i]);
    } else if (Object.values(brackets).includes(string[i])) {
      if (string[i] === brackets[stack[stack.length - 1]]) {
        stack.length--
      } else {
        return 1
      }
    }
  }
  return 0
}
console.log('---(++++)----', checkSyntax("---(++++)----") === 0);
console.log('""', checkSyntax("") === 0);
console.log("before ( middle []) after ", checkSyntax("before ( middle []) after ") === 0);
console.log(") (", checkSyntax(") (") === 0);
console.log("<(   >)", checkSyntax("<(   >)") === 0);
console.log("(  [  <>  ()  ]  <>  )", checkSyntax("(  [  <>  ()  ]  <>  )") === 0);
console.log("   (      [)", checkSyntax("   (      [)") === 0);

function testTask2() {
  const inputValue = document.getElementById('inputTask2').value;
  const span = document.getElementById('resultTask2');

  if (!inputValue) return null;
  span.textContent = checkSyntax(inputValue) === 0 ? 'Tests passed' : "Test failed";
}

