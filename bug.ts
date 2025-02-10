function combineStrings(str1: string, str2: string): string {
  return str1 + str2;
}

const result = combineStrings(123, "hello"); //Error: Argument of type 'number' is not assignable to parameter of type 'string'.