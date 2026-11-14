const todos = async () => {
    try{
        const response = await fetch("https://dummyjson.com/todos")
        const data = await response.json()

        const todoList = data.todos

        const completed = todoList
            .filter((stat) => stat.completed)
            
        const result = {"CompletdCount": completed.length} 
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

todos()