import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import axios from "axios";

export default class Card extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title : this.props.note.title,
            body : this.props.note.body,
        }
    }

    handleDelete = () => {
        axios.delete("/notes/delete/" + this.props.note._id)
        .then(() => this.props.deleteItem())
        .catch(err => console.log(err));                
    }

    handleSave = () => {
        axios.put("/notes/update/" + this.props.note._id, {title: this.state.title, body: this.state.body})
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div className="card border-dark mb-3" >
            <button className="close" onClick = {this.handleDelete}>×</button>
                <div className="card-header">
                        <h4 className="card-title"><strong>
                            <TextareaAutosize  className = "text-area-header"  value = {this.state.title} onChange = {(e) => this.setState({title: e.target.value})} onBlur = {this.handleSave} />
                        </strong></h4>
                </div>
                
                <div className="card-body text-dark">
                    <TextareaAutosize  className = "text-area-body" value = {this.state.body} onChange = {(e) => this.setState({body: e.target.value})} onBlur = {this.handleSave} />
                </div>
            </div> 
        );
    }    

}