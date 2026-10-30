let success = false

const myPromise = new Promise((resolve, reject) => {
    if(success){
        resolve("User fetched successfully")
    }else{
        reject("Failed to fetch user")
    }
})

myPromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })