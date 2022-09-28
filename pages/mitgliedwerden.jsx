
import styles from '../styles/Home.module.css'

export default function Mitgliedwerden() {
  return (
    <div className={styles.container}>
  

      <main className={styles.main}>
        <h1 className={styles.title} style={{marginBottom:"60px"}}>
          Du hast es fast <a >geschafft!</a>
        </h1>

        

        <div className={styles.grid} >
          <a href="https://vwi.org/wp-content/uploads/2022/04/Mitgliedsantrag_online-Student.pdf" className={styles.card} style={{ justifyContent:"center", backgroundColor:"gold"}}>
            <h2 style={{marginTop:"5px",}}>PDF Download</h2>
          </a>

          <p className={styles.description}>
            Lade dir bitte die Anmeldung herunter und schicke sie ausgefüllt an:
            <a style={{color:"#0070f3", fontWeight:"bold"}}> info@vwi.org</a>
        </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.vwi-kassel.de/wp/"
          target="_blank"
          rel="noopener noreferrer"
        >
         
            <img src="/vwi_logo.webp" alt="VWI Logo" style={{width:"80%", maxWidth:"250px"}}/>
     
        </a>
      </footer>
    </div>
  )
}
