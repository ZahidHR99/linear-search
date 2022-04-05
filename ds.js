class Stack{
    constructor(){
        this.stack = []
    }
    add(element){
        this.stack.push(element)
    }
    remove(){
        return this.stack.pop();
    }
}
  
const plates = new Stack();

plates.add('A');
plates.add('B');
plates.add('C');
plates.add('D');
plates.add('E');

console.log(plates.stack);

plates.remove();

console.log(plates.stack);