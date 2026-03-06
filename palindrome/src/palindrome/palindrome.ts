export const isPalindrome = (value: string): boolean => {
    if(value.length <= 1) return true;
    const modified_string = value.trim().toLowerCase().split("").reverse().join("")
    const string = value.trim().toLowerCase()
    return modified_string === string;
}