import React from "react";
import Card from "./card";
import axios from "axios";
import NavBar from "./navBar";

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

    handleGet = async () => {
        this.setState({loading : true});
        try {
            let res = await axios.get("/notes");
            this.setState({info : res.data, loading : false});
        } catch(err) {
            console.log(err);
        }
    }

    renderMainContent(){
        if(this.state.loading !== true && this.state.info !== null){
            return (
                <div className = "container-fluid">
                    <div className = "card-columns">
                        {(this.state.info).map((note, index) => <div key = {index} ><Card note={note} getItems = {this.handleGet} /></div>)}
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
                <NavBar getItems = {this.handleGet} />
                {this.renderMainContent()}
            </div>
        );
    }
}


