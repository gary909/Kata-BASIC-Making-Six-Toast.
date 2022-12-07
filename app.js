function sixToast(num) {
    let mySum = num - 6;
    if (mySum < 0) {
        return Math.abs(mySum);
    } else {
        return mySum;
    }
}

console.log(sixToast(6)); // 0
console.log(sixToast(17)); // 11
console.log(sixToast(3)); // 3