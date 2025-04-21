function countWords(str){
    let count=1;
    for(let i=0; i<str.length; i++){
        if(str.charAt(i)==" "){
            count++;
        }
    }
    return count;
}

console.log(countWords("hello i am priyanshi"));
