/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Use a dummy 2 node and compare both the list nodes until we reach to end and keep updating the dummy.next 
// if any of the list exhausts, append the other one to the dummy and return the initial reference to the dummy list
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();;
    let tail = dummy;
    
    while(list1 !== null && list2 !== null) {
        if(list1.val > list2.val){
            tail.next = list2
            list2 = list2.next
        } else {
            tail.next = list1
            list1 = list1.next
        }
        tail = tail.next
    }
    
    if(list1 !== null) {
        tail.next = list1;
    }
    
    if(list2 !== null){
        tail.next = list2;
    }
    
    
    return dummy.next;
    
};