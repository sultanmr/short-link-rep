import { Meteor } from 'meteor/meteor';
import React from 'react';
import Modal from 'react-modal';

export default class AddLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            isOpen: false,
            error: ''

        };
    }
    onSubmit(e) {
        e.preventDefault();

        const { url } = this.state;
        if (url) {
            Meteor.call('links.insert', url, (error) => {
                if (!error) {
                    this.handleModelClose();
                }else
                {
                    this.setState({error: error.message});
                }
            });
        }
    }

    onChange(e) {
        this.setState({ url: e.target.value.trim() });
    }

    handleModelClose () {
        this.setState({
            isOpen:false, 
            url:'', 
            error:''
        });
    }
    render() {
        return (
            <div>

            <button className='button' onClick={()=>this.setState({isOpen:true})}>+Add Link</button>
            <Modal 
            isOpen={this.state.isOpen} 
            contentLabel='Add Link'
            onAfterOpen={()=>{
                this.refs.url.focus();
            }}
            onRequestClose={this.handleModelClose.bind(this)}
            className='boxed-view__box'
            overlayClassName='boxed-view boxed-view--modal'
            >
            <h1>Add Link</h1>
            {this.state.error ? <p>{this.state.error}</p> : null}
                <form  className='boxed-view__form' onSubmit={this.onSubmit.bind(this)} >
                    <input
                        type="text"
                        placeholder="URL"
                        ref='url'
                        value={this.state.url}
                        onChange={this.onChange.bind(this)}
                    />
                    <button  className='button'>Add Link</button>
                    <button type='button' className='button button--secondary' onClick={this.handleModelClose.bind(this)}>Cancel</button>
                </form>
                

            </Modal>
            </div>
        );
    }
}

