
import React from "react";
import {connect} from 'react-redux'
import {actFetchUser} from "../../actions";

class UserHeader extends React.Component {
    componentDidMount() {
       //this.props.actFetchUser(this.props.userId)
    }

    render() {
        return <div>UserHeader---{this.props.user?.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    user: state.userReducer.allUser.find(e => e.id === ownProps.userId)}

export default connect(mapStateToProps, {actFetchUser})(UserHeader)
