import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Uusl5F1Q6rpv7OKevgUKzNH4uSB8pNXa4NvW8gGDAhI'
    }
})
