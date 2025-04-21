function countOccur(arr, n){
    let count =0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]===n){
            count++;
        }
    }
    return count;
}

let arr= [1,2,3,4,5,5,6];
console.log(countOccur(arr,5));
