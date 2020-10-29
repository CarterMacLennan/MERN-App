import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import axios from "axios";

export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            note : this.props.note,
        }
    }

    handleDelete() {
        console.log(this.state.note._id);
        axios.delete("/notes/delete/" + this.state.note._id).then( () => {
            this.props.get();
        });
    }

    render(){
        return (
            <div className="card border-dark mb-3" >
            <a className="close" href="#" onClick = {this.handleDelete}>×</a>
                <div className="card-header">
                    <div className="row ">
                        <h4 className="card-title"><strong>
                            <TextareaAutosize  className = "text-area-header" defaultValue = {this.state.note.title}/>
                        </strong></h4>
                    </div>
                </div>
                
                <div className="card-body text-dark">
                    <TextareaAutosize  className = "text-area-body" defaultValue = {this.state.note.body}/>
                </div>
            </div> 
        );
    }    

}