import React, {Component} from "react";

class ServerChat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // user: props.user, // no need to save the object on the state when you have it already on props.
            channels: []
        }
    }


    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
          <div id="Server-Chat" className="flexRow flexFill">
              <div className="topBar flexFill" style={{backgroundColor: "Red"}}></div>
          </div>
        );
    }
}

export default ServerChat;