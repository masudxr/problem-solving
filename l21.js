// Merge Two Sorted Lists

class ListNode {
    constructor(value, next = null) {
        this.val = value;
        this.next = next;
    }
}
var mergeTwoLists = function (list1, list2) {

    let head = null;
    let temp = head;


    if (list1.val < list2.val) {
       temp = head = new ListNode(list1.val);
        list1 = list1.next;
        // console.log('list1.val:', list1);
    } else {
        temp = head = new ListNode(list2.val);
        list2 = list2.next;
        // console.log('list2.val:', list2);

    }
    // console.log('Head first one:', head);
    // console.log('list2.val:', list2);


    while (list1.next != null  || list2.next !=null) {

        if (list1.val < list2.val) {
            console.log('list1.val if condition:', list1);
            console.log('Head next inside if condition:', temp.next);

            temp.next = new ListNode(list1.val);
            console.log('Head next inside if condition2:', temp.next);
            console.log('Head inside if condition2222:', temp);
            list1 = list1.next;
            temp = temp.next;

        } else {
            console.log('list2.val else condition:', list2);
            console.log('Head next inside else condition:', temp.next);
            temp.next = new ListNode(list2.val);
            console.log('Head next inside else condition2:', temp.next);
            console.log('Head inside else condition2222:', temp);
            list2 = list2.next;
            temp = temp.next;
            // console.log('Head inside else condition:', head);
        }
    }

    console.log('Head final one:', head);

    return head;

};

let list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let list2 = new ListNode(2, new ListNode(4, new ListNode(8)));

let merge = mergeTwoLists(list1, list2);
console.log('return value: ', merge);
