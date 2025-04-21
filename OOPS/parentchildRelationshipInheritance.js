class parent{
    speak(){
        console.log("speak");
    }
}
class child extends parent {
    sing(){
        console.log("can sing");
    }
}

const c= new child();
c.speak();
c.sing();