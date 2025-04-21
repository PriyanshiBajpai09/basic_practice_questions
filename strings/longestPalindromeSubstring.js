function longestSubstrings(str){
    let longestPal ="";
    for(let i=0; i<str.length; i++){
        let ans="";
        for(let j=i; j<str.length; j++){
            ans+=str.charAt(j);
            if(reverse(ans)){
                if(ans.length > longestPal.length){
                    longestPal= ans;
                }
            }
        }
    }
    return longestPal;
}
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

console.log(longestSubstrings("babad"));