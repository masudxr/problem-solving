class Node {
    val
    next
    constructor(val, next = null) {
        this.val = val;
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.lastNode;
        this.length =0;
    }
    add(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            // console.log('this.lastNode: ', this.lastNode)
        }
        else {
            this.lastNode.next = node;
            // console.log('this.lastNode.next: ', this.lastNode)
        }
        // this.lastNode = node;

        // Find out the 
        if (node) {
            this.length = this.length + 1;
            this.lastNode = node;
            console.log('this.lastNode.next: ', this.lastNode)
            
            console.log(' Count :', this.length);
        }

    }
    // Print all node values 
    // print() {
    //     let node = this.head;
    //     while (node) {
    //         console.log('Nodelist: ', node.val);
    //         node = node.next;
    //     }
    // }

    // console length of the node //
    // length() {
    //     let node = this.head;
    //     let count = 0;
    //     while (node) {
    //         count = count +1;
    //         node = node.next;
    //     }
    //     console.log('Node Count: ', count);
    // }
}
const list = new LinkedList();
list.add(9);
list.add(8);
list.add(7);
// list.print()
// list.length()
console.log(JSON.stringify(list, " ", 2));