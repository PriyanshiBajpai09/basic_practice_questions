function convert(str){
    let ans="";
    for(let i=0; i<str.length; i++){
    let c= str.charCodeAt(i);
    let ch=str.charAt(i);
    if(c>=97 && c<=122){
        ans+= ch.toUpperCase();
    }
    else if (c>=65 && c<=90){
        ans+= ch.toLowerCase();
    } else{
        ans+= ch;
    }
    }
    return ans;
}

console.log(convert("hello WORLD"));
