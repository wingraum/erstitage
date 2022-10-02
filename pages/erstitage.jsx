import styles from '../styles/Home.module.css'
import Timetable from 'react-timetable-events'
import Link from 'next/link'
let theactualtime
let theactualday
const time = require('node-get-time');
export default function ErstiTage() {
  
        let str = time.now()
        let strsplit = str.split(":")
        theactualtime = strsplit[0]
        let str1
        time.gettime(function(time){str1 = time});
        let theactualday = str1.date
        console.log(theactualday)
  return (
    <div className={styles.container}>
  

      <main className={styles.main}>
        <h1 className={styles.title} style={{fontSize:"45px"}}>
          Die <a> Ersti-Tage</a>
        </h1>
        
  
        <h1 className={styles.title} style={{fontSize:"35px", marginLeft:"-100px", marginTop:"50px"}}>
          Der Timetable:
        </h1>

        {theactualday !== "2022/09/28" && theactualday !== "2022/09/29"?
        <div style={{width:"100%"}}>
        <h1 className={styles.title} style={{fontSize:"25px", marginLeft:"-250px", marginTop:"10px"}}>
          Montag:
        </h1>
        <div className={styles.grid} >
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 10 && theactualtime < 11 ? "#0070f3" : "none" }}>
            <h2>Inoffizielle Begrüßung</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>10-11 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 11 && theactualtime < 12 ? "#0070f3" : "none" }}>
            <h2>Offizielle Begrüßung</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>11-12:30 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 12 && theactualtime < 13 ? "#0070f3" : "none" }}>
            <h2>Gruppenfoto</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>12:30-13 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 13 && theactualtime < 14 ? "#0070f3" : "none" }}>
            <h2>Mittagspause</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>13-14 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 14 && theactualtime < 15 ? "#0070f3" : "none" }}>
            <h2>Vorstellung des VWI</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>14-14:30 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 15 && theactualtime < 18 ? "#0070f3" : "none" }}>
            <h2>Campusrallye</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>14:30-18 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 18 && theactualtime < 20 ? "#0070f3" : "none" }}>
            <h2>Freizeit</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>18-20 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 20 && theactualtime < 24 ? "#0070f3" : "none" }}>
            <h2>Abendprogramm</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>20 Uhr</p>
          </div>
        </div>
        </div>:""}
        {theactualday === "2022/09/28" ?
        <div style={{width:"100%"}}>
        <h1 className={styles.title} style={{fontSize:"25px", marginLeft:"-250px", marginTop:"10px"}}>
          Dienstag:
        </h1>
        <div className={styles.grid} >
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 9 && theactualtime < 10 ? "#0070f3" : "none" }}>
            <h2>Mastereinführung</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>9:30-10 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 10 && theactualtime < 11 ? "#0070f3" : "none" }}>
            <h2>Vorstellung His, Moodle, Wing</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>10-11 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 11 && theactualtime < 12 ? "#0070f3" : "none" }}>
            <h2>Vorstellung Fb07</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>11-12:00 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 12 && theactualtime < 13 ? "#0070f3" : "none" }}>
            <h2>Mittagspause</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>12-13 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 13 && theactualtime < 15 ? "#0070f3" : "none" }}>
            <h2>Tipps und Tricks</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>13-15 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 15 && theactualtime < 18 ? "#0070f3" : "none" }}>
            <h2>Stadtrallye</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>15-18 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 20 && theactualtime < 24 ? "#0070f3" : "none" }}>
            <h2>Abendprogramm</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>20 Uhr</p>
          </div>
        </div>
        </div>:""}
        {theactualday === "2022/09/29" ?
        <div style={{width:"100%"}}>
        <h1 className={styles.title} style={{fontSize:"25px", marginLeft:"-250px", marginTop:"10px"}}>
          Mittwoch:
        </h1>
        <div className={styles.grid} >
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 10 && theactualtime < 12 ? "#0070f3" : "none" }}>
            <h2>Aus dem Alltag eines Wirtschafting.</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>10-12 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 11 && theactualtime < 12 ? "#0070f3" : "none" }}>
            <h2>Mittagspause</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>12-14 Uhr</p>
          </div>
          <div className={styles.card} style={{width:"100%", backgroundColor: theactualtime >= 12 && theactualtime < 13 ? "#0070f3" : "none" }}>
            <h2>Rundgang Ing.-Schule</h2>
            <p style={{fontWeight:"bold", marginTop:"10px"}}>14-16 Uhr</p>
          </div>
        </div>
        </div>:""}

        
        
        <div className={styles.grid}>
        <h1 className={styles.title} style={{fontSize:"25px", marginLeft:"0", marginTop:"50px"}}>
          Du hast uns verloren? Dann rufe einfach diese Nummer an.
        </h1>
          <div  className={styles.card} >
            <h2>Telefonnummer:</h2>
            <p>+491602387484</p>
          </div>

        </div>

      
     
      </main>

      <footer className={styles.footer}>
        <Link href="https://www.vwi-kassel.de/wp/"><a
          
          target="_blank"
          rel="noopener noreferrer"
        >
         
            <img src="/vwi_logo.webp" alt="VWI Logo" style={{width:"80%", maxWidth:"250px"}}/>
     
        </a></Link>
      </footer>
    </div>
  )
}
