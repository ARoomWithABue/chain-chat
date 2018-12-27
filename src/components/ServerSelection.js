import React, {Component} from "react";
import socket from 'socket.io-client';

class ServerSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            handler: props.handler,
            servers: props.servers,
            io: socket(`http://localhost:3001/${props.namespace}`)
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div id="Server-Select" className="flexBox">
                {
                    this.state.servers.map((obj) => {
                        return <button key={obj.name} className="shadow" style={{backgroundImage: `url("${obj.image}")`}}
                                       onClick={()=> {this.state.handler(obj.msg)}}></button>
                    })
                }
                <button className="Server-Add"></button>
            </div>
        );
    }
}

export default ServerSelector;