function divide(a,b){
    try{
        if(b===0){
            throw new Error("cannot divide")
        }
        
    }
    catch(error){
        console.log(error.message);
        
    }
}

divide(10,0);