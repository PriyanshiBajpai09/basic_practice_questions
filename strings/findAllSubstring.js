function findSubstrings(str){
    for(let i=0; i<str.length; i++){
        let ans="";
        for(let j=i; j<str.length; j++){
            ans+=str.charAt(j);
            console.log(ans);
        }
    }
}

findSubstrings("hello");