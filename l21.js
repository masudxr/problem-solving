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

    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    if (list1.val < list2.val) {
        head = new ListNode(list1.val);
        temp = head;
        list1 = list1.next;
    } else {
        head = new ListNode(list2.val);
        temp = head;
        list2 = list2.next;
    }

    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = new ListNode(list1.val);
            list1 = list1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(list2.val);
            list2 = list2.next;
            temp = temp.next;
        };
    }

    while (list1) {
        temp.next = new ListNode(list1.val);
        list1 = list1.next;
        temp = temp.next;
    };
    while (list2) {
        temp.next = new ListNode(list2.val);
        list2 = list2.next;
        temp = temp.next;
    }
    return head;
};

// let list1 = new ListNode(1, new ListNode(3, new ListNode(9)));
// let list2 = null;

let list1 = new ListNode(1,null);
let list2 = new ListNode(2, new ListNode(7, new ListNode(10)));

let merge = mergeTwoLists(list1, list2);
console.log(JSON.stringify(merge, " ", 2));