function removeDuplicate(str){
    let ans="";
    for(let i=0; i<str.length; i++){
        let exists=false;

        for(let j=0; j<ans.length; j++){
            if(str[i]=== ans[j]){
                exists =true;
                break;
            }
        }   
        if(!exists){
            ans+=str[i];
        }
    }
    return ans;
}


console.log(removeDuplicate("address"));
