export const isPalindrome = (value: string): boolean => {
    if(value.length <= 1) return true;
    const modified_string = value.trim().toLowerCase().replace(" ", "")
    const reversed_string = modified_string.split("").reverse().join("")
    return modified_string === reversed_string;
}