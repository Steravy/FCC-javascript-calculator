// const sanitizeDecimal = (number: string): string => {
//     // Initialize a sanitized number string.
//     let sanitizedNumber = "";

//     // Loop through the characters in the input number.
//     for (const character of number) {
//         // If the character is not a decimal point, add it to the sanitized number.
//         if (character !== ".") {
//             sanitizedNumber += character;
//         }
//         // If the character is a decimal point, and there is not already a decimal point in the sanitized number, add it.
//         else if (sanitizedNumber.indexOf(".") === -1) {
//             sanitizedNumber += character;
//         }
//     }

//     // Return the sanitized number.
//     return sanitizedNumber;
// }


const sanitizeDecimal = (expression: string): string => {
    // Regular expression to match numbers with multiple decimal points
    const multipleDotsPattern = /(\d*\.\d*)\./g;

    // Replace any occurrence of multiple dots in a number with a single dot
    const sanitizedExpression = expression.replace(multipleDotsPattern, "$1");

    return sanitizedExpression;
};



export default sanitizeDecimal;