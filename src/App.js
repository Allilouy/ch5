import React from 'react';
import Name from './name.js';
import Photo from './photo.js';
import Wrapper from './wrapper.js'
import './App.css';
import photo from "./imageInSrc.jpg";
import Button from "./button.js"


function App() {
  let firstname= "Ali";
  let lastname= "Chbinou";
  return (
    <div className="App">
      <Wrapper>


<Name name={firstname+" "+lastname} style={{

  color:"red"

}}></Name>


<Photo src={photo}  />
<br />
<Button onClick={()=>{
window.location="https://www.facebook.com/Allilouy"  
}}> My facebook</Button>

<Button onClick={()=>{
window.location="https://www.instagram.com/allilouy/"  
}}> My instagram</Button>

</Wrapper>


    </div>
  );
}

export default App;
