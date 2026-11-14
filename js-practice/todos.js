const todos = async () => {
    try{
        const response = await fetch("https://dummyjson.com/todos")
        const data = await response.json()

        const todoList = data.todos

        const descriptions = todoList
            .map((todos) => todos.todo)
         
        console.log(descriptions)
    }catch(err){
        console.log(err)
    }
}

todos()