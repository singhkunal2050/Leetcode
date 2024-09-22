/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Use prev and curr and keep updating the curr->next to prev, but before that store reference to curr->next 
var reverseList = function(head) {
    let prev = null
    let curr = head; 
    
    
    while(curr !== null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
};