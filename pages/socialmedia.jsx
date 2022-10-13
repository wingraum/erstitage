
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
  

      <main className={styles.main}>
        <h1 className={styles.title} style={{fontSize:"45px"}}>
          Social Media:
        </h1>

        <p className={styles.description}>
        Hier findest du eine Übersicht aller wichtigen Social Media Kanäle und der Whatsappgruppen.
        </p>
  
        <h1 className={styles.title} style={{fontSize:"35px", marginLeft:"-00px", marginTop:"50px",marginTop:"-20px"}}>
          Whatsappgruppen:
        </h1>
        <div style={{width:"100%"}}>
        <div className={styles.grid} >
          <Link href="https://chat.whatsapp.com/Fz7aQNKcB5e64paVkt6if5" ><a className={styles.card} style={{width:"100%"}}>
            <h2>Fachrichtung Elektrotechnik</h2>
            
          </a></Link>
          <Link href="https://chat.whatsapp.com/ICd95C9lf9nEXteeFaNUm0" ><a className={styles.card} style={{width:"100%"}}>
            <h2>Fachrichtung Maschinenbau</h2>
          
          </a></Link>
          <Link href="https://chat.whatsapp.com/B80IVuGQnIHExzcbe46tjn" ><a className={styles.card} style={{width:"100%"}}>
            <h2>Fachrichtung Bauingeneurwesen</h2>
          
          </a></Link>
          <Link href="https://chat.whatsapp.com/FLSJN3eI2VK5p68URHREb7" ><a className={styles.card} style={{width:"100%"}}>
            <h2>Masterstudierende</h2>
          
          </a></Link>
        </div>
        <h1 className={styles.title} style={{fontSize:"35px", marginLeft:"-100px", marginTop:"20px"}}>
          Social Media:
        </h1>
        <div className={styles.grid} >
        <Link href="https://www.instagram.com/vwikassel/" ><a className={styles.card} style={{width:"100%"}}>
            <h2>Instagram</h2>
            
          </a></Link>
          <Link href="https://www.linkedin.com/company/vwi-kassel/" ><a className={styles.card} style={{width:"100%"}}>
            <h2>LinkedIn</h2>
            
          </a></Link>
        </div></div>
        
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
