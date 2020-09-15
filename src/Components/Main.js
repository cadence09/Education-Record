import React from "react";

function Main(props){

    return (
        <div>

    <p>Welcome to {props.location.state}'s education page.</p>
    <button>Add New Education</button>
    <div className="education">
        
    </div>
        </div>
    )
}

export default Main