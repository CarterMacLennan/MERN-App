import React from "react";
import Card from "./card";
import axios from "axios";

export default class GridLayout extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            info : null,
        }
    }

    componentDidMount(){
        axios.get("/notes").then( res => {
            this.setState({info : res.data, });
            
            console.log(this.state.info);
        });
    }

    render (){
        if(this.state.info != null)
            return (
            <div className="container-fluid">
                <div className=" card-columns">
                    {(this.state.info).map((projects, index) => <div key = {index} ><Card project={projects}  /></div>)}
                </div>
            </div>
            
        );
        else
            return (<p>loading...</p>)
    } 
}
