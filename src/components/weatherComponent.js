import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './weatherComponent.css'
import axios from "axios";
import Loader from "./loader";

class WeatherComponent extends Component {
    count = 0;

    state =
       {lat: 40,
           log: null,
           loading: true,
           newCtiy: '',
           images: [],
           newweather: {}
       }


    //state = {loading: true}
    constructor(props) {
        super(props);
        console.log('weather ', props)
        this.state.newcity =  props.newCity
        // setInterval(() => {
        //     this.setState({lat: this.count++})
        // }, 1000)
        console.log('constructor')
    }

    thiscityUpdate(){
        let apiKey = '80a967d4075ab661b8e59826fffcd1f6'
        let city = this.state.newCtiy
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`).then( res => {
            console.log('weather -----------', res)
        })
        // setTimeout(
        console.log('run1')
        axios.get('https://api.unsplash.com/photos', {
            params: {
                query: this.state.newCity,
            },
            headers: {
                Authorization: 'Client-ID DGc62apQ1xE4VOLQ8tqfK1Z6Q14h5dT0KNJS6b8wNaw',
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
    }

    componentDidMount() {
        // api key
        // 80a967d4075ab661b8e59826fffcd1f6
        // http://api.weatherstack.com/current
        //     ? access_key = YOUR_ACCESS_KEY
        //     & query = New York

         this.thiscityUpdate()

        // )


        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        if(prevProps.newCtiy !== this.props.newCity){
            this.setState({newCity: this.props.newCity})
            this.thiscityUpdate()
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
        return <div className="weather" style={{backgroundImage: `url(${this.props.bcImage2})`}}>
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
