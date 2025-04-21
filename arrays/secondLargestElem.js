function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    let first = arr[0];
    let sec = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > first) {
            sec = first;
            first = arr[i];
        } else if (arr[i] > sec && arr[i] < first) {
            sec = arr[i];
        }
    }
    return sec;
}
let arr = [0, 1, 2, 3, 4, 5];
console.log(secondLargest(arr));