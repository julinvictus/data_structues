class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }
    // add items to the head
    addToHead(value) {
        return this.addToSpecificIndex(0, value);
        // const newNode = { value }; // 1
        // // next is pointing to whatever the head is pointing at:
        // newNode.next = this.head;  // 2 
        // this.head = newNode;       // 3
        // this.length++;
        // return this;
    }
    addToTail(value){
        return this.addToSpecificIndex(this.length, value);
        // const newNode = { value };  //a
        // if (this.head == null) {
        //     this.head = newNode;
        // } 
        // else {
        //     let currentNode = this.head
        //     // while currentNode.next is not null
        //     while (currentNode.next){ 
        //         // hop from node to node
        //         currentNode = currentNode.next; 
        //     }
        //     // end of the list
        //     currentNode.next = newNode
        // }
        // this.length++;
        // return this;
    }
    addToSpecificIndex (index, value){
        const newNode = { value }; 
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if (index === 0) {
            this.head = newNode;
            newNode.next = currentNode;
        } else {
            while (currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = newNode;
            newNode.next = currentNode;
            
        }
        this.length++;
        // return currentNode.value
        return this;
    }
}
// const list = new LinkedList('first')
//     .addToHead('second')
//     .addToHead('third');

// const letters = new LinkedList('a')
//     .addToTail('b')
//     .addToTail('c')

// const myName = new LinkedList('j')
//     .addToTail('u')
//     .addToTail('i')
//     .addToSpecificIndex(2, 'l')

//const singleElementList = new LinkedList('oi')

// console.log("Adding to the head:")
// console.log(JSON.stringify(list, null, 2));
// console.log("-------------------")
// console.log("Adding to the tail:")
// console.log(JSON.stringify(letters, null, 2));
// console.log("-------------------")
// console.log("Adding to specific index:")
// console.log(JSON.stringify(myName, null, 2));

//console.log(singleElementList)

// refactor addToHead and addToTail and use addToSpecificIndex in it
// write test (jest)
// what the applications for linked l? when do we want to use them?
// Differences array and linked l?

module.exports = LinkedList;