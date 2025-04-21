// class car{
//     music(){
//         console.log("playing music");
//     }
// }

// class thar extends car {
//     music(){
//         console.log("stopped music");
//     }
// }

// const c= new car();
// c.music(); 

// const t = new thar();
// t.music(); //method overriding


//overloading

class car {
    music(genre, volume) {
        if (volume === undefined) {
            console.log(`playing ${genre} music`);
        } else {
            console.log(`playing ${genre} music at ${volume}`);
        }
}
}

const c= new car();
c.music("punjabi");
c.music("lofi",20);
