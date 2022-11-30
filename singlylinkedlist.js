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
        this.lastNode = node;
        // console.log('this.Node.next: ', this.lastNode);
    }
    print() {
        let node = this.head;
        // let nodelist;
        // console.log('Nodelist5: ', node.val);

        while (node) {
            // nodelist = node.val;
            console.log('Nodelist55: ', node.val);
            //node.val ++;
            node = node.next;
            // console.log('Nodelist: ', nodelist);
        }
    }
}
const list = new LinkedList();
list.add(9);
list.add(8);
list.add(7);
list.print()
console.log(JSON.stringify(list, " ", 2));