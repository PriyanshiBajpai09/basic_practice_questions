// class Animal {
//     constructor() {
//         if(new.target===Animal){
//             throw new Error ("not instantiated");
//         }
//     }
//     sound(){
//         console.log("can instantiated");
//     }
// }

// class cow extends Animal{
//     speaks(){
//         console.log("moo");
//     }
// }

// const c = new cow();
// c.sound();
// const s = new Animal();


//interface
class cat{
    sound(){
        console.log("meow");
    }
    walk(){
        console.log("slow");
    }
}

class dog{
    sound(){
        console.log("bark");
    }
    run(){
        console.log("fast");
    }
}

function checkInterface(obj,methods){
    for(let method of methods){
        if(typeof obj[method] === "function"){
            console.log("interface");
        }
    }
}

const d= new dog();
checkInterface(d, ['sound','run']);