import React from "react";
import Card from "./card";
import CardInfo from "./cardInfo";

//todo make rows begin beneath the last column (Card Column)

export default function GridLayout(){
    return (
        <div className="container-fluid">
            <div className=" card-columns">
                {CardInfo.map(projects => <div ><Card project={projects} /></div>)}
            </div>
        </div>
        
    );
}