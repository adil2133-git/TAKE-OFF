async function getUser() {
    try{
        const result = await new Promise((resolve, reject) => {

            resolve("User fetched successfully")
            reject("Failed to fetch user")
        })

        return result
    }catch(error){
        return error
    }
}

getUser().then((result) => console.log(result))