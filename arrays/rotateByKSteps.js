function rotate(arr,k){
    let ans= [];
    let n= arr.length;
    k=k%n;
    for(let i=n-k;i<n; i++){
        ans.push(arr[i]);
    }
    for(let i=0; i<n-k; i++){
        ans.push(arr[i]);
    }
    return ans;
}

let arr= [1,2,3,4,5];
console.log(rotate(arr,2));