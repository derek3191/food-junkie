import React, { Component }  from 'react'

class MessageList extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }
    render() {
        return (
            <ul>
                
            </ul>
        )
    }
}

export default MessageList;

// const MessageList = ({data}) => (
//     <ul>
//         {data.map(message => <li key={message}>{message}</li>)}
//     </ul>
// );

// export default MessageList;