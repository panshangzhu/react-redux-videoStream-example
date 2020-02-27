import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './weatherComponent.css'
import axios from "axios";
import Loader from "./loader";
const apiKey = '80a967d4075ab661b8e59826fffcd1f6'

class WeatherComponent extends Component {
    count = 0;

    state = {
        lat: 40,
        log: null,
        loading: true,
        newCity: '',
        images: [],
        newWeather: {}
    }
    //state = {loading: true}
    constructor(pros) {
        super(pros);
        console.log('weather props: --->', pros)
        this.state.newCity = pros.newCity
        // setInterval(() => {
        //     this.setState({lat: this.count++})
        // }, 1000)
        console.log('constructor')
    }

    updateCityQuery() {
       axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${this.state.newCity}`)
           .then(res => this.setState({newWeather: res.data}))

        // setTimeout(
        console.log('run1')
        axios.get('https://api.unsplash.com/photos', {
            params: {
                query: this.state.newCity
            },
            headers: {
                //Authorization: 'Client-ID _haOS3MAwueDb9FKgAiO9-9GABaZpIIG_RbJK7Q9SkI',
                Authorization: 'Client-ID RfLVbqMIko8zWB3g1wWM-T7--beV4hnX1wjArSMLf6g',
                mark2win: 'Welcome lucas :)'
            }
        })
            .then(res => {
                console.log('run2333')
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

    }

    componentDidMount() {
        // api key
        // 80a967d4075ab661b8e59826fffcd1f6
        // http://api.weatherstack.com/current
        //     ? access_key = YOUR_ACCESS_KEY
        //     & query = New York

        this.updateCityQuery()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('hiii', prevProps)
        if(prevProps.newCity !== this.props.newCity) {
            this.setState({newCity: this.props.newCity})
            this.updateCityQuery()
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
        return <div className="weather"
                    style={{backgroundImage: `url(${this.props.bcImage})`}}>
            <div >

                <div className="weatherRow">
                    <div className="weatherColumn">{this.state.newWeather?.current?.weather_descriptions[0]}</div>
                    <img src={this.state.newWeather?.current?.weather_icons[0]} alt=""/>
                </div>
                <div className="weatherRow">
                    <div className="weatherColumn">UV {}</div>
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
        </div>
    }
}


export default WeatherComponent;
