import Image from "next/image"

import styles from "../styles/About.module.css"

export default function About(){
    return (
        <div className={styles.about}>
            <h1>Sobre</h1>
            <p>Este projeto foi feito por Miqueias Befort com a tecnologia de NEXT.JS</p>
            <Image 
                src="/images/charizard.png"
                width="300"
                height="300"
                alt="Charizard"
            />

            <p>Links:</p>
            <div className={styles.links}>
                <a href="http://miqueiasbelfort.netlify.app/">Portfolio</a>
                <a href="https://github.com/miqueiasbelfort">Github</a>
                <a href="https://www.linkedin.com/in/miqueias-belfort/">LinkedIn</a>
            </div>
        </div>
    )
}