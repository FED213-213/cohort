let score = [20, 40, 40, 60];

console.log(score)
score = [ 45.99, 50.3]

console.log(score)

function calaculateAverage (score) {
    let total = 0;
    for ( let i = 0; i < score.length; i++)
    {
        total = total + score[i];
    }
    return total / score.length;
}
console.log(calaculateAverage(score));