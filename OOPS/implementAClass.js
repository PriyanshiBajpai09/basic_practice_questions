//without using constructor
class car{
    color= "";
    auto= undefined;

    music(){
        console.log("it has a music system");
    }
}

const toyota = new car();
toyota.color="black";
toyota.music();
toyota.auto= false;
console.log(toyota.auto);
console.log(toyota.color);

//using constructor

class box{
    constructor(size,color){
        this.size=size;
        this.color= color;
    }
    detail(){
        console.log(`size of box is ${this.size} and color is ${this.color}`);
    }
}

const b = new box("30","red");
b.detail();
