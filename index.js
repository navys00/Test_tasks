const url = 'https://zdkhiu5mp5dwa.elma365.ru/pub/v1/app/test_sreda/test_task/list'
const bearer_token = '6b2a6b4c-51c4-4beb-94b8-250d12d023b1'

const req = async () => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${bearer_token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "fileHash": "0190983f-d7be-7895-bc40-5f403f0bc287",
                "format": "xlsx",
                "withEventHandlers": "false"

            })
        })
        const data = await response.json()
        console.log(data.result.result[0].__name)
    }

    catch (err) {
        console.log(err)
    }

}
req()