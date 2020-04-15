import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class StreamCarousel extends React.Component {
  render() {
    var settings = {
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <Slider {...settings}>
        {this.props.streams.map((st) => (
          <div key={st.id}>
            <Link to={"/streams/" + st.id}>
              <img src={st.img} className="rounded" />
            </Link>
          </div>
        ))}
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streamReducer.streams,
  };
};

export default connect(mapStateToProps, {})(StreamCarousel);
