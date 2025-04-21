class Book{
    constructor(bookID, title, author){
        this.bookID=bookID;
        this.title=title;
        this.author=author;
    }
}

class library{
    add(b){
        books.push(b);
    }
    remove(){
        console.log("remove book");
    }
    issue(){
        console.log("book is issued");
    }
}

class user{
    constructor(memID, name, rollno){
        this.memID= memID;
        this.name=name;
        this.rollno= rollno;
    }
    issuedBooks(){
        console.log("books issued to user");
    }
}

class transaction{
    constructor(transID, bookID, memID, issueDate, dueDate, returnDate, fine){
        this.transID=transID;
        this.bookID=bookID;
        this.memID=memID;
        this.issueDate=issueDate;
        this.dueDate=dueDate;
        this.returnDate=returnDate;
        this.fine=fine;
    }
}

const r= new librarian();
r.add(new Book("123","javascript","XYZ"));