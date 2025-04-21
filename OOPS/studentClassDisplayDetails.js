class student {
    constructor(name, age, rollno){
        this.name=name;
        this.age= age;
        this.rollno= rollno;
    }
    display(){
        console.log(`Name is: ${this.name}, age is: ${this.age} and rollno is: ${this.rollno}`);
        
    }

}

const s= new student("priyanshi",20,76);
s.display();