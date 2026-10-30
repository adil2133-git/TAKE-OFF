let success = true

const myPromise = new Promise((resolve, reject) => {
    if(success){
        resolve("Success")
    }else{
        reject("Something went wrong")
    }
})

myPromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })