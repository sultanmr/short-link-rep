
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''

        };
    }


    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({ email }, password, (err) => {
            if (!!err) {
                this.setState({ error: 'Unable to login, please check email and password.' });
            } else {
                this.setState({ error: '' });
                this.props.history.push('/');
            }
        });
    }

    render() {
        return (
            <div className='boxed-view'>
                <div className='boxed-view__box'>

                    <h1>Login Short Links</h1>
                    {this.state.error ? <p>{this.state.error}</p> : null}
                    <form className='boxed-view__form' onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email" />
                        <input type="password" ref="password" name="password" placeholder="Password" />
                        <button className='button'>Login</button>
                    </form>
                    <Link to='/signup'>Create an account?</Link>
                </div></div>
        );

    }
}
