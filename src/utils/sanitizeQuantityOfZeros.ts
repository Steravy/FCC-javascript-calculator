function sanitizeQuantityOfZeros(number: string): string {
    // Initialize a sanitized number string.
    let sanitizedNumber = "";

    // Loop through the characters in the input number.
    for (const character of number) {
        // If the character is not a zero, add it to the sanitized number.
        if (character !== "0") {
            sanitizedNumber += character;
        }
        // If the character is a zero and there is already a zero in the sanitized number, do nothing.
        else if (sanitizedNumber.indexOf("0") !== -1) {
            // Do nothing.
        }
        // If the character is a zero and there is not already a zero in the sanitized number, add it.
        else {
            sanitizedNumber += character;
        }
    }

    // If the sanitized number is a decimal number, and the first character is a zero, remove it.
    if (sanitizedNumber.indexOf(".") !== -1 && sanitizedNumber[0] === "0") {
        sanitizedNumber = sanitizedNumber.slice(1);
    }

    // If the sanitized number is a decimal number, and there is a zero before the decimal point, keep it.
    sanitizedNumber = sanitizedNumber.replace(/0+(?=\.)/, "0");

    // Return the sanitized number.
    return sanitizedNumber;
}

export default sanitizeQuantityOfZeros;