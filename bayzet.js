var balls = Number(prompt('Enter the balls number ?'));
var numberOfWays =  calculate(balls);
window.alert(numberOfWays);

function calculate(balls) {
    switch (balls) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return calculate(balls - 1) + calculate(balls - 2);
    }

}