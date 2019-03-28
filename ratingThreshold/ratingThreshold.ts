const calculateAverage = numbers => numbers.reduce((a, b) => a + b) / numbers.length;

function ratingThreshold(threshold, ratings) {
    return ratings.reduce((record, ratings, i) => {
        const average = calculateAverage(ratings);
        if (average < threshold) {
            return [...record, i];
        }
        return record;
    }, []);
}

console.log(ratingThreshold(3.5,
    [[3, 4],
    [1],
    [3, 3, 3, 4],
    [4]]));
