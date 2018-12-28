import React, {Component} from "react";

class ServerChat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
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