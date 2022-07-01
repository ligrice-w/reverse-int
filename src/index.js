module.exports = function reverse(number) {
    result = 0;
    number = Math.abs(number);
    while (number > 0) {
        result = result * 10 + (number % 10);
        number = Math.trunc(number / 10);
    }
    return result;
};
