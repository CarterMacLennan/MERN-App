import React from "react";
import Card from "./card";
import axios from "axios";

export default class GridLayout extends React.Component {
    constructor(props){
        super(props);

        this.handleGet = this.handleGet.bind(this);

        this.state = {
            info : null,
            refresh: null,
        }
    }

    handleGet(){
        axios.get("/notes").then( res => {
            this.setState({info : res.data, });
        });
    }

    componentDidMount(){
        this.handleGet();
    }

    render (){
        if(this.state.info != null)
            return (
            <div className="container-fluid">
                <div className=" card-columns">
                    {(this.state.info).map((note, index) => <div key = {index} ><Card note={note} refresh = {this.handleGet} /></div>)}
                </div>
            </div>
            
        );
        else
            return (<h1>loading...</h1>)
    } 
}
