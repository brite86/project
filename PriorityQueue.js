import fentravAPI from "../api/fentravAPI";
export default class PriorityQueue {
    constructor(){
        this.items = []
    }

    enque(element, priority){
       // this.items.push(element);
       const item = {element, priority};

       let added = false;

       for(let i=0 ; i<this.items.lenght; i++){
        if(item.priority<this.items[i].priority){
            this.items.splice(i,0,item);
            added = true;
            break;
        }
       }
       if(!added){
        this.items.push(item);
       }
    }
    deque(){
        if(!this.isEmpty()){
            return this.items.shift(); 
        }
        else{
            return null;
        }
    }
    peak(){
        if(!this.isEmpty()){
            return this.items.shift[0]; 
        }
        else{
            return null; 
    }
}
isEmpty(){
    return this.items.lenght == 0;
}
clear(){
    this.items = []
}
printQueue(){
    return this.items.toString();
}

sizeOfQueue(){
    return this.items.lenght;
}



    let myqueue = new PriorityQueue();

myqueue.enque(Todo, 3);
myqueue.enque(Inprogress, 1)
myqueue.enque(Done, 2)


console.log(myqueue.printQueue());