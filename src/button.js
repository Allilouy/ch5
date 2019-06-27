import React from 'react'


function Button(props){
    return(
        <div>
    {
(props.children) ? (<button
     onClick={props.onClick}>{props.children}</button>
    ): (<p>button hidden</p>) }
    </div>
           ) 
}
export default Button