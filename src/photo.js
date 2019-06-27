import React from 'react';

function Photo(props){
    return(
        <img src={props.src} onClick={props.onClick}></img>
    )
}
export default Photo