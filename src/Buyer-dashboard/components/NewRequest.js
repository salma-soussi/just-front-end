import React, { Component } from 'react'
import { Paper, TextField, Button, Table, TableHead, TableRow, TableBody } from '@material-ui/core'
import { useStyles } from './Main'
import { connect } from 'react-redux'
import axios from 'axios'
import Main from './Main'
import calendar from '../../imgDashboard/calendar.svg'
import reply from '../../imgDashboard/reply.svg'
import { StyledTableCell, StyledTableRow } from '../../dhasboard parts/quotation-parts'
import CustomerInfo from '../../dhasboard parts/Quotation_Common/CustomerInfo';
import Modal from 'react-awesome-modal';
import SnackbarError from '../../SnackbarError';





export class NewRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            firstName: '',
            lastName: '',
            status: 'Waiting',
            description1: '',
            quantity1: '',
            description2: '',
            quantity2: '',
            description3: '',
            quantity3: '',
            description4: '',
            quantity4: '',
            date: new Date(),
            validUntil: '',
            comment: '',
            quotationNum: String(Math.round(Math.random() * 1000000)),
            customerID: String(Math.round(Math.random() * 1000000)),
            content: 'Someone is Looking for ',
            type: 'new',
            seen: 'no',
            visible: false,
            showError: false,
            showSuccess: false
        }
    }

    componentDidMount() {
        axios.get(`/users/buyer/${this.props.buyerID}`)
            .then((res) => this.props.updateBuyer(res.data))
        this.setState({
            companyName: this.props.buyersList.companyName,
            firstName: this.props.buyersList.firstName,
            lastName: this.props.buyersList.lastName
        });
    }

    openModal = () => {
        this.setState({
            visible: true
        });
    }

    closeModal = () => {
        this.setState({
            visible: false
        });
    }
    closeModalAndConfirm = () => {
        if ((this.state.description1 === '' && this.state.quantity1 === '' &&
            this.state.description2 === '' && this.state.quantity2 === '' &&
            this.state.description3 === '' && this.state.quantity3 === '' &&
            this.state.description4 === '' && this.state.quantity4 === '') ||
            ((this.state.description1 !== '' && this.state.quantity1 === '') ||
                (this.state.description2 !== '' && this.state.quantity2 === '') ||
                (this.state.description3 !== '' && this.state.quantity3 === '') ||
                (this.state.description4 !== '' && this.state.quantity4 === '')) ||
            ((this.state.description1 === '' && this.state.quantity1 !== '') ||
                (this.state.description2 === '' && this.state.quantity2 !== '') ||
                (this.state.description3 === '' && this.state.quantity3 !== '') ||
                (this.state.description4 === '' && this.state.quantity4 !== ''))
        ) {
            this.setState({ showError: true })
            setTimeout(() => this.setState({ showError: false }), 4000)
        } else {
            axios.post('/api/new-quotation', { ...this.state })
                .then(() => this.props.newRequest({
                    quotationNum: this.state.quotationNum,
                    companyName: this.state.companyName,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    customerID: this.state.customerID,
                    description1: this.state.description1,
                    description2: this.state.description2,
                    description3: this.state.description3,
                    description4: this.state.description4,
                    quantity1: this.state.quantity1,
                    quantity2: this.state.quantity2,
                    quantity3: this.state.quantity3,
                    quantity4: this.state.quantity4,
                    comment: this.state.comment,
                    date: this.state.date,
                    validUntil: String(this.state.validUntil),
                    status: this.state.status,
                })
                )
            this.setState({ showSuccess: true });
            setTimeout(() => this.setState({ showSuccess: false }), 4000)

            axios.post('/api/new-notification', { ...this.state })
                .then(() => this.props.newNotif({
                    content: this.state.content,
                    time: new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.now()),
                    description1: this.state.description1,
                    quotationNum: this.state.quotationNum,
                    status: this.state.status,
                    type: this.state.type,
                    seen: this.state.seen
                })
                )
        }


        this.setState({ description1: '', description2: '', description3: '', description4: '', quantity1: '', quantity2: '', quantity3: '', quantity4: '', date: '', until: '', comment: '' })
        this.setState({ visible: false });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Main pageName={'New Request'}>
                {this.state.showError ? <SnackbarError type={'error'} msg={'You forgot to add quantity or description!'} /> : null}
                {this.state.showSuccess ? <SnackbarError type={'success'} msg={'Request Sent Successfully!'} /> : null}
                <div className="navigation-buttons-req">
                    <Button onClick={this.openModal} id="btn-reply" variant="contained" color="primary" className={useStyles.button}>
                        <img src={reply} alt="reply page" style={{ transform: 'scale(-1, 1)', width: '30px' }} />
                        <h5>Send</h5>
                    </Button>
                    {/* {/ Modal /} */}
                    <section>
                        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInDown" onClickAway={this.closeModal}>
                            <div className="modal-wrapper">
                                <h1>CONFIRMATION</h1>
                                <p style={{ opacity: '.5' }}>Are you sure you want to send this request ?</p>
                                <div className="buttons-modal">
                                    <a href="javascript:void(0);" className="cancel-btn" onClick={this.closeModal}>Cancel</a>
                                    <a href="javascript:void(0);" className="confirm-btn" onClick={this.closeModalAndConfirm}>Confirm</a>
                                </div>
                            </div>
                        </Modal>
                    </section>
                </div>
                <Paper className="req-header">
                    <h1 className="page-title" style={{ margin: '10px' }}>New Quotation Request</h1>
                    <div className="dates" style={{ margin: '10px' }}>
                        <div className="icon-and-input">
                            <img src={calendar} className="icons-req" alt="calendar icon, date of the request" />
                            <TextField
                                value={new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now())}
                                style={{ pointerEvents: 'none' }}
                                label="Today"
                                variant="outlined"
                                className={useStyles.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="icon-and-input" style={{ marginTop: '15px' }}>
                            <img src={calendar} className="icons-req" alt="calendar icon, date of validation" />
                            <TextField
                                name="validUntil"
                                value={this.state.validUntil}
                                onChange={this.handleChange}
                                id="date"
                                label="Valid Until"
                                type="date"
                                variant="outlined"
                                className={useStyles.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="paper-content">
                        <h3 className="customer-info">Customer Informations:</h3>
                        <CustomerInfo infos={this.props.buyersList} />
                        <div className={useStyles.tableWrapper} style={{ marginTop: '20px' }}>
                            <TextField fullWidth={true} variant="outlined" label="Comment (Optional)" onChange={this.handleChange} value={this.state.comment} name="comment" type="text" />
                            <br /><br />
                            <Table id='tableDescriptions'>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{ backgroundColor: 'grey' }}>DESCRIPTION</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: 'grey' }}>QUANTITY</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <TextField
                                                style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Description 1"
                                                name="description1"
                                                value={this.state.description1}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                type="number"
                                                name="quantity1"
                                                label="Quantity 1"
                                                value={this.state.quantity1 < 0 ? 0 : this.state.quantity1}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <TextField style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Description 2"
                                                name="description2"
                                                value={this.state.description2}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                type="number"
                                                name="quantity2"
                                                label="Quantity 2"
                                                value={this.state.quantity2 < 0 ? 0 : this.state.quantity2}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <TextField style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Description 3"
                                                name="description3"
                                                value={this.state.description3}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                type="number"
                                                name="quantity3"
                                                label="Quantity 3"
                                                value={this.state.quantity3 < 0 ? 0 : this.state.quantity3}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <TextField style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Description 4"
                                                name="description4"
                                                value={this.state.description4}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                type="number"
                                                name="quantity4"
                                                label="Quantity 4"
                                                value={this.state.quantity4 < 0 ? 0 : this.state.quantity4}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </Paper>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        request: state.reducerReqWaiting,
        buyersList: state.BuyerReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newRequest: payload => {
            dispatch({
                type: 'CREATE_REQ',
                payload
            })
        },
        newNotif: newnotif => {
            dispatch({
                type: 'NEW_NOTIF',
                newnotif
            })
        },
        updateBuyer: updated => {
            dispatch({
                type: 'UPDATE_USERS',
                updated
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewRequest)