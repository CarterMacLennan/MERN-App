import React from "react";
import TextareaAutosize from 'react-textarea-autosize';


export default function Card(props){
    return (
        <div class="card border-dark mb-3">
        <a class="close" href="#">×</a>
            <div class="card-header">
                <div class="row justify-content-end">
                    <div class="col-10">
                        <h4 class="card-title"><strong>{props.project.information.title}</strong></h4>
                    </div>
                </div>                
            </div>
            
            <div class="card-body text-dark">
                <TextareaAutosize  defaultValue = {props.project.information.desc}/>
            </div>
        </div> 
    );
}