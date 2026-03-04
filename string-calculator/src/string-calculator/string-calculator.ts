function extractedSeparatorAndNewString(input_string: string, separator: string, new_string: string) {
    if (input_string.startsWith("//")) {
        let index = 2;
        separator = input_string[index];

        if (separator == "[") {
            index++;
            separator = "";
            while (new_string.charAt(index) != "]") {
                separator += new_string.charAt(index);
                index++;
            }
        }
        new_string = input_string.slice(index + 1);

    }
    return {separator, new_string};
}

export const add = (input_string: string) => {
    if (input_string.length === 0) {
        return 0;
    }

    let sum = 0;
    let separator = ","
    let new_string = input_string;
    const separatorAndNewString = extractedSeparatorAndNewString(input_string, separator, new_string);
    separator = separatorAndNewString.separator;
    new_string = separatorAndNewString.new_string

    if (new_string.includes(separator) || new_string.includes("\n")) {
        const delimiter = new RegExp(`[${separator}|\n]`)
        const num_parts = new_string.split(delimiter)
        for (let i = 0; i < num_parts.length; i++) {
            if (parseInt(num_parts[i]) < 0) {
                throw new Error(`Invalid number: ${num_parts[i]}`);
            }
            if (parseInt(num_parts[i]) < 1000) {
                sum += parseInt(num_parts[i]);
            }
        }
        return sum;
    }

    return Number.parseInt(input_string);
}