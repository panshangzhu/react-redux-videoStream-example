import axios from "axios";

const API = "AIzaSyCJ7fIIhU9NwRhcq8g_yqIbtAcqcY_uoEE"
const Url = "https://www.googleapis.com/youtube/v3/search"

const youtube = async (search) => {
    if (!search) {
        return 'key word is empty'
    } else {
        search = search.trim()
        let res = await axios.get(Url, {
            params: {
                'part': 'snippet',
                'maxResults': 10,
                'type': 'video',
                'q': search,
                'key': API,
                timeout: 2000
            }
        })
        console.log(res)
        return res
        // this.setState({video: res.data.items})
        // console.log(this.state.video)
    }
}

export default youtube