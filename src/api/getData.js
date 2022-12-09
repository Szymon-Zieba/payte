import axios from "axios";
import {apiKey} from "@/api/config";
const link = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info'
export const getData = async () => {
    let data = null
    // await axios({
    //     method: 'get',
    //     url: link,
    //
    //     headers: {
    //         'X-CMC_PRO_API_KEY': apiKey,
    //     },
    //     responseType: 'stream'
    // })
    //     .then(function (response) {
    //         data = response
    //     })

    data =  await fetch(link,{
        mode: 'no-cors',
        headers: {
                    'X-CMC_PRO_API_KEY': apiKey,
        },
    })

    return data
}