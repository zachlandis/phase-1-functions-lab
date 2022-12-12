// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    const aboveHq = num - 42;
    const absHq = Math.abs(aboveHq);

    return absHq;
}

function distanceFromHqInFeet(num) {
    const blocks = num - 42;
    const feet = blocks * 264;
    const absFeet = Math.abs(feet)

    return absFeet;
}


function distanceTravelledInFeet(num1, num2) {
    const blocks = num1 - num2;
    const absBlocks = Math.abs(blocks);
    const feet = absBlocks * 264;

    return feet;
}


function calculatesFarePrice(num1, num2) {
    const blocks = num1 - num2;
    const absBlocks = Math.abs(blocks);
    const feet = absBlocks * 264;

    if (feet < 400) {
        return 0;
    } else if (feet >= 400 && feet <= 2000) {
        return (feet - 400) * 0.02;
    } else if (feet >= 2000 && feet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }

}