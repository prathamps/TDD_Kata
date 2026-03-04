export const validatePassword = (value: string) => {
    if(value.length > 9) return true
   return false
}