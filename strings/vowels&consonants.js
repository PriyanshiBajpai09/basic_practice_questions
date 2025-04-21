function countVandC(str) {
    let countV = 0;
    let countC = 0;
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        let c = arr[i];
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            countV++;
        }
        else
        {
            countC++;
    }
}
    return [countC, countV];
}

console.log(countVandC("hello"));
