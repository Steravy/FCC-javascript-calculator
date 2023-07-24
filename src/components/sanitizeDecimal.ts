
const sanitizeDecimal = (expression: string): string => {
    // Regular expression to match numbers with multiple decimal points
    const multipleDotsPattern = /(\d*\.\d*)\./g;

    // Replace any occurrence of multiple dots in a number with a single dot
    const sanitizedExpression = expression.replace(multipleDotsPattern, "$1");

    return sanitizedExpression;
};


export default sanitizeDecimal;