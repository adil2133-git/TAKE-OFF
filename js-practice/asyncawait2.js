async function getData(success) {
    try {
        const myPromise = await new Promise((resolve, reject) => {
            if (success) {
                resolve("Data fetched successfully")
            } else {
                reject("Failed to fetch data")
            }
        })

        return myPromise

    } catch (error) {
        return error
    }
}

getData(true).then((result) => {
    console.log(result)
})

getData(false).then((result) => {
    console.log(result)
})