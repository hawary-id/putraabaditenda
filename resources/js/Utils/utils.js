export const formatNumber = (number) => {
    const numberString = number.toString();
    const formattedNumber = parseFloat(numberString).toLocaleString('en-US');
    return formattedNumber;
};