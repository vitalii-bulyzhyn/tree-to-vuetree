const { TreeNode, construct } = require('./build')

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

const nodesForWork = nodesFromTheServer.map(node => {
    const treeNode = new TreeNode(node.group_id, node.name)
    treeNode.initialize_existing_node(node.id, node.parent_id)
    return treeNode
})

const vuetifyTree = construct(nodesForWork)

console.log(JSON.stringify(vuetifyTree))