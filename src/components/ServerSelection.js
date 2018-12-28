import React, {Component} from "react";

class ServerSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            handler: props.handler,
            servers: props.servers
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
            <div id="Server-Select" className="flexColumn">
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