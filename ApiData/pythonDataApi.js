const snippetsPython = [
    {
        title: "Binary Search Algorithm",
        description: "Implementation of binary search.",
        code: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1  # Target not found`,
        language: "Python",
        tags: ["binary search", "Binary Search Algorithm", "search", "binary", "algorithm", "divide and conquer", "arrays", "searching algorithms"],
    },
    {
        title: "Linear Search Algorithm",
        description: "Implementation of linear search.",
        code: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1  # Target not found`,
        language: "Python",
        tags: ["linear search", "Linear Search Algorithm", "search", "linear", "algorithm", "brute force", "arrays", "searching algorithms"],
    },
    {
        title: "Preorder Traversal in Trees",
        description: "Preorder traversal of a binary tree.",
        code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def preorder_traversal(root):
    if root:
        print(root.val, end=" ")
        preorder_traversal(root.left)
        preorder_traversal(root.right)`,
        language: "Python",
        tags: ["preorder traversal", "Preorder Traversal in Trees", "tree", "preorder", "traversal", "binary tree", "tree traversal", "recursive algorithms"],
    },
    {
        title: "Inorder Traversal in Trees",
        description: "Inorder traversal of a binary tree.",
        code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val, end=" ")
        inorder_traversal(root.right)`,
        language: "Python",
        tags: ["inorder traversal", "Inorder Traversal in Trees", "tree", "inorder", "traversal", "binary tree", "tree traversal", "recursive algorithms"],
    },
    {
        title: "BFS Traversal in Graphs",
        description: "Breadth First Search traversal of a graph.",
        code: `from collections import deque

def bfs_graph(adj_list, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        node = queue.popleft()
        print(node, end=" ")
        for neighbor in adj_list[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
        language: "Python",
        tags: ["bfs traversal", "BFS Traversal in Graphs", "graph", "bfs", "traversal", "breadth first search", "graphs", "graph traversal", "level order"],
    },
    {
        title: "DFS Traversal in Graphs",
        description: "Depth First Search traversal of a graph.",
        code: `def dfs_graph(adj_list, node, visited):
    visited.add(node)
    print(node, end=" ")

    for neighbor in adj_list[node]:
        if neighbor not in visited:
            dfs_graph(adj_list, neighbor, visited)`,
        language: "Python",
        tags: ["dfs traversal", "DFS Traversal in Graphs", "graph", "dfs", "traversal", "depth first search", "graphs", "graph traversal", "recursive algorithms"],
    },
    {
        title: "Bubble Sort",
        description: "Implementation of bubble sort.",
        code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]`,
        language: "Python",
        tags: ["bubble sort", "Bubble Sort", "sorting", "bubble", "algorithm", "brute force", "arrays", "comparison sorting"],
    },
    {
        title: "Selection Sort",
        description: "Implementation of selection sort.",
        code: `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i+1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]`,
        language: "Python",
        tags: ["selection sort", "Selection Sort", "sorting", "selection", "algorithm", "arrays", "comparison sorting"],
    },
    {
        title: "Insertion Sort",
        description: "Implementation of insertion sort.",
        code: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key`,
        language: "Python",
        tags: ["insertion sort", "Insertion Sort", "sorting", "insertion", "algorithm", "arrays", "comparison sorting"],
    },
    {
        title: "Merge Sort",
        description: "Implementation of merge sort.",
        code: `def merge(arr, left, mid, right):
    n1 = mid - left + 1
    n2 = right - mid
    L = arr[left:left+n1]
    R = arr[mid+1:mid+1+n2]

    i = j = k = 0
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1

    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

def merge_sort(arr, left, right):
    if left < right:
        mid = (left + right) // 2
        merge_sort(arr, left, mid)
        merge_sort(arr, mid+1, right)
        merge(arr, left, mid, right)`,
        language: "Python",
        tags: ["merge sort", "Merge Sort", "sorting", "merge", "algorithm", "divide and conquer", "arrays"],
    },
    {
        title: "Quick Sort",
        description: "Implementation of quick sort.",
        code: `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)`,
        language: "Python",
        tags: ["quick sort", "Quick Sort", "sorting", "quick", "algorithm", "divide and conquer", "arrays", "comparison sorting"],
    },

    {
        title: "Check Even or Odd",
        description: "Check if a number is even or odd.",
        code: `def is_even(num):
        return num % 2 == 0`,
        language: "Python",
        tags: ["basic", "conditions", "even", "odd"],
    },
    {
        title: "Find Maximum of Two Numbers",
        description: "Find the maximum of two numbers using an if-else statement.",
        code: `def find_max(a, b):
        return a if a > b else b`,
        language: "Python",
        tags: ["basic", "comparison", "max", "numbers"],
    },
    {
        title: "Simple Factorial Calculation",
        description: "Calculate the factorial of a number using a loop.",
        code: `def factorial(n):
        result = 1
        for i in range(1, n + 1):
            result *= i
        return result`,
        language: "Python",
        tags: ["basic", "loop", "factorial"],
    },
    {
        title: "Check Prime Number",
        description: "Check if a number is prime.",
        code: `def is_prime(n):
        if n <= 1:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True`,
        language: "Python",
        tags: ["basic", "prime", "number", "math"],
    },
    {
        title: "Calculate Power of a Number",
        description: "Calculate the power of a number using a loop.",
        code: `def power(base, exponent):
        result = 1
        for i in range(abs(exponent)):
            result *= base
        return 1 / result if exponent < 0 else result`,
        language: "Python",
        tags: ["basic", "math", "power", "exponent","power of two numbers"],
    },
    {
        title: "Find GCD of Two Numbers",
        description: "Find the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.",
        code: `def find_gcd(a, b):
        while b != 0:
            a, b = b, a % b
        return a`,
        language: "Python",
        tags: ["basic", "math", "gcd", "algorithm"],
    }
    
];

module.exports = snippetsPython;