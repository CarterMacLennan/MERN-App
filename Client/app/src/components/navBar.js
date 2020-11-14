import React from "react";
import axios from "axios";

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    handleCreate = async () => {
        try {
            await axios.post("https://mernnotesapplication.herokuapp.com/notes/create/");
            this.props.getItems();
        } catch(err) {
            console.log(err);
        }
    }

    render(){
        const WEB_APP_NAME = "//todo";
        return (
            <nav className = "navbar bg-dark navbar-dark">
                <span className = "navbar-brand mb-0 h1 text-warning">{WEB_APP_NAME}</span>
                <span>
                    <button onClick = {this.handleCreate} className="btn btn-md btn-warning" type="button"><i className="fas fa-plus "></i></button>
                </span>
            </nav>
        );
    }
}