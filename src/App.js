import React,{useState} from 'react'
import './App.css'
import validator from 'validator';
import { v4 as uuid } from 'uuid';
import database from './firebase';
import { getDatabase,ref,set } from 'firebase/database';


function App() {
  const unique_id = uuid();
  var validator = require('validator');
  const [text,setText] = useState('');
  const [emailid,setEmailid] = useState('');
  const [mobnum,setMobileNumber] = useState('');
  const handleSubmit = async()=> {
    if(!(validator.isEmail(emailid))){
      alert("Please enter valid email id");
      setEmailid('');
    }
    else if(!(mobnum).match('[0-9]{10}'))  {
      alert("Please put 10 digit mobile number");
      setMobileNumber('');
    }
    else if(!text){
      alert("Please enter your query");
      setText('');
    }
    else{
      set(ref(database, 'questions/'+unique_id), {
       emailid,mobnum,question:text
    });
    setText('');
    setEmailid('');
    setMobileNumber('');
    alert('Question Submitted Successfully!');
  }
}

  return (
    <div>
      <h3>ask<span>Enactus</span></h3>
      <textarea placeholder="Enter your email Id" rows="1" id="emailid" value={emailid} onChange={e=>setEmailid(e.target.value)}></textarea>
      <textarea placeholder="Enter your mobile number" rows="1" id="phoneno" value={mobnum} onChange={e=>setMobileNumber(e.target.value)}></textarea>
      <textarea placeholder="Drop your question here..." rows="5" id="query" value={text} onChange={e=>setText(e.target.value)}></textarea>
      <button id="submitBtn" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App;