function isSorted(arr){
    let isascending = true;
    let isdescending = true;
    for (let i =0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            isascending= false;
        }
        if(arr[i]<arr[i+1]){
            isdescending = false;
        }
    }

if(isascending){
    console.log("array is sorted in ascending order");
}
else if(isdescending){
    console.log("array is sorted in descending order");
}else{
    console.log("array is not sorted");
}
}
let arr= [1,3,2,6,5];
console.log(isSorted(arr));
