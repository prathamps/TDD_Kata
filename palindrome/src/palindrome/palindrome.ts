export const isPalindrome = (value: string): boolean => {
if(value.length <= 1) return true;
return value[0] === value[1];
}