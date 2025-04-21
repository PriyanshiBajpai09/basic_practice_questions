function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let ifAnagram = true;
    for(let i=0; i<str1.length; i++){
        let current= str1.charAt[i];
        for(let j=0; j<str2.length; j++){
            if(str2.charAt[j] !== current){
                return false;
            }
        }

    }
    return ifAnagram;
}

console.log(isAnagram("silent","listened"));
