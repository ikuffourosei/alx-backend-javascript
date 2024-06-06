# LOCKBOXES
You have n number of locked boxes in front of you. Each box is numbered sequentially from 0 to n - 1 and each box may contain keys to the other boxes.

Write a method that determines if all the boxes can be opened.

- \t Prototype: def canUnlockAll(boxes)
- \t boxes is a list of lists
- \t A key with the same number as a box opens that box
- \t You can assume all keys will be positive integers
- \t There can be keys that do not have boxes
- \t The first box boxes[0] is unlocked
- \t Return True if all boxes can be opened, else return False

# Concepts Needed:

##    Lists and List Manipulation:
        Understanding how to work with lists, including accessing elements, iterating over lists, and modifying lists dynamically.
        Python Lists (Python Official Documentation)

##    Graph Theory Basics:
        Although not explicitly required, knowledge of graph theory (especially concepts related to traversal algorithms like Depth-First Search or Breadth-First Search) can be very helpful in solving this problem, as the boxes and keys can be thought of as nodes and edges in a graph.
        Graph Theory (Khan Academy)

##    Algorithmic Complexity:
        Understanding the time and space complexity of your solution is important, as it can help in writing more efficient algorithms.
        Big O Notation (GeeksforGeeks)

##    Recursion:
        Some solutions might require a recursive approach to traverse through the boxes and keys.
        Recursion in Python (Real Python)

##    Queue and Stack:
        Knowing how to use queues and stacks is crucial if implementing a breadth-first search (BFS) or depth-first search (DFS) algorithm to traverse through the keys and boxes.
        Python Queue and Stack (GeeksforGeeks)

##    Set Operations:
        Understanding how to use sets for keeping track of visited boxes and available keys can optimize the search process.
        Python Sets (Python Official Documentation)
