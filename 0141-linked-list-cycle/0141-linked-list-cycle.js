/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Have 2 pointers, fast and slow, while fast reaches the end, move fast by 2 and slow by 1, if fast and slow are same at any iteration, the loop is detected(Q: How can we compare a non primitive like that)
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow == fast)
            return true;
    }
    
    
    return false;
};