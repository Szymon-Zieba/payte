import express from 'express';
const app = express();
const port = 3000
import axios from 'axios'

const apiUrl = "https://pro-api.coinmarketcap.com/"
const apiKey = "dc78b79d-f330-4406-a1fe-cc8241444d73"
const info = "v1/cryptocurrency/listings/latest"

app.get('/', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    axios.get( `${apiUrl}` + `${info}` + "?limit=5",{
       headers: {
           'X-CMC_PRO_API_KEY': apiKey,
       },
    })
       .then(r => {
           console.log(r.data.data)
           res.send(r.data.data)
       })
    })

app.listen(port, () => console.log(`listening on port ${port}`));



