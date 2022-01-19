import React,{useState} from 'react'
import './App.css'
import database from './firebase';
import { getDatabase, ref, set } from "firebase/database";

function App() {
  const [text,setText] = useState('');
  const [ed,seted] = useState('');
  const [pn,setpn] = useState('');
  const handleSubmit = async()=> {
   
    await set(ref(database, 'questions/'+ed+' '+pn), {
      question:text
    });
    setText('');
    seted('');
    setpn('');
    alert('Question Submitted Successfully!');
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