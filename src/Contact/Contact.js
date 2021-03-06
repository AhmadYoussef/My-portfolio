import React from 'react';
import classes from './Contact.module.scss';
import Input from './Input';
import { langData } from '../assets/data/Data';
import AlertMessage from './AlertMessage/AlertMessage';
import axios from 'axios';

const initialState = [
    {
        elementTag: 'input',
        value: '',
        type: 'text',
        name: 'firstName',
        placeHolder: {
            en: "Please enter your First Name",
            de: "ge Please enter your First Name"
        },
        validity: {
            require: true,
            regex: /^[a-zA-Z]+/,
            minLength: 2
        },
        isValid: false
    },
    {
        elementTag: 'input',
        value: '',
        type: 'text',
        name: 'lastName',
        placeHolder: {
            en: "Please enter your last Name",
            de: "Please enter your last Name"
        },
        validity: {
            require: true,
            regex: /^[a-zA-Z]+/,
            minLength: 2
        },
        isValid: false
    },
    {
        elementTag: 'input',
        value: '',
        type: 'text',
        name: 'email',
        placeHolder: {
            en: "Please enter your email address",
            de: "Please enter your email address"
        },
        validity: {
            require: true,
            regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        },
        isValid: false
    },
    {
        elementTag: 'input',
        value: '',
        type: 'text',
        name: 'telephone',
        placeHolder: {
            en: "Please enter your telephone number",
            de: "Please enter your telephone number"
        },
        validity: {
            require: true,
            regex: /^\+|[0-9]?()[0-9](\s|\S)(\d[0-9]{8})$/
        },
        isValid: false
    },
    {
        elementTag: 'textarea',
        value: '',
        type: 'text',
        name: 'message',
        placeHolder: {
            en: "Please enter your Message...",
            de: "Please enter your Message..."
        },
        validity: {
            require: true,
            regex: /^[a-zA-Z]+/,
            minLength: 2
        },
        isValid: false
    },
]

class Contact extends React.Component {
    state = {
        formField: [...initialState],
        isSubmit: false,
        isSend: false,
        resMessage: {
            sent: true,
            message: 'yaaay!'
        }
    };
    checkValidation = (value, rule) => {
        let isValid = true;
        if (rule.require) {
            isValid = value.trim() !== "" && isValid;
            if (rule.regex) {
                isValid = rule.regex.test(value) && isValid;
            }
            if (rule.minLength) {
                isValid = rule.minLength < value.length && isValid;
            }
        }
        return isValid;
    }
    updateInputValueHandler = (e, field) => {
        let formInputs = [...this.state.formField];
        let index = formInputs.findIndex(item => item.name === field);
        let updateFormInput = { ...formInputs[index] }
        updateFormInput.value = e.target.value;
        updateFormInput.isValid = this.checkValidation(updateFormInput.value, updateFormInput.validity);
        formInputs[index] = updateFormInput;
        this.setState({ formField: formInputs });
    }
    sendMail = (e) => {
        e.preventDefault();

        this.setState({ isSubmit: true });
        let formIsValid = true;
        let formFieldErr = this.state.formField.map((item) => {
            formIsValid = item.isValid && formIsValid;
            if (!item.isValid) {
                item.value = '';
            }
            return item;
        })
        if (formIsValid) {

            let bodyObj = {};
            this.state.formField.forEach(item => bodyObj[item.name] = item.value);
            this.setState({ formField: initialState, isSubmit: false }, () => console.log(this.state));
            axios.post("/sendMail", { obj: bodyObj })
                .then(res => {
                    this.setState({ isSend: true, resMessage: { ...res.data } },
                        () => {
                            setTimeout(() => { this.closeMessageLoader() }, 4000)
                        }
                    )
                }
                ).catch(err => console.log(err));
        } else
            this.setState({ formField: formFieldErr });
    }
    closeMessageLoader = () => {
        this.setState({ isSend: false })
    }
    render() {
        let content = { ...langData.en };
        if (this.props.lang === 'de')
            content = { ...langData.de };
        return (
            <div id="contact" className={classes.contactContainer}>
                <h2>{content.contact}</h2>

                <form onSubmit={this.sendMail}>
                    <p>{content.contactText}</p>
                    {
                        this.state.formField.map(item =>
                            <Input
                                key={item.name}
                                error={classes.error}
                                isSubmit={this.state.isSubmit}
                                updateInputValueHandler={this.updateInputValueHandler}
                                lang={this.props.lang}
                                {...item} />)
                    }
                    <input type="submit" value="Send" />
                </form>
                {this.state.isSend ? <AlertMessage {...this.state.resMessage} click={this.closeMessageLoader} /> : null}
            </div>
        );
    }
}
export default Contact;