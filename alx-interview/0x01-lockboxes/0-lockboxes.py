#!/usr/bin/python3
'''Lockboxes'''


def canUnlockAll(boxes):
    """A method that checks if all boxes can be unlocked
    Arg: 
        boxes (2D List)
    Return: Boolean 
        True if yes
        False if Otherwise
    """
    n = len(boxes)
    visited_boxes = []
    result = ''


def loop(boxes, total):
    container = set()
    for i in range(total - 1):
        for j in range(1, total - 1):
            if boxes[i][j] == boxes[j].index():
                container.add(True)

def recursive(box):
    n = 0
    if n == len(box):
        return
    for items in box:
        for keys in items:
