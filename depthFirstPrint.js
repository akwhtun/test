const depthFristPrint = (graph, source) => {
    const stack = [source]

    while(stack.length > 0){
        const current = stack.pop();
        console.log(current)

        for(let neighbours of graph[current]){
            stack.push(neighbours);
        }
    }
    
}


const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: []
}


depthFristPrint(graph, 'a')
