"use strict";

const getAverage = scores => {
    let total = 0;

    for (let score of scores) {
        total += score;
    }

    return total / scores.length;
};

const userEntry = prompt(
    "Enter test scores separated by commas."
);

if (!userEntry) {
    alert("No scores were entered.");
}
else {

    const scores = userEntry.split(",");

    const scoreNumbers = scores.map(
        score => Number(score)
    );

    const lowScore = Math.min(
        ...scoreNumbers
    );

    const highScore = Math.max(
        ...scoreNumbers
    );

    const average =
        getAverage(scoreNumbers);

    alert(
        "Scores: " +
        scoreNumbers.join(", ") +
        "\nLow score = " +
        lowScore +
        "\nHigh score = " +
        highScore +
        "\nAverage score = " +
        average.toFixed(1)
    );
}