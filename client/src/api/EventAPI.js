import axios from 'axios'

const KEY = 'm0o6ngepm1tvjHNa09clKOFNQZnWVpzK'
const secret_KEY = 'BceTYl2q0XIkqF1s'

export default axios.create({
    baseURL: 'https://app.ticketmaster.com/discovery/v2',
    params: {
        apikey: KEY,
        secret: secret_KEY,
    }
})