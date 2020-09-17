import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { reduxForm, Field, reducer } from 'redux-form';
import {contactSubmit, initialFormTest555} from '../actions/index';
import isEmail from 'sane-email-validation';

// Component
import Header from '../components/header';
import Footer from '../components/footer';
import { renderInput, renderTextArea, renderSelect } from '../components/form/contactForm/renderContactForm';



const isNotEmail = isEmail.isNotEmail;

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showConfirmBox2: false};


        this.setConfirmMsgFalse = this.setConfirmMsgFalse.bind(this);
    }

    componentDidMount() {
        // this.props.initialFormTest555();
    }

    setConfirmMsgFalse() {
        // this.props.contactUs.showConfirmBox = false;
        this.setState({showConfirmBox2: false});
    }

    handleContactFormSubmit(contactFormValues) {
        this.props.contactSubmit(contactFormValues);
        this.setState({showConfirmBox2: true});
    }

    render() {
        const { handleSubmit, pristine, submitting, reset } = this.props;
        return (
            <div>
                <Header />
                {/* Contact Us Section 1 */}
                <section className="contact-us-section1">
                    <form onSubmit={handleSubmit(() => this.handleContactFormSubmit(this.props.contactFormValues))}>
                        {this.state.showConfirmBox2 &&
                            <div className="confirm-order bg-success">
                                Your message has been sent
                            </div>
                        }
                        <Field label="Name" name="name" type="text" component={renderInput} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                        <Field label="Email" name="email" type="email" component={renderInput} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                        <Field label="Country" name="country" component={renderSelect} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                        <Field label="Message" name="message" type="text" component={renderTextArea} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                        
                        <div className="wrap-btn">
                            <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Submit</button>
                            <button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>Clear Value</button>
                        </div>
                    </form>
                </section>
                {console.log(this.props.showState)}
                {console.log(this.props.contactUs)}
                <Footer />
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (isNotEmail(values.email)) {
        errors.email = 'Email is not valid';
    }


    if (!values.message) {
        errors.message = 'Required';
    }

    if(!values.country) {
        errors.country = 'Required';
    }

    return errors;
}

const warn = (values) => {
    const warning = {};

    if(!values.name) {
        warning.name = 'Required';
    } else if (values.name == 'puck') {
        warning.name = 'THIS NAME IS STRANGE';
    } else if (values.name.length > 20) {
        warning.name = 'IS IT TOO LONG ?';
    }


    if(!values.country) {
        warning.country = 'Required';
    } else if(values.country == 'Algeria') {
        warning.country = 'Oh Algeria!';
    } else if (values.country.length > 20) {
        warning.country = 'IS IT TOO LONG ?';
    }

    return warning;
}

function mapStateToProps(state) {
    return { showState: state, 
        contactFormValues: state.form.contactForm ? state.form.contactForm.values : null, 
        contactUs: state.contactUs
    };
}


Contact = reduxForm({ form: "contactForm", validate, warn })(Contact);

export default connect(mapStateToProps, {contactSubmit, initialFormTest555})(Contact);

