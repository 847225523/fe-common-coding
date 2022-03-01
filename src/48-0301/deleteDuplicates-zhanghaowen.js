/**
 * 83. 删除排序链表中的重复元素
    给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

    

    示例 1：


    输入：head = [1,1,2]
    输出：[1,2]
    示例 2：


    输入：head = [1,1,2,3,3]
    输出：[1,2,3]
    

    提示：

    链表中节点数目在范围 [0, 300] 内
    -100 <= Node.val <= 100
    题目数据保证链表已经按升序 排列
 */

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
/**
    注意个细节，并不需要遍历最后一个节点，最后一个节点的next.val不存在，只要next存在就行，
    */
var deleteDuplicates = function (head) {
  if (!head) return head;
  let cur = head; //cur是指针，
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
