import React, { Component } from 'react'
import { Paper, TextField, TableHead, Table, TableRow, TableBody, Button } from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import axios from 'axios'
import { StyledTableCell, StyledTableRow } from '../../dhasboard parts/quotation-parts'
import backarrow from '../../imgDashboard/backarrow.svg'
import dealdone from '../../imgDashboard/dealdone.svg'
import { useStyles } from '../components/Main'
import Main from '../components/Main';
import RequestHeader from '../../dhasboard parts/Quotation_Common/RequestHeader';
import CustomerInfo from '../../dhasboard parts/Quotation_Common/CustomerInfo';



class QuotationClosed extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    goBack = () => {
        this.props.history.goBack()
    }
    buttonText = () => {
        if(this.props.history.location.pathname === `/buyer_dashboard/purchases/${this.props.reqID}`){
            return 'Dashboard'
        } else {
            return 'Purchases'
        }
    }
    componentDidMount = () => {
        this.setState({
            ...this.props.soldQuots.filter((el ,index) => el._id === this.props.reqID)[0]
        }) 
        axios.get(`/users/buyer/${this.props.buyerID}`)
            .then((res) => this.props.updateBuyer(res.data))
    }
    render(){
        const {reqID, soldQuots} = this.props
        const soldQuotsFiltered = soldQuots.filter((el, index) => el._id === this.props.reqID)
        // const handleChange = name => event => {
        //     this.setState({
        //         [name]: event.target.value,
        //     });
        // };
        // const classes = useStyles();

        return (
        <Main pageName={`Accepted Quotation N°${soldQuotsFiltered.map(el => el.quotationNum)}`}>
            <div className="navigation-buttons-req">
                <Button button component={Link} onClick={() => this.goBack()} variant="contained" id="button-back" className={useStyles.button}>
                    <img src={backarrow} alt="reply page" style={{width: '30px'}}/>
                    <h5 style={{marginLeft: '15px'}}>{this.buttonText()}</h5>
                </Button>
            </div>
            <Paper className="paper-content">
                <RequestHeader reqID={soldQuotsFiltered.map(el => el.quotationNum)} date={this.state.date} until={this.state.validUntil}/>
                <div className="sold-done-deal">
                    <h1 className="done-deal">DONE DEAL</h1>
                    <img src={dealdone} alt="deal is done"/>
                </div>
                <h3 className="customer-info">Customer Informations:</h3>
                <CustomerInfo infos={this.props.buyersList}/>
                <div className={useStyles.tableWrapper} style={{marginTop: '20px'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{backgroundColor: 'grey'}}>DESCRIPTION</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: 'grey'}}>QUANTITY</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: 'grey'}}>UNIT PRICE (TND)</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: 'grey'}}>AMOUNT (TND)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {soldQuotsFiltered.map((x, i) => x.details.map(elem => (
                            <TableBody>
                                <StyledTableRow key={i}>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={elem.description1}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={elem.quantity1}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={x.u0s}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={x.a5s}/>
                                    </StyledTableCell>
                                </StyledTableRow>
                                {elem.description2 !== '' ? <StyledTableRow key={i+1}>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={elem.description2}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={elem.quantity2}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={x.u1s}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={x.a6s}/>
                                    </StyledTableCell>
                                </StyledTableRow> : null}
                                {elem.description3 !== '' ? <StyledTableRow key={i+2}>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={elem.description3}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={elem.quantity3}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={x.u2s}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={x.a7s}/>
                                    </StyledTableCell>
                                </StyledTableRow> : null}
                                {elem.description4 !== '' ? <StyledTableRow key={i+3}>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={elem.description4}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={elem.quantity4}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={x.u3s}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} value={x.a8s}/>
                                    </StyledTableCell>
                                </StyledTableRow> : null}
                            </TableBody>
                        )) 

                            )}
                            {soldQuotsFiltered.map(el => (
                            <TableBody>
                            <StyledTableRow>
                                <StyledTableCell rowSpan={3} />
                                <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={el.subtotal}
                                        style={{ fontSize: '5px' }}
                                        disabled
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell colSpan={2}>Tax</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={el.tax}
                                        style={{ fontSize: '5px' }}
                                        disabled
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell colSpan={2}>Total</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={el.total}
                                        style={{ fontSize: '5px' }}
                                        disabled
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                            </TableBody>
                            )
                            )}
                    </Table>
                </div>
            </Paper>
        </Main>
    )
}
}
const mapStateToProps = state => {
    return{
        soldQuots: state.reducerReqWaiting,
        buyersList: state.BuyerReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateBuyer: updated => {
            dispatch({
                type: 'UPDATE_USERS',
                updated
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuotationClosed));