
const snippetsJava = [
    {
        title: "Binary Search Algorithm",
        description: "Implementation of binary search.",
        code: `int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;  // Target not found
}`,
        language: "Java",
        tags: ["Binary Search Algorithm", "binary search", "search", "binary", "algorithm"],
    },
    {
        title: "Linear Search Algorithm",
        description: "Implementation of linear search.",
        code: `int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;  // Target not found
}`,
        language: "Java",
        tags: ["Linear Search Algorithm", "linear search", "search", "linear", "algorithm"],
    },
    {
        title: "Preorder Traversal in Trees",
        description: "Preorder traversal of a binary tree.",
        code: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

void preorderTraversal(TreeNode root) {
    if (root == null) return;
    System.out.print(root.val + " ");
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}`,
        language: "Java",
        tags: ["Preorder Traversal in Trees", "preorder traversal", "tree", "preorder", "traversal"],
    },
    {
        title: "Inorder Traversal in Trees",
        description: "Inorder traversal of a binary tree.",
        code: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

void inorderTraversal(TreeNode root) {
    if (root == null) return;
    inorderTraversal(root.left);
    System.out.print(root.val + " ");
    inorderTraversal(root.right);
}`,
        language: "Java",
        tags: ["Inorder Traversal in Trees", "inorder traversal", "tree", "inorder", "traversal"],
    },
    {
        title: "BFS Traversal in Graphs",
        description: "Breadth First Search traversal of a graph.",
        code: `import java.util.*;

void bfsGraph(Map<Integer, List<Integer>> adjList, int start) {
    Set<Integer> visited = new HashSet<>();
    Queue<Integer> queue = new LinkedList<>();
    visited.add(start);
    queue.add(start);

    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.print(node + " ");
        for (int neighbor : adjList.get(node)) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.add(neighbor);
            }
        }
    }
}`,
        language: "Java",
        tags: ["BFS Traversal in Graphs", "bfs traversal", "graph", "bfs", "traversal"],
    },
    {
        title: "DFS Traversal in Graphs",
        description: "Depth First Search traversal of a graph.",
        code: `import java.util.*;

void dfsGraph(Map<Integer, List<Integer>> adjList, int node, Set<Integer> visited) {
    visited.add(node);
    System.out.print(node + " ");

    for (int neighbor : adjList.get(node)) {
        if (!visited.contains(neighbor)) {
            dfsGraph(adjList, neighbor, visited);
        }
    }
}`,
        language: "Java",
        tags: ["DFS Traversal in Graphs", "dfs traversal", "graph", "dfs", "traversal"],
    },
    {
        title: "Bubble Sort",
        description: "Implementation of bubble sort.",
        code: `void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
        language: "Java",
        tags: ["Bubble Sort", "bubble sort", "sorting", "bubble", "algorithm"],
    },
    {
        title: "Selection Sort",
        description: "Implementation of selection sort.",
        code: `void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`,
        language: "Java",
        tags: ["Selection Sort", "selection sort", "sorting", "selection", "algorithm"],
    },
    {
        title: "Insertion Sort",
        description: "Implementation of insertion sort.",
        code: `void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`,
        language: "Java",
        tags: ["Insertion Sort", "insertion sort", "sorting", "insertion", "algorithm"],
    },
    {
        title: "Merge Sort",
        description: "Implementation of merge sort.",
        code: `void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int[] L = new int[n1];
    int[] R = new int[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}`,
        language: "Java",
        tags: ["Merge Sort", "merge sort", "sorting", "merge", "algorithm"],
    },
    {
        title: "Quick Sort",
        description: "Implementation of quick sort.",
        code: `int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
        language: "Java",
        tags: ["Quick Sort", "quick sort", "sorting", "quick", "algorithm"],
    },

    {
        title: "Check Even or Odd",
        description: "Check if a number is even or odd.",
        code: `public boolean isEven(int num) {
        return num % 2 == 0;
    }`,
        language: "Java",
        tags: ["basic", "conditions", "even", "odd"],
    },
    {
        title: "Find Maximum of Two Numbers",
        description: "Find the maximum of two numbers using an if-else statement.",
        code: `public int findMax(int a, int b) {
        return (a > b) ? a : b;
    }`,
        language: "Java",
        tags: ["basic", "comparison", "max", "numbers"],
    },
    {
        title: "Simple Factorial Calculation",
        description: "Calculate the factorial of a number using a loop.",
        code: `public long factorial(int n) {
        long result = 1;
        for (int i = 1; i <= n; ++i) {
            result *= i;
        }
        return result;
    }`,
        language: "Java",
        tags: ["basic", "loop", "factorial"],
    },
    {
        title: "Check Prime Number",
        description: "Check if a number is prime.",
        code: `public boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; ++i) {
            if (n % i == 0) return false;
        }
        return true;
    }`,
        language: "Java",
        tags: ["basic", "prime", "number", "math","prime number"],
    },
    {
        title: "Calculate Power of a Number",
        description: "Calculate the power of a number using a loop.",
        code: `public double power(double base, int exponent) {
        double result = 1;
        for (int i = 1; i <= Math.abs(exponent); ++i) {
            result *= base;
        }
        return (exponent < 0) ? 1 / result : result;
    }`,
        language: "Java",
        tags: ["basic", "math", "power", "exponent","power of two numbers"],
    },
    {
        title: "Find GCD of Two Numbers",
        description: "Find the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.",
        code: `public int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }`,
        language: "Java",
        tags: ["basic", "math", "gcd", "algorithm"],
    }
    
];

module.exports = snippetsJava;