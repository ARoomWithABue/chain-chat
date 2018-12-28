import React, {Component} from "react";

class ServerSelector extends Component {
    constructor(props) {
        super(props);
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
                    this.props.servers.map((obj) => {
                        return <button key={obj.name} className="shadow" style={{backgroundImage: `url("${obj.image}")`}}
                                       onClick={()=> {this.props.handler(obj.msg)}}></button>
                    })
                }
                <button className="Server-Add"></button>
            </div>
        );
    }
}

export default ServerSelector;