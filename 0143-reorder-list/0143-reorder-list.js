/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    // Approach -> Use 2 pointers fast, slow 
    // slow reaches mid when fast reaches end 
    
    let fast = head;
    let slow = head;
    
    while(fast && fast.next){
        fast = fast.next.next; 
        slow = slow.next;
    }
    
    // Reverse Second half of the list 
    
    let prev = null;
    let curr = slow;

    while(curr){
        let nextRef = curr.next;
        curr.next = prev
        prev = curr;
        curr = nextRef;
    }
    
    let firstPart = head;
    let secondPart = prev;
    
    while(firstPart && secondPart){
        let firstNextRef = firstPart.next;
        firstPart.next = secondPart;
        let secondNextRef = secondPart.next;
        secondPart.next = firstNextRef;
        secondPart = secondNextRef;
        firstPart = firstNextRef;
        
        if(firstPart && !secondPart){
            firstPart.next = null;
        }
        
    }
    
    
};


