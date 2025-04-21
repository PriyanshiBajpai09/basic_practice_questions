function reverse(str){
    let start = 0;
    let end = str.length-1; 
    let isPalindrom = true;

    while(start<end){
        if(str.charAt(start)!==str.charAt(end)){
            isPalindrom = false;
        }
        start++;
        end--;
    }
    return isPalindrom;

}

let str ='ada';
          

console.log(reverse(str));