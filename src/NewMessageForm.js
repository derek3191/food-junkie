import React, { Component } from 'react';

class NewMessageForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isSnackbarVisible: false,
            textValue: '',
            values: []

        }

        this.snackbarRef = React.createRef();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleTextChange = event => {
        this.setState({textValue: event.target.value});
    };

    handleSend = () => {
        this.setState({
            values: [...this.state.values, this.state.textValue],
            textValue: ''
        });
        
        this.showMessageAdded();

        console.log(`values:\n ${this.state.values}`);
    }
    
    showMessageAdded = () => {
        this.setState({ isSnackbarVisible: true });    
        
        
        setTimeout(() => {
            this.setState({isSnackbarVisible: false});
        }, 3000);        
    };

    render() {
        return(
            <div>
                <input type="text" data-testid="messageText" value={this.state.textValue} onChange={this.handleTextChange}/>
                <input type="submit" value="Send" data-testid="sendButton" onClick={this.handleSend} />

                <ul id="messageList">
                    {this.state.values.map(message => <li key={message}>{message}</li>)}
                </ul>

                <div id="snackbar" ref={this.snackbarRef} className={`${this.state.isSnackbarVisible ? "show" : ""}`}>Message Added!</div>
            </div>
        )
    };

}

export default NewMessageForm;
