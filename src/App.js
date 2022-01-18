import React,{useState} from 'react'
import './App.css'
import database from '.firebase/database'
import { getDatabase, ref, set } from "firebase/database"

function App() {
  
  const [text,setText] = useState('');

  
    const handleSubmit = async() => {
      await set(ref(database, 'questions/'+text), {
        question:text
      });
      setText('')
      alert('Question Submitted Successfully!');
    }
  
  return (
    <div>
      <h3>ask<span>Enactus</span></h3>
      <textarea placeholder="Drop your question here..." rows="5" value={text} onChange={e=>setText(e.target.value)}></textarea>
      <button id="submitBtn" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App