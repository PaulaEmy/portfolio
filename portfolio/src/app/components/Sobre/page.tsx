import styles from "./page.module.css";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="introducao" className={styles.container}>
      <h2 className={styles.titulo}>Introdução</h2>

      <div className={styles.conteudo}>
        <div className={styles.textoContainer}>
          <h3 className={styles.nome}>Paula Emy Tamay</h3>
          <h4>Desenvolvimento de Software Multiplataforma - FATEC SJC</h4>

          <p className={styles.introducao}>
            Estudante de Ciência da Computação com foco em
            Desenvolvimento Web.
          </p>

          <p className={styles.introducao}>
            Objetivo profissional: Desenvolvedora Full Stack com interesse em Desenvolvimento Web, participando da criação de soluções digitais eficientes e de qualidade.
          </p>

          <p className={styles.introducao}>
            Minhas áreas de interesse incluem Desenvolvimento Full Stack, Banco de Dados, Experiência do Usuário (UX) e tecnologias focadas na criação de aplicações modernas e responsivas.
          </p>
        </div>

        <div className={styles.fotoContainer}>
          <Image
            src="/images/paula.jpeg"
            alt="Paula Emy Tamay"
            fill
            className={styles.foto}
          />
        </div>
      </div>
    </section>
  );
}