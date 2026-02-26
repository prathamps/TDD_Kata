export const add = (input_string: string) => {
    if(input_string.length > 0) {
        let sum=0;
        if(input_string.includes(",")) {
            const num_parts = input_string.split(",")
            num_parts.map((num)=>{
                sum+=parseInt(num);
            })
            return sum;
        }

        return Number.parseInt(input_string);
    }

    return 0;
}