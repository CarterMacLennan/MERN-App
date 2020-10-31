import React from "react";
import Card from "./card";
import axios from "axios";

export default class LandingPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            info : null,
            loading : false,
        }
    }

    componentDidMount(){
        this.handleGet();
    }

    handleGet = () => {
        this.setState({loading : true});
        axios.get("/notes").then( res => {
            this.setState({info : res.data, loading : false});
        });
    }
    
    handleCreate = () => {
        axios.post("/notes/create/").then( () => {
            this.handleGet();
        });
    }

    renderNavBar(){
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

    renderMainContent(){
        if(this.state.loading !== true && this.state.info !== null){
            return (
                <div className = "container-fluid">
                    <div className = "card-columns">
                        {(this.state.info).map((note, index) => <div key = {index} ><Card note={note} deleteItem = {this.handleGet} /></div>)}
                    </div>
                </div>
            );
        } else {
            return (
                <div className = "centered">
                    <div className = "spinner-border spinner-border-xl text-warning"></div>
                </div>
            );
        }
    }

    render (){
        return (
            <div>
                {this.renderNavBar()}
                {this.renderMainContent()}
            </div>
        );
    }
}


