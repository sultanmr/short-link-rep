import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''

        };
    }

    onSubmit(e) {

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        e.preventDefault();
        // if (password.length <9) {
        //         return this.setState ({error: 'Password must be more than 8 characters long'});
        // }
        console.log('Email:: ' + email);
        Accounts.createUser({ email, password }, (err) => {
            if (!!err) {
                this.setState({ error: 'onSubmit ' + err.reason });
            } else {
                this.setState({ error: '' });
            }
        });


    }

    render() {
        return (
            <div className='boxed-view'>
                <div className='boxed-view__box'>
                    <h1>Join Short Links</h1>
                    {this.state.error ? <p>{this.state.error}</p> : null}
                    <form className='boxed-view__form' onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email" />
                        <input type="password" ref="password" name="password" placeholder="Password" />
                        <button>Create an Account</button>
                    </form>
                    <Link to='/login'>Already have an account?</Link>
                </div></div>
        );

    }
}