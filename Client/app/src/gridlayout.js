import React from "react";
import Card from "./card";
import axios from "axios";

export default class GridLayout extends React.Component {
    constructor(props){
        super(props);
        this.handleGet = this.handleGet.bind(this);
        this.handleCreate = this.handleCreate.bind(this);

        this.state = {
            info : null,
        }
    }

    componentDidMount(){
        this.handleGet();
    }

    handleGet(){
        axios.get("/notes").then( res => {
            this.setState({info : res.data, });
        });
    }
    
    handleCreate(){
        axios.post("/notes/create/").then( () => {
            this.handleGet();
        });
    }

    render (){
        const WEB_APP_NAME = "//todo";
        if(this.state.info != null)
            return (
                <div>
                    <nav className="navbar bg-dark navbar-dark">
                        <span className="navbar-brand mb-0 h1 text-warning">{WEB_APP_NAME}</span>
                        <span>
                            <button onClick = {this.handleCreate} className="btn btn-md btn-warning" type="button"><i className="fas fa-plus "></i></button>
                        </span>
                    </nav>
                <div className="container-fluid">
                    <div className=" card-columns">
                        {(this.state.info).map((note, index) => <div key = {index} ><Card note={note} get = {this.handleGet}/></div>)}
                    </div>
                </div>
            </div>
        );
        else
            return (<h1>loading...</h1>)
    } 
}
