function missing(arr){
    let n= arr.length+1;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum= sum+arr[i];
    }
    let total= (n*(n+1))/2;
    let res= total-sum;
    return res;
}
let arr= [1,2,3,5,6];
console.log(missing(arr));
