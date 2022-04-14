// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:

// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:

// Input: root = []
// Output: []

const invertTree = tree => {
    const reverseNode = node => {
       if (node == null) {
           return null
       }
       reverseNode(node.left);
       reverseNode(node.right);
        
       let holdLeft = node.left;
       node.left = node.right;
       node.right = holdLeft;
       return node;
   }
    return reverseNode(tree)
}