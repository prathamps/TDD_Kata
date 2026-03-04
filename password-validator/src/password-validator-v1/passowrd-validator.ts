export const validatePassword = (value: string) => {
    if(value.length <= 8) return false
    if(!(/[A-Z]/.test(value))) return false;
    return true
}