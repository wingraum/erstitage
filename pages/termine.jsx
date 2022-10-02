
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
  

      <main className={styles.main}>
        <h1 className={styles.title} style={{fontSize:"45px"}}>
          Unser Terminkalender:
        </h1>

        <p className={styles.description}>
          Hier findest du alle Termine die in den nächsten Wochen anstehen!
        </p>
  
        <h1 className={styles.title} style={{fontSize:"35px", marginLeft:"-100px", marginTop:"50px",marginTop:"-20px"}}>
          Der Terminplan:
        </h1>
        <div style={{width:"100%"}}>
        <div className={styles.grid} >
          <div className={styles.card} style={{width:"100%"}}>
            <h2>Ersti-Bowling</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>25.10.2022</p>
          </div>
          <div className={styles.card} style={{width:"100%"}}>
            <h2>S+V Workshop</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>29.10.2022</p>
          </div> 
          <div className={styles.card} style={{width:"100%"}}>
            <h2>Bouldern</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>02.11.2022</p>
          </div>
           <div className={styles.card} style={{width:"100%"}}>
            <h2>Gruno</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>10-13.11.2022</p>
          </div>
          <div className={styles.card} style={{width:"100%"}}>
            <h2>Tramparty</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>24.11.2022</p>
          </div>
          <Link href="https://www.vwi-kassel.de/wp/termine/" ><a className={styles.card} style={{width:"100%"}}>
            <h2>Weiter Termine</h2>
            <p style={{ marginTop:"10px"}}>Hier findest du noch weitere Termine.</p>
          </a></Link>
        </div>
        </div>
        
        <div className={styles.grid}>
        <h1 className={styles.title} style={{fontSize:"25px", marginLeft:"0", marginTop:"50px"}}>
          Du hast noch Fragen? Dann schreibe uns einfach eine Email.
        </h1>
          <div className={styles.card} >
            <h2>Email:</h2>
            <p>melvin.arndt@vwi-ks.de</p>
          </div>

        </div>

    
      </main>

      <footer className={styles.footer}>
        <Link    href="https://www.vwi-kassel.de/wp/"><a
       
          target="_blank"
          rel="noopener noreferrer"
        >
         
            <img src="/vwi_logo.webp" alt="VWI Logo" style={{width:"80%", maxWidth:"250px"}}/>
     
        </a></Link>
      </footer>
    </div>
  )
}
