import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import FormCompanyDetails from './FormCompanyDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class SignupBuyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            sector: '',
            address: '',
            phone: '',
            email: '',
            firstName: '',
            lastName: '',
            occupation: '',
            governorate: '',
            password: '',
        }
    }
    // Go next step
    nextStep = () => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }
    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }
    // Add new User to Database
     submmitToDb = () => {
        var formData = new FormData();
        formData.append('username', 'Chris');
        console.log(formData)

        formData.append("sector", this.state.sector);
        formData.append("phone", this.state.phone);
        formData.append("email", this.state.email);
        formData.append("firstName", this.state.firstName);
        formData.append("lastName", this.state.lastName);
        formData.append("occupation", this.state.occupation);
        formData.append("governorate", this.state.governorate);
        formData.append("password", this.state.password);

        console.log(this.state.sector)
        console.log(this.state.phone)
        console.log(this.state.occupation)
        console.log(formData)
        axios.post('http://localhost:3020/buyer/add', formData)
            .then(() => (this.props.newBuyer({ ...formData })))
            .catch((err) => alert(err))

    }
    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.state
        const { sector, address, phone, email, firstName, lastName, occupation, governorate, password } = this.state
        const values = { sector, address, phone, email, firstName, lastName, occupation, governorate, password }
        switch (step) {
            case 1:
                return (
                    <FormCompanyDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        submmitToDb={this.submmitToDb}
                        values={values}
                    />
                )
            case 4:
                return <Success />
            default:
                return (
                    <FormCompanyDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        newBuyer: payload => {
            dispatch({
                type: 'NEW_USER',
                payload
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(SignupBuyer)
