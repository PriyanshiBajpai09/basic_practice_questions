function arrayOutOfBound(arr,i){
    try{
        if(arr[i]===undefined){
            throw new Error("out of bounds");
        }
        console.log((arr[i]));
    }
    catch(err){
        console.log(err.message);        
    }
    
}

arrayOutOfBound([1,2,3,4,5],2);
