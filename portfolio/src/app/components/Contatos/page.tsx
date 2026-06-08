"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contatos() {
    return (
        <section id="contatos" className={styles.container}>
            <div className={styles.conteudo}>
                <h1>Contatos</h1>
                <div className={styles.texto}>
                    <p>paulaemytamay@gmail.com</p>
                    <p>(12) 98235-5367</p>
                </div>
                <div className={styles.links}>
                    <p><a href="https://github.com/PaulaEmy" target="_blank">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/paula-tamay-7a168228a/">LinkedIn</a></p>
                    <p><a href="https://www.instagram.com/paulatamay_/">Instagram</a></p>
                </div>
                </div>
        </section>
    )
}
