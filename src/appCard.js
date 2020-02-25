import React, {Component} from 'react'
//const axios = require('axios')
import axios from 'axios'

class AppCard extends Component {
    count = 0;
    constructor(pros) {
        super(pros);
        console.log(pros)
        this.state = {lat: 40, log: null}
        // setInterval(() => {
        //     this.setState({lat: this.count++})
        // }, 1000)
        console.log('constructor')
    }

    // override
    render() {
        console.log('render')
        return <div>hi i am {this.state.lat}</div>
    }

    componentDidMount() {
        // api key
        // 80a967d4075ab661b8e59826fffcd1f6
        // http://api.weatherstack.com/current
        //     ? access_key = YOUR_ACCESS_KEY
        //     & query = New York

        let apiKey = '80a967d4075ab661b8e59826fffcd1f6'
        let city = 'Toronto'
        //axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
            axios.get('https://google.com')
            .then(res => {console.log(res)})
            .catch(err => console.log(err))

        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('will unmount')
    }
}

export default AppCard;
