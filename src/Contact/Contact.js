import React from 'react';
import classes from './Contact.module.scss';
import Input from './Input';

const initState = [
    {
        elementTag: 'input',
        type: 'text',
        name: 'firstName',
        placeHolder: "Please enter your First Name",
    },
    {
        elementTag: 'input',
        type: 'text',
        name: 'lastName',
        placeHolder: "Please enter your last Name",
    },
    {
        elementTag: 'input',
        type: 'text',
        name: 'email',
        placeHolder: "Please enter your email address",
    },
    {
        elementTag: 'input',
        type: 'text',
        name: 'telephone',
        placeHolder: "Please enter your telephone number",
    },
    {
        elementTag: 'textarea',
        type: 'text',
        name: 'message',
        placeHolder: "Please enter your Message...",
    },
]

class Contact extends React.Component {
    state = { formTag: [...initState] };
    render() {
        return (
            <div className={classes.contactContainer}>
                <h2>Contact</h2>

                <form>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur vitae libero quis nihil! Rerum voluptates, voluptatibus alias ullam ad dolores, earum possimus ea fuga placeat aliquam molestias laudantium iusto.</p>
                    {
                        this.state.formTag.map(item => <Input key={item.name} {...item} />)
                    }
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}
export default Contact;