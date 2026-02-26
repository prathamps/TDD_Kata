export const add = (input_string: string) => {
    if(input_string.length > 0) {
        let sum=0;
        let separator = ","
        let new_string = input_string;
        if(input_string.startsWith("//")){
            separator = input_string[2]
            new_string = input_string.slice(4);
            console.log(new_string);

        }
        if(new_string.includes(separator) || new_string.includes("\n")) {
            const delimiter = new RegExp(`[${separator}|\n]`)
            const num_parts = new_string.split(delimiter)
            console.log(num_parts);
            for(let i = 0 ; i < num_parts.length; i++){
                 if(parseInt(num_parts[i]) < 0){
                     throw new Error(`Invalid number: ${num_parts[i]}`);
                 }
                 sum+=parseInt(num_parts[i]);
            }
            return sum;
        }

        return Number.parseInt(input_string);
    }

    return 0;
}