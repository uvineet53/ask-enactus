import React, { useState } from "react";
import "./App.css";
import database from "./firebase";
import { ref, set } from "firebase/database";
import validator from "validator";
import { v4 as uuid } from "uuid";
import useModal from "./components/useModal";
import Modal from "./components/modal";

function App() {
  
  const [values, setValues] = useState({
    email: "",
    phone: "",
    question: "",
  });

  const setVal = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const { isShowing, toggle } = useModal();
  const [modalText, setModalText] = useState("");

  const saveFormData = async () => {
    try {
      set(ref(database, `questions/${uuid()}`), values);
    } catch (e) {
      console.log(e.message);
    }
  };

 
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        !validator.isEmail(values.email) ||
        !values.phone.match("[0-9]{10}") ||
        values.question === ""
      ) {
        setModalText("Form isn't filled correctly!");
        toggle();
      } else {
        await saveFormData();
        setModalText("Query Successfully Submitted!");
        toggle();
        setValues({
          id: "",
          email: "",
          phone: "",
          question: "",
        });
      }
    } catch (e) {
      setModalText(`Failed to Submit ${e.message}`);
      toggle();
    }
  };

  return (
    <div id="main">
      <form onSubmit={onSubmit}>
        <Modal isShowing={isShowing} hide={toggle} text={modalText} />
        <h3>
          ask<span>Enactus</span>
        </h3>
        <input
          placeholder="Enter your Email ID"
          value={values.email}
          type="text"
          onChange={setVal("email")}
        ></input>
        <input
          placeholder="Enter your Phone No."
          value={values.phone}
          type="text"
          onChange={setVal("phone")}
        ></input>
        <textarea
          placeholder="Drop your question here..."
          value={values.question}
          rows="5"
          maxLength="100"
          onChange={setVal("question")}
        ></textarea>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
