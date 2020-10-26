import React from "react";


export default function Card(props){
    return (
        <div class="card">
            <div class="card-body">
                {/* information */}
                <h4 class="card-title"><strong>{props.project.information.title}</strong></h4>
                <p class="card-subtitle mb-2 ">{props.project.information.desc}</p>
            </div>
        </div> 
    );
}