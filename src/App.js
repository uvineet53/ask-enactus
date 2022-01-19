import React,{useState} from 'react'
import './App.css'
import database from './firebase';
import { getDatabase, ref, set } from "firebase/database";
import validator from 'validator';

function App() {
  var validator = require('validator');
  const [text,setText] = useState('');
  const [ed,seted] = useState('');
  const [pn,setpn] = useState('');
  const handleSubmit = async()=> {
    if(!(validator.isEmail(ed))){
      alert("Please enter valid email id");
      seted('');
    }
    else if(!(pn).match('[0-9]{10}'))  {
      alert("Please put 10 digit mobile number");
      setpn('');
    }
    else if(!text){
      alert("Please enter your query");
      setText('');
    }
    else{
      set(ref(database, 'questions/'+text), {
      question:ed+' , '+pn+"  :  "+text
    });
    setText('');
    seted('');
    setpn('');
    alert('Question Submitted Successfully!');
  }
  }
  return (
    <div>
      <h3>ask<span>Enactus</span></h3>
      <textarea placeholder="Enter your emailid..." id="emailid"  value={ed} onChange={e=>seted(e.target.value)} ></textarea>
      <textarea placeholder="Enter your phoneno..." id="phno"  value={pn} onChange={e=>setpn(e.target.value)}></textarea>
      <textarea placeholder="Drop your question here..." id="query"  value={text} onChange={e=>setText(e.target.value)}></textarea>
      <button id="submitBtn" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App