import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './weatherComponent.css'
import axios from "axios";
import Loader from "./loader";

class WeatherComponent extends Component {
    count = 0;

    //state = {loading: true}
    constructor(pros) {
        super(pros);
        console.log('weather props: --->', pros)
        this.state = {
            lat: 40,
            log: null,
            loading: true,
            newCity: pros.newCity,
            images: []
        }
        // setInterval(() => {
        //     this.setState({lat: this.count++})
        // }, 1000)
        console.log('constructor')
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
        // setTimeout(
        console.log('run1')
        axios.get('https://api.unsplash.com/photos', {
            params: {
                query: this.state.newCity,
            },
            headers: {
                Authorization: 'Client-ID _haOS3MAwueDb9FKgAiO9-9GABaZpIIG_RbJK7Q9SkI',
                mark2win: 'Welcome lucas :)'
            }
        })
            .then(res => {
                console.log('run2')
                console.log(res.data)
                this.setState({loading: false, images: res.data})
                this.props.recvImages(this.state.images)
            })
            .catch(err => {
                console.log('run3')
                console.log(err)
                this.setState({loading: false})
            })

        // )


        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('will unmount')
    }

    render() {
        if (this.state.loading) {
            // if(true) {
            return (
                <div>
                    <Loader message="努力家在中..."/>
                </div>
            )
        }
        return <div className="weather"
                    style={{backgroundImage: `url(${this.props.bcImage})`}}>
            <div className="weatherRow">
                <div className="weatherColumn">1r 1c</div>
            </div>
            <div className="weatherRow">
                <div className="weatherColumn">2r 1c</div>
                <div className="weatherColumn">2r 2c</div>
                <div className="weatherColumn">2r 3c</div>
            </div>
            <div className="weatherRow">
                <div className="weatherColumn">3r 1c</div>
                <div className="weatherColumn">3r 2c</div>
                <div className="weatherColumn">3r 3c</div>
                <div className="weatherColumn">3r 3c</div>
                <div className="weatherColumn">3r 3c</div>
            </div>
        </div>
    }
}


export default WeatherComponent;
