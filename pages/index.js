import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ersti Tage Dashboard</title>
     
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{fontSize:"45px"}}>
          Wilkommen beim <a >Ersti Tage Dashboard!</a>
        </h1>

        <p className={styles.description}>
          Hier findest du alles was du für die Ersti Tage und darüber hinaus brauchst!
        </p>

        <div className={styles.grid} >
          <a href="/anmeldung" className={styles.card} style={{backgroundColor:"gold"}} >
            <h2>VWI Anmeldung</h2>
            <p>Melde die hier beim VWI um nichts wichtiges zu Verpassen.</p>
          </a>

          <a href="/erstitage" className={styles.card}>
            <h2>Die Ersti Tage</h2>
            <p>Finde hier den Terminplan mit allen Aktivitäten der Ersti-Tage</p>
          </a>

          <a
            href="/termine"
            className={styles.card}
          >
            <h2>Terminplan</h2>
            <p>Hier findest du eine Übersicht aller Aktivitäten in den nächsten Wochen.</p>
          </a>

          <a
            href="https://www.vwi-kassel.de/"
            className={styles.card}
          >
            <h2>Die VWI-Website</h2>
            <p>
              Informier dich hier weiter über den VWI!
            </p>
          </a>
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
