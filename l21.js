// Merge Two Sorted Lists


var mergeTwoLists = function(list1, list2) {
    for (let i=0; i<list2.length; i++){
        list1.push(list2[i]);
    }
    let mid =0;
    let merge =[];
    for (let i=0; i<list1.length; i++){
        for (let j=i+1; j<list1.length; j++){
            if(list1[i] >= list1[j]){
                mid = list1[i];
                list1[i] = list1[j];
                list1[j] = mid;
            }
        }
    }

return list1;
};
let list1 = [1, 2, 4, 7];
let list2 = [1, 3, 6, 9];

let xx = mergeTwoLists(list1, list2);
console.log(xx);