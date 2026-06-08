"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const tecnologias = [
  { nome: "Java", imagem: "/images/java.png" },
  { nome: "TypeScript", imagem: "/images/typescript.png" },
  { nome: "React", imagem: "/images/react.png" },
  { nome: "Next.js", imagem: "/images/nextjs.png" },
  { nome: "MySQL", imagem: "/images/mysql.png" },
  { nome: "Python", imagem: "/images/python.png" },
  { nome: "HTML5", imagem: "/images/html5.png" },
  { nome: "CSS", imagem: "/images/css.png" },
  { nome: "JavaScript", imagem: "/images/javascript.png" },
  { nome: "Node.js", imagem: "/images/nodejs.png" },
  { nome: "Git", imagem: "/images/git.png" },
];

export default function Habilidades() {
    return (
        <section id="habilidades" className={styles.container}>
            <div className={styles.sideContainer}>
                <div className={styles.softSkills}>
                    <h2 className={styles.titulo}><strong>SoftSkills</strong></h2>
                    <ul>
                        <li>
                        <strong>Comunicação: </strong>Tenho facilidade em me comunicar com
                        meus colegas e expressar ideias com clareza, o que contribui
                        bastante em apresentações e trabalhos em equipe.
                        </li>
                        <li>
                        <strong>Trabalho em grupo: </strong>Gosto de colaborar com outras
                        pessoas e valorizo diferentes perspectivas para alcançar os
                        melhores resultados.
                        </li>
                        <li>
                        <strong>Flexibilidade: </strong>Consigo me adaptar com facilidade
                        a mudanças repentinas, mantendo o foco nas soluções.
                        </li>
                        <li>
                        <strong>Empatia: </strong>Tenho facilidade em me colocar no lugar
                        do outro para compreender suas dificuldades ou situações pelas
                        quais esteja passando.
                        </li>
                    </ul>
                </div>
                <div className={styles.idiomaContainer}>
                    <h2 className={styles.titulo}><strong>Idiomas</strong></h2>
                    <ul>
                        <li>Inglês Intermediário</li>
                    </ul>
                </div>
            </div>
            <div className={styles.tecContainer}>
                <h2 className={styles.titulo}>Tecnologias</h2>

                <div className={styles.logos}>
                    {tecnologias.map((tec) => (
                        <div
                        key={tec.nome}
                        className={styles.logoItem}
                        title={tec.nome}
                        >
                        <Image
                            className={styles.logoImg}
                            src={tec.imagem}
                            alt={tec.nome}
                            width={70}
                            height={70}
                        />

                        <span className={styles.tooltip}>
                            {tec.nome}
                        </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}