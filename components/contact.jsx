import React, { useState, useEffect } from "react";
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import {db} from "./firebase.js"
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [senden, setSenden] = useState(false)

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

  return (senden ? <div className={styles.container}>
  

    <main className={styles.main}>
      <h1 className={styles.title} style={{marginBottom:"60px"}}>
        Du hast es fast <div>geschafft!</div>
      </h1>

      

      <div className={styles.grid} >
        <Link href="https://vwi.org/wp-content/uploads/2022/04/Mitgliedsantrag_online-Student.pdf" ><a className={styles.card} style={{ justifyContent:"center", backgroundColor:"gold"}}>
          <h2 style={{marginTop:"5px",}}>PDF Download</h2>
        </a></Link>

        <p className={styles.description}>
          Lade dir bitte die Anmeldung herunter und schicke sie ausgefüllt an:
          <div style={{color:"#0070f3", fontWeight:"bold"}}> melvin.arndt@vwi-ks.de</div>
      </p>
      </div>
    </main>

    <footer className={styles.footer}>
      <Link  href="https://www.vwi-kassel.de/wp/"><a
       
        target="_blank"
        rel="noopener noreferrer"
      >
       
          <img src="/vwi_logo.webp" alt="VWI Logo" style={{width:"80%", maxWidth:"250px"}}/>
   
      </a></Link>
    </footer>
  </div> :<> <h1 className={styles.title} style={{fontSize:"45px"}}>
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
        onClick={()=>{setSenden(true)}} 
      >
      Senden 
      </button>
    </form>
    </>  );
};

export default Contact;