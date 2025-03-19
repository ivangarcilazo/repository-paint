export const roundThousand = (n) => {
    const numberParts = n.toFixed().toString().split('');
    const removedLastNumber = numberParts.map((char, i) => {
        if (i == numberParts.length - 2 || i == numberParts.length - 1) {
            return '0';
        }
        return char;
    }).join('');

    return parseInt(removedLastNumber);
}