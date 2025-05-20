export function sum(a, b) {
  return a + b;
}

export function capitalize(str) {
   let capital = str.split("");
   capital[0] = capital[0].toUpperCase();
   let newStr = capital.join("");
   return newStr
}

export function reverseString(str) {
    let stringArr = str.split("");
    let emptyArr = []
    for(let i=0;i<stringArr.length;i++) {
    emptyArr.unshift(stringArr[i])
    }
    let stringRev = emptyArr.join("")
    return stringRev
}

export const calculator = (()=> {

  const add = (a, b)=> {
  return a+b;
  }

  const subtract = (a,b)=> {
    return a-b;
  }

  const multiply = (a,b) => {
    return a*b;
  }

  const divide = (a,b)=> {
    return a/b;
  }

  return {add, subtract, multiply, divide}
})();

export function caesarCipher (string, shiftFactor) {

   let alphabet ="abcdefghijklmnopqrstuvwxyz".split("");
   let alphabetUpper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   let stringSplit = string.split("");
   let alphabetIndex = []

   for(let i=0;i<string.length;i++) {
    let cipheredLetter;

    if (alphabet.includes(stringSplit[i])) {
      let letterAsNumber = parseInt(alphabet.indexOf(stringSplit[i]))+shiftFactor;
      if (letterAsNumber>26) {
        letterAsNumber=letterAsNumber-26
      }
    cipheredLetter = alphabet[letterAsNumber]
    } else if (alphabetUpper.includes(stringSplit[i])) {
      let letterAsNumber = parseInt(alphabetUpper.indexOf(stringSplit[i]))+shiftFactor;
      if (letterAsNumber>26) {
        letterAsNumber=letterAsNumber-26
      }
    cipheredLetter = alphabetUpper[letterAsNumber]
    } else {
      cipheredLetter = stringSplit[i]
    }

    alphabetIndex.push(cipheredLetter)
   }

   alphabetIndex=alphabetIndex.join("");

   return alphabetIndex
}

console.log(caesarCipher("aVHc", 15))