function getUser(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("User fetched successfully")
        } else {
            reject("Failed to fetch user")
        }
    })
}

getUser(true)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })