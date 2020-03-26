import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './weatherComponent.css'
import axios from "axios";
import Loader from "./loader";

const apiKey = 'c581effe09ec8fb36a27620a206952e3'
class WeatherComponent extends Component {
    count = 0;

    //state = {loading: true}
    constructor(pros) {
        super(pros);
        console.log('weather pros -->', pros)
        this.state = {lat: 40, log: null, loading: true, newCity: pros.newCity, images: [], weather: null}
        // setInterval(() => {
        //     this.setState({lat: this.count++})
        // }, 1000)
        console.log('constructor')
    }

    updateNewCity() {
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${this.props.newCity}`)
            .then(res => {
                console.log('222 ->', res)
                this.setState({weather: res.data.current})
            })
            .catch(err => {
                console.log(err)
            })
        // setTimeout(
        console.log('run1')
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: this.props.newCity,
                per_page: 5
            },
            headers: {
                Authorization: 'Client-ID Kx511GvN02p_i-O4ONxgKYDFpKKO_LjBPx2REvBCtvc',
                mark2win: 'Welcome lucas :)'
            }
        })
            .then(res => {
                // console.log('run2')
                console.log('phont --->', res.data)
                this.setState({loading: false, images: res.data.results})
                this.props.receiveImages(res.data.results)
            })
            .catch(err => {
                console.log('run3')
                console.log(err)
                this.setState({loading: false})
            })
    }

    componentDidMount() {
        // api key
        // 80a967d4075ab661b8e59826fffcd1f6
        // http://api.weatherstack.com/current
        //     ? access_key = YOUR_ACCESS_KEY
        //     & query = New York
        this.updateNewCity()
        // )


        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        if (prevProps.newCity !== this.props.newCity) {
            this.setState({newCity: this.props.newCity})
            console.log(this.props.newCity)
            this.updateNewCity()
        }
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
        return <div className="weather" style={{backgroundImage: `url(${this.props.baImage})`}}>
            <div className="weatherRow">
                <div className="weatherColumn">observation_time: {this.state?.weather?.observation_time}</div>
            </div>
            <div className="weatherRow">
                <div className="weatherColumn">temperature: {this.state?.weather?.temperature}</div>
                <div className="weatherColumn">{this.state?.weather?.weather_descriptions}</div>
                <div className="weatherColumn">Wind speed: {this.state?.weather?.wind_speed}</div>
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
