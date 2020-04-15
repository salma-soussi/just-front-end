import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { IconButton, Badge, Paper } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom'

class NotificationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notif: false,
            newNotif: false
        }
    }
    componentDidMount() {
        axios.get('/api/notifications')
            .then((res) => {
                this.props.updateReducer(res.data)
            })
    }
    notifToggle = () => {
        this.setState({ notif: !this.state.notif });
        this.setState({ newNotif: true });
        axios.put(`/api/notification-seen`, {
            seen: 'yes'
        }).then(() => this.props.notifseenReducer(this.state))

        for (let x in this.props.notifications) {
            this.setState({ ...this.props.notifseenReducer({ ...this.props.notifications[x], seen: 'yes' }) })
        }
    }
    render() {
        if (window.location.pathname.split('/').length - 1 >= 2) {
            var pathID = window.location.pathname.substr(-24)
        }
        return (
            <div>
                <IconButton color="inherit" onClick={this.notifToggle}>
                    <Badge badgeContent={this.props.notifications.filter(el => el.seen === 'no' && (el.type === 'response')).length}
                        color="error"> 
                        {/* {/ 4 notifications /} */}
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Paper className={this.state.notif ? 'notifOpen' : 'notifClosed'}>
                    {this.props.notifications.filter(el => el.type === 'response').map((el, index) => (
                        <Link style={{ textDecoration: 'none' }} key={el.quotationNum} to={`/buyer_dashboard/req-received/o/${this.props.requestsList.filter(x => x.quotationNum === el.quotationNum).map(y => y._id)}/${pathID}`}>
                            <div className={el.seen === 'no' ? 'new-notif-item' : "notif-item"}>
                                <p className="notif-item">{el.content} <span className="sender">{el.description1}</span></p>
                                <p className="notif-time">{String(el.time).replace('T', ' ').slice(0, 19)}</p>
                            </div>
                        </Link>
                    ))}
                </Paper>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        notifications: state.NotifReducer,
        requestsList: state.reducerReqWaiting
    }
}
const mapDispatchToProps = dispatch => {
    return {
        notifseenReducer: notifseen => {
            dispatch({
                type: 'NOTIF_SEEN',
                notifseen
            })
        },
        updateReducer: updated => {
            dispatch({
                type: 'UPDATE_NOTIF',
                updated
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)