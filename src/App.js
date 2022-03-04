import React from "react"; 
import {useState} from "react";
import './App.css';

function App (){
  // A State Capturing Inputs 
    const [text, setText] = useState("");
  
  //A state holding our datas
    const [lsetf, setLsetf] = useState([]);
  
  // Function for Posting
    const Post = () => {
      const items = {
        id : lsetf.length + 1,
        Comment: text,
      };
      setLsetf([...lsetf, items]);
    // Responsible for Removing items in our input
      setText("");
    }
  
    console.log(lsetf);
    console.log(text);
  
    return(
      <div className="CardHolder">
        <br /> 
  {/* OUR INPUT */}
        <input value={text} onChange={(e)=>{setText(e.target.value)
           console.log(text)
        }} placeholder="Type your comment"/>
        <br />
  
  {/* BUTTON FOR CALLING OUR POST FUNCTION */}
        <button onClick={()=>{
          Post()
          console.log('Have Posted')
        }}>Comment</button>
  
  {/* This is where our Datas are being Mapped */}
        {lsetf.map((props)=>(
          <div className="Card">
            <div>{props.id}.</div>
            <div>Name:{props.Comment}</div>
            {/* <div>Age:{props.age}</div>
            <div>Sex:{props.sex}</div> */}
            <button className="Delete">Delete</button>
          </div>
        ))}
      </div>
    )
  }
  
  export default App
  
  
  
  
  
  
  
  