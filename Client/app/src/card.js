import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import axios from "axios";

export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.state = {
            title : this.props.note.title,
            body : this.props.note.body,
        }
    }

    handleDelete() {
        console.log("Delete request: " + this.props.note._id);
        axios.delete("/notes/delete/" + this.props.note._id)
        .then(() => this.props.deleteItem())                    
          .catch(err => console.log(err))
    }

    handleSave() {
        axios.put("/notes/update/" + this.props.note._id, {title: this.state.title, body: this.state.body});
    }

    updateTitle(e){
        this.setState({title: e.target.value});
    }

    updateBody(e){
        this.setState({body: e.target.value});
    }

    render(){
        console.log("Added: " + this.props.note._id);
        return (
            <div className="card border-dark mb-3" >
            <button className="close" onClick = {this.handleDelete}>×</button>
                <div className="card-header">
                        <h4 className="card-title"><strong>
                            <TextareaAutosize  className = "text-area-header" onBlur = {this.handleSave} onChange = {(e) => this.updateTitle(e)} defaultValue = {this.state.title}/>
                        </strong></h4>
                </div>
                
                <div className="card-body text-dark">
                    <TextareaAutosize  className = "text-area-body" onBlur = {this.handleSave} onChange = {(e) => this.updateBody(e)} defaultValue = {this.state.body}/>
                </div>
            </div> 
        );
    }    

}