// function reverse(arr){
//     let rev= [];
//     for(let i= arr.length-1; i>=0; i--){
//         rev.push(arr[i]);
//     }
//     return rev;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(reverse(arr));

function reverse(arr){
    let start = 0;
    let end = arr.length-1;

    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

arr = [1,2,3,4,5]

console.log(reverse(arr));