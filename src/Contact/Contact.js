import React from 'react';
import classes from './Contact.module.scss';
import Input from './Input';
import { langData } from '../assets/data/Data';

const initState = [
    {
        elementTag: 'input',
        type: 'text',
        name: 'firstName',
        placeHolder: {
            en: "Please enter your First Name",
            de: "ge Please enter your First Name"
        },
    },
    {
        elementTag: 'input',
        type: 'text',
        name: 'lastName',
        placeHolder: {
            en: "Please enter your last Name",
            de: "Please enter your last Name"
        },
    },
    {
        elementTag: 'input',
        type: 'text',
        name: 'email',
        placeHolder: {
            en: "Please enter your email address",
            de: "Please enter your email address"
        },
    },
    {
        elementTag: 'input',
        type: 'text',
        name: 'telephone',
        placeHolder: {
            en: "Please enter your telephone number",
            de: "Please enter your telephone number"
        },
    },
    {
        elementTag: 'textarea',
        type: 'text',
        name: 'message',
        placeHolder: {
            en: "Please enter your Message...",
            de: "Please enter your Message..."
        },
    },
]

class Contact extends React.Component {
    state = { formTag: [...initState] };
    render() {
        let content = { ...langData.en };
        if (this.props.lang === 'de')
            content = { ...langData.de };
        return (
            <div id="contact" className={classes.contactContainer}>
                <h2>{content.contact}</h2>

                <form>
                    <p>{content.contactText}</p>
                    {
                        this.state.formTag.map(item => <Input key={item.name} lang={this.props.lang} {...item} />)
                    }
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}
export default Contact;