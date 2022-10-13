import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ersti Tage Dashboard</title>
     
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{fontSize:"45px"}}>
          Wilkommen beim <Link href=""><a >Ersti Tage Dashboard!</a></Link>
        </h1>

        <p className={styles.description}>
          Hier findest du alles was du für die Ersti Tage und darüber hinaus brauchst!
        </p>

        <div className={styles.grid} >
    <Link href="/anmeldung"><a className={styles.card} style={{backgroundColor:"gold"}}><h2>VWI Anmeldung</h2><p>Melde die hier beim VWI um nichts wichtiges zu Verpassen.</p></a></Link>

    <Link href="/socialmedia"><a
            
            className={styles.card}
          >
            <h2>Social Media</h2>
            <p>Hier findest du eine Übersicht aller wichtigen Social Media Kanälen.</p>
          </a></Link>

          <Link href="/erstitage"><a  className={styles.card}>
            <h2>Die Ersti Tage</h2>
            <p>Finde hier den Terminplan mit allen Aktivitäten der Ersti-Tage</p>
          </a></Link>

          <Link href="/termine"><a
            
            className={styles.card}
          >
            <h2>Terminplan</h2>
            <p>Hier findest du eine Übersicht aller Aktivitäten in den nächsten Wochen.</p>
          </a></Link>

          <Link  href="https://www.vwi-kassel.de/"><a
           
            className={styles.card}
          >
            <h2>Die VWI-Website</h2>
            <p>
              Informier dich hier weiter über den VWI!
            </p>
          </a></Link>
        </div>
      </main>

      <footer className={styles.footer}>
       <Link        href="https://www.vwi-kassel.de/wp/"><a
   
          target="_blank"
          rel="noopener noreferrer"
        >
         
            <img src="/vwi_logo.webp" alt="VWI Logo" style={{width:"80%", maxWidth:"250px"}}/>
     
        </a></Link> 
      </footer>
    </div>
  )
}
