function combineStrings(str1: string, str2: string): string {
  return str1 + str2;
}

const result1 = combineStrings("123", "hello"); //Correct: Both arguments are strings

const num1 = 123;
const strNum1 = num1.toString();
const result2 = combineStrings(strNum1, "hello");//Correct: Number converted to string

const result3 = combineStrings(String(123),"hello");//Correct: Number converted to string using String() function

//Type assertion (use with caution)
const result4 = combineStrings(123 as unknown as string, "hello"); //Correct but might mask underlying issues.