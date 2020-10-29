import React from "react";
import TextareaAutosize from 'react-textarea-autosize';

export default function Card(props){
    return (
        <div className="card border-dark mb-3" >
        <a className="close" href="#">×</a>
            <div className="card-header">
                <div className="row ">
                    <h4 className="card-title"><strong>{props.project.title}</strong></h4>
                </div>
            </div>
            
            <div className="card-body text-dark">
                <TextareaAutosize  defaultValue = {props.project.body}/>
            </div>
        </div> 
    );
}