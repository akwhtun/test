const validPath = function (n, edges, source, destination){
    const adjList = Array.from({length: n}, ()=> [])

    for(const [u,v] of edges){
        adjList[u].push(v)
        adjList[v].push(u)
    }

    const queue = [source]
    const visited = new Set()
    visited.add(source)

    while(queue.length > 0){
        const node = queue.shift()

        if(node === destination){
            return true
        }

        for(const neighbours of adjList[node]){
            if(!visited.has(neighbours)){
                visited.add(neighbours)
                queue.push(neighbours)
            }
        }
    }
    return false
}

console.log(validPath(n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2))