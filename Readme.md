# What is it for 

If you are using [Vuetify Treeview component](https://vuetifyjs.com/en/components/treeview/#usage) and you want to pass actual tree data structure to that component, it's not that easy. By using this package - you can easily do that

## Installation 

```
npm i tree-to-vuetree
```
or if you prefer yarn
```
yarn add tree-to-vuetree
```

## Usage
```
const { TreeNode, construct } = require('tree-to-vuetree')
```
or
```
import { TreeNode, construct } from 'tree-to-vuetree'
```
And use it as:

```
// Sample of tree data-structure
const nodesFromTheServer = [
    {
        id: 1,
        group_id: 1,
        name: "first"
    },
    {
        id: 2,
        group_id: 1,
        name: 'second',
        parent_id: 1
    }
]

// Converting your data to Nodes
const nodesForWork = nodesFromTheServer.map(node => {
    const treeNode = new TreeNode(node.group_id, node.name)
    treeNode.initialize_existing_node(node.id, node.parent_id)
    return treeNode
})

// Construct tree for view component
const vuetifyTree = construct(nodesForWork)
```

As an output you will get:
```
[
  { 
    "id": 1, 
    "name": "first",
    "children": [
                  { 
                    "id": 2, 
                    "name": "second",
                    "parent": 1, 
                    "children":[]
                  }
                ]
  }
]
```

## Demo
Coming soon