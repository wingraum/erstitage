
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Mitgliedwerden() {
  return (
    <div className={styles.container}>
  

      <main className={styles.main}>
        <h1 className={styles.title} style={{marginBottom:"60px"}}>
          Du hast es fast <div >geschafft!</div>
        </h1>

        

        <div className={styles.grid} >
          <Link href="https://vwi.org/wp-content/uploads/2022/04/Mitgliedsantrag_online-Student.pdf" ><a className={styles.card} style={{ justifyContent:"center", backgroundColor:"gold"}}>
            <h2 style={{marginTop:"5px",}}>PDF Download</h2>
          </a></Link>

          <p className={styles.description}>
            Lade dir bitte die Anmeldung herunter und schicke sie ausgefüllt an:
            <div style={{color:"#0070f3", fontWeight:"bold"}}> info@vwi.org</div>
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
    </div>
  )
}
