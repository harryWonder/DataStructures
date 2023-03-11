## Singly Linked List

The Singly linked list is a linear representation of data _using nodes with a pointer to the next node_.

![Singly Linked List Image Representation.](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg 'Singly Linked List')

## Uses Of A Linked list

You're probably wondering why yourself or anyone would want to use a singly linked list. Thing is, there are a lot of uses for linked lists such as;

1. Browser Navigations.
2. Music Players.
3. Image Viewers(Next & Previous).
4. Stack & Queues Implementations.

## Time Complexity

The singly linked list has the following time complexities;

| Operation      | Time Complexity |
| -----------          | ----------- |
| Insert               | O(n)        |
| Read                 | O(n)        |
| Update               | O(n)        |
| Delete               | O(n)        |
| Inserting at the end | O(1)        |
| Inserting at the start | O(1)      |

Singly linked lists are particularly good for quick inserts in two positions(**it's head and it's tail**). The reason for common crud operations having O(n) is because often time we need to traverse the list to do some operations such as Insert, Update, & Delete. But no-worries, with the right helper methods, we can achieve O(1) for inserts and deletes.

## Space Complexity

Singly linked lists stores two main pieces of information which are the values, and a pointer to the next node for each of it's nodes. This eventually translates into it's size growing as the number of nodes increases thereby giving it an O(n) space complexity.


So, you're probably wondering, since a linked list is linear, why can't we just use an _array_? so the thing about array's is when you do inserts at some certain position we would end up with an O(1) time complexity. As if that isn't bad enough, every items in the array also gets reindexed.