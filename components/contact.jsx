import React, { useState, useEffect } from "react";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import {db} from "./firebase.js"
import styles from '../styles/Home.module.css'
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

    const userCollectionRef = collection(db, "contacts")

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    addDoc(userCollectionRef,{
        name: name,
        email: email,
        message: message 
    })
    
    /*db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });*/

    setName("");
    setEmail("");
    setMessage("");
  };

  return (<> <h1 className={styles.title} style={{fontSize:"45px"}}>
    Anmeldung
  </h1>
  <p className={styles.description} style={{ marginTop:"40px"}}>
          Bitte achte darauf, dass du alle Daten richtig einträgst, damit wir dich in die Whatsappgruppe und den Emailverteiler hinzufügen können.
        </p>

    <form className="form" onSubmit={handleSubmit} style={{marginTop:"-250px"}}>
        

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Handynnummer</label>
      <input
        placeholder="Handynummer"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>

      <button
        type="submit"
        style={{ background: loader ? "0070f3" : "#0070f3" }}
        
      >
       <a href="/mitgliedwerden"> Senden</a>
      </button>
    </form>
    </>  );
};

export default Contact;