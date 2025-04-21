function stringLength(str) {
    try {
        if (str === null || str === undefined) {
            throw new Error("not defined");
        }
        console.log(str.length);
    }
    catch(err){
        console.log(err.message);
    }
}

stringLength("hello");
stringLength(null);