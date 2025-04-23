class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
    }

    insert(value){
        const node= new Node(value);
        if(this.head===null){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        
    }

    print(){
        let current = this.head;
        let res="";
        while(current!==null){
            res += current.value + "=>";
            current = current.next;
        }
        console.log(res + "null");
    }

    delete(value){
        if(this.head===null){
            return;
        }
        if(this.head.value === value){
                this.head = this.head.next;
        }
        
        let current = this.head;
        while(current.next && current.next.value !== value){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
        }
    }
}

const list = new linkedList();

list.insert(2);
list.insert(4);
list.insert(5);
list.delete(5);
list.print();

// 1: Remove by index
// 2: Set Node
// 3: Reverse LinkedList
// 4: Get Node by index