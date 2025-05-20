import { capitalize, reverseString, calculator, caesarCipher } from "./index.js";

test('takes a string and returns first letter capitalized', () => {
  expect(capitalize("my string")).toBe("My string");
});

test('takes a string and reverses it', () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test('a calculator with add, subtract, divide and multiply', () => {
  expect(calculator.add(1,3)).toBe(4);
  expect(calculator.subtract(2,1)).toBe(1);
  expect(calculator.multiply(4,2)).toBe(8);
  expect(calculator.divide(10,2)).toBe(5)
});

test('convert a string using a Caeser cipher', ()=> {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})