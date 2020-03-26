import React from "react";
import {connect} from "react-redux"
import {actFetchUser, actFetchAllUser} from "../../actions";


class UserHeader extends React.Component{
    componentDidMount() {
        // this.props.actFetchUser(this.props.userId)
    }

    render() {
        return (
            <div>
                {this.props.user2?.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {return {user2: state.userReducer.allUser.find(e => e.id === ownProps.userId)}}

export default connect(mapStateToProps, {actFetchUser, actFetchAllUser})(UserHeader)