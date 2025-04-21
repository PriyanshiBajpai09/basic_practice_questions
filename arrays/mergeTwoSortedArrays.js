function mergeArrays(arr1, arr2){
    let arr=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        }else{
            arr.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        arr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        arr.push(arr2[j]);
        j++;
    }
    return arr;    
}

let arr1=[1,3,5,7,9,10];
let arr2=[2,4,6,7,8];

console.log(mergeArrays(arr1,arr2));

// function mergeArrays(arr1, arr2){
//     let arr=[];
//     let n=arr1.length+ arr2.length;
//     let i=0;
//     let j=0;
//     while(n>=0){
//         if(arr1[i] < arr2[j]){
//             arr.push(arr1[i]);
//             i++;
//         }
//         else if(arr1[i] === arr2[j]){
//             arr.push(arr1[i],arr2[j]);
//             i++;
//             j++;
//         }
//         else{
//             arr.push(arr2[j]);
//             j++;
//         }
//         n--;
//     }

//     return arr;
// }

// let arr1= [1,3,5,7,9];
// let arr2= [2,4,6,8];
// console.log(mergeArrays(arr1,arr2));
