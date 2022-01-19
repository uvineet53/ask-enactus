import React,{useState} from 'react'
import './App.css'
import database from './firebase';
import { getDatabase, ref, set } from "firebase/database";
import validator from 'validator';
import { v4 as uuid } from 'uuid';

function App() {
  const unique_id = uuid();
  var validator = require('validator');
  const [text,setText] = useState('');
  const [emailid,setemailid] = useState('');
  const [phoneno,setphoneno] = useState('');
  const handleSubmit = async()=> {
    if(!(validator.isEmail(emailid))){
      alert("Please enter valid email id");
      setemailid('');
    }
    else if(!(phoneno).match('[0-9]{10}'))  {
      alert("Please put 10 digit mobile number");
      setphoneno('');
    }
    else if(!text){
      alert("Please enter your query");
      setText('');
    }
    else{
      set(ref(database, 'questions/'+unique_id), {
       emailid,phoneno,question:text
    });
    setText('');
    setemailid('');
    setphoneno('');
    alert('Question Submitted Successfully!');
  }
  }
  return (
    <div>
      <h3>ask<span>Enactus</span></h3>
      
      <textarea placeholder="Enter your Email ID" id="emailid"  value={emailid} onChange={e=>setemailid(e.target.value)} ></textarea>
      <textarea placeholder="Enter your Phone No." id="phno"  value={phoneno} onChange={e=>setphoneno(e.target.value)}></textarea>
      <textarea placeholder="Drop your question here..." id="query"  value={text} onChange={e=>setText(e.target.value)}></textarea>
      <button id="submitBtn" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App