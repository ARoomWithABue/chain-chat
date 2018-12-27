import React, {Component} from 'react';
import './App.css';
import './index.css';
import socket from 'socket.io-client';
import ScatterBridge from './scatterBridge.js';
import ServerSelector from './components/ServerSelection.js';
import ServerInfo from "./components/ServerInfo";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messages: [],
            io: socket('http://localhost:3001/hello-telos'),
            network: {
                blockchain: "eos",
                protocol: "http",
                host: "127.0.0.1",
                port: 8888,
                chainId: "9f4183d0c2e5be6a662c3e62d78aa7f54e9795026febfe2d66392fc772a238c0"
                },
            scatterjs: null
        };

        this.state.io.emit('con-event', {
            user: 'user' + Math.random() * 2 + 1,
            connectionTime: new Date()
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTransaction = this.handleTransaction.bind(this);

        this.state.io.on('chat message', (msg) => {
            console.log(`msg received: ${msg}`);
            this.msgHandler(msg);
        });
    }

    componentWillMount() {
        this.setState({
            scatterjs: new ScatterBridge(this.state.network, "Chain Chat")
        })
    }

    async componentDidMount() {
        await this.state.scatterjs.connect();
    }

    msgHandler(msg) {
        this.setState({messages: this.state.messages.concat(msg)});
    }

    clickHandler() {
        this.state.io.emit('chat message', this.state.value);
        this.setState({value: ""});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.clickHandler();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    serverClickHandler(msg) {
        console.log(msg);
    }

    async handleTransaction() {
        await this.state.scatterjs.getIdentity();
        let action = this.state.scatterjs.makeAction("eosio.token", "transfer", {
           from: this.state.scatterjs.currentAccount.name,
           to: "testaccountz",
           quantity: "1.0000 TLOS",
           memo: "scatter integration test"
        });
        console.log(`from: ${this.state.scatterjs.currentAccount.name}`);
        await this.state.scatterjs.sendTx([action]);
    }

    render() {
        //NOTE: Mock Data
        let servers =  [
            {
                name:   "Server 1",
                msg:    "server 1 loading...",
                image:  "http://localhost:3000/images/GB_logo_256.jpg",
                channels: []
            },
            {
                name:   "Server 2",
                msg:    "server 2 loading...",
                image:  "http://localhost:3000/images/metal-logo-256.png",
                channels: []
            }
        ];

        let user = {
            profileName: "SilenceDoGood",
            firstName: "Peter",
            lastName: "Bue",
            image: "http://localhost:3000/images/user-profile.jpg"

        };

        let selectedServer = {
            name:   "Server 2",
            msg:    "server 2 loading...",
            image:  "http://localhost:3000/images/metal-logo-256.png",
            channels: []
        };

        return (
            <div className="App">
                <ServerSelector servers={servers} handler={this.serverClickHandler}/>
                <ServerInfo user={user} server={selectedServer}/>
            </div>
        );
    }
}

export default App;
