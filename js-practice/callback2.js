function greet(name, callback){
    console.log("Hello " + name)

    callback()
}

function morning(){
    console.log("Good Morning")
}

greet("Adil", morning)