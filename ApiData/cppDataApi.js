const snippetsCPP = [
    {
        title: "Binary Search Algorithm",
        description: "Implementation of binary search.",
        code: `int binarySearch(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;  // Target not found
}`,
        language: "C++",
        tags: ["Binary Search Algorithm", "binary search", "search", "binary", "algorithm"],
    },
    {
        title: "Linear Search Algorithm",
        description: "Implementation of linear search.",
        code: `int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;  // Target not found
}`,
        language: "C++",
        tags: ["Linear Search Algorithm", "linear search", "search", "linear", "algorithm"],
    },
    {
        title: "Preorder Traversal in Trees",
        description: "Preorder traversal of a binary tree.",
        code: `struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

void preorderTraversal(TreeNode* root) {
    if (root == nullptr) return;
    cout << root->val << " ";
    preorderTraversal(root->left);
    preorderTraversal(root->right);
}`,
        language: "C++",
        tags: ["Preorder Traversal in Trees", "preorder traversal", "tree", "preorder", "traversal"],
    },
    {
        title: "Inorder Traversal in Trees",
        description: "Inorder traversal of a binary tree.",
        code: `struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

void inorderTraversal(TreeNode* root) {
    if (root == nullptr) return;
    inorderTraversal(root->left);
    cout << root->val << " ";
    inorderTraversal(root->right);
}`,
        language: "C++",
        tags: ["Inorder Traversal in Trees", "inorder traversal", "tree", "inorder", "traversal"],
    },
    {
        title: "BFS Traversal in Graphs",
        description: "Breadth First Search traversal of a graph.",
        code: `void bfsGraph(unordered_map<int, vector<int>>& adjList, int start) {
    unordered_map<int, bool> visited;
    queue<int> q;
    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";

        for (int neighbor : adjList[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}`,
        language: "C++",
        tags: ["BFS Traversal in Graphs", "bfs traversal", "graph", "bfs", "traversal"],
    },
    {
        title: "DFS Traversal in Graphs",
        description: "Depth First Search traversal of a graph.",
        code: `void dfsGraph(unordered_map<int, vector<int>>& adjList, int node, unordered_map<int, bool>& visited) {
    visited[node] = true;
    cout << node << " ";

    for (int neighbor : adjList[node]) {
        if (!visited[neighbor]) {
            dfsGraph(adjList, neighbor, visited);
        }
    }
}`,
        language: "C++",
        tags: ["DFS Traversal in Graphs", "dfs traversal", "graph", "dfs", "traversal"],
    },
    {
        title: "Bubble Sort",
        description: "Implementation of bubble sort.",
        code: `void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`,
        language: "C++",
        tags: ["Bubble Sort", "bubble sort", "sorting", "bubble", "algorithm"],
    },
    {
        title: "Selection Sort",
        description: "Implementation of selection sort.",
        code: `void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]);
    }
}`,
        language: "C++",
        tags: ["Selection Sort", "selection sort", "sorting", "selection", "algorithm"],
    },
    {
        title: "Insertion Sort",
        description: "Implementation of insertion sort.",
        code: `void insertionSort(vector<int>& arr) {
    int n = arr.size();
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
        language: "C++",
        tags: ["Insertion Sort", "insertion sort", "sorting", "insertion", "algorithm"],
    },
    {
        title: "Merge Sort",
        description: "Implementation of merge sort.",
        code: `void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    vector<int> L(n1), R(n2);

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

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}`,
        language: "C++",
        tags: ["Merge Sort", "merge sort", "sorting", "merge", "algorithm"],
    },
    {
        title: "Quick Sort",
        description: "Implementation of quick sort.",
        code: `int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
        language: "C++",
        tags: ["Quick Sort", "quick sort", "sorting", "quick", "algorithm"],
    },


    {
        title: "Prim's Algorithm for MST",
        description: "Find the Minimum Spanning Tree using Prim's algorithm.",
        code: `void primMST(unordered_map<int, vector<pair<int, int>>>& graph) {
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        unordered_map<int, bool> inMST;
        unordered_map<int, int> key;
        unordered_map<int, int> parent;
    
        for (auto& node : graph) {
            key[node.first] = INT_MAX;
            inMST[node.first] = false;
        }
    
        int start = graph.begin()->first;
        pq.push({0, start});
        key[start] = 0;
        parent[start] = -1;
    
        while (!pq.empty()) {
            int u = pq.top().second;
            pq.pop();
            inMST[u] = true;
    
            for (auto& neighbor : graph[u]) {
                int v = neighbor.first;
                int weight = neighbor.second;
    
                if (!inMST[v] && weight < key[v]) {
                    key[v] = weight;
                    pq.push({key[v], v});
                    parent[v] = u;
                }
            }
        }
    
        for (auto& p : parent) {
            if (p.second != -1) cout << p.second << " - " << p.first << "\\n";
        }
    }`,
        language: "C++",
        tags: ["Prim's Algorithm", "MST", "graph", "algorithm"],
    },
    
    {
        title: "Palindrome Check",
        description: "Check if a string is a palindrome.",
        code: `bool isPalindrome(string s) {
        int left = 0, right = s.size() - 1;
        while (left < right) {
            if (s[left++] != s[right--]) return false;
        }
        return true;
    }`,
        language: "C++",
        tags: ["Palindrome", "string", "check", "algorithm"],
    },


    {
        title: "Check Even or Odd",
        description: "Check if a number is even or odd.",
        code: `bool isEven(int num) {
        return num % 2 == 0;
    }`,
        language: "C++",
        tags: ["basic", "conditions", "even", "odd"],
    },
    {
        title: "Find Maximum of Two Numbers",
        description: "Find the maximum of two numbers using an if-else statement.",
        code: `int findMax(int a, int b) {
        return (a > b) ? a : b;
    }`,
        language: "C++",
        tags: ["basic", "comparison", "max", "numbers"],
    },
    {
        title: "Simple Factorial Calculation",
        description: "Calculate the factorial of a number using a loop.",
        code: `long long factorial(int n) {
        long long result = 1;
        for (int i = 1; i <= n; ++i) {
            result *= i;
        }
        return result;
    }`,
        language: "C++",
        tags: ["basic", "loop", "factorial"],
    },
    {
        title: "Check Prime Number",
        description: "Check if a number is prime.",
        code: `bool isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; ++i) {
            if (n % i == 0) return false;
        }
        return true;
    }`,
        language: "C++",
        tags: ["basic", "prime", "number", "math","prime number"],
    },
    {
        title: "Calculate Power of a Number",
        description: "Calculate the power of a number using a loop.",
        code: `double power(double base, int exponent) {
        double result = 1;
        for (int i = 1; i <= abs(exponent); ++i) {
            result *= base;
        }
        return (exponent < 0) ? 1 / result : result;
    }`,
        language: "C++",
        tags: ["basic", "math", "power", "exponent","power of two numbers"],
    },
    {
        title: "Find GCD of Two Numbers",
        description: "Find the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.",
        code: `int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }`,
        language: "C++",
        tags: ["basic", "math", "gcd", "algorithm"],
    }
    

    

    
    
    
];

module.exports = snippetsCPP;