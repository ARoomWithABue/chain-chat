import React, {Component} from 'react';
import './App.css';
import ServerSelector from './components/ServerSelection.js';
import ServerInfo from "./components/ServerInfo.js";
import ServerChat from "./components/ServerChat.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }

    serverClickHandler(msg) {
        console.log(msg);
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
                <ServerChat/>
            </div>
        );
    }
}

export default App;
