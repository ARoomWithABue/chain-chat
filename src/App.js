import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import socket from 'socket.io-client'

const io = socket('http://67.161.123.168:3001');

function MessageList(props) {
    const msgs = props.msgs;
    const items = msgs.map((msg) =>
        <li>{msg}</li>
    );
    return (
        <ul>{items}</ul>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messages: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        io.on('chat message', (msg) => {
            console.log(`msg received: ${msg}`);
            this.msgHandler(msg);
        });
    }

    msgHandler(msg) {
        this.setState({messages: this.state.messages.concat(msg)});
    }

    clickHandler() {
        io.emit('chat message', this.state.value);
        this.setState({value: ""});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.clickHandler();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <MessageList msgs={this.state.messages}/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <button type="button" onClick={() => this.clickHandler()}>Send</button>
                </form>
            </div>
        );
    }
}

export default App;
