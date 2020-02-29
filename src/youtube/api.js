import axios from 'axios'
const YTB_KEY  = 'AIzaSyBxvCT7qkebtDNf1f9bO1a6C8ePa0acTak'
const baseURL = 'https://www.googleapis.com/youtube/v3/search'
const getVidoes = async (term) => {

    if(!term) {
        return 'errror'
    }
    term = term.trim()

    let res = await axios.get(baseURL, {
        params: {
            part: 'snippet',
            maxResults: 25,
            type: 'video',
            key: YTB_KEY,
            q: term,
            timeout: 1000
        }
    })
    console.log('youtube--->', res)
}

export default getVidoes
