import styles from "./page.module.css"
import Navbar from "./components/navBar/navBar";
import Sobre from "./components/Sobre/page";
import Curriculo from "./components/Curriculo/page";
import Reveal from "./components/reveal/reveal";
import Projetos from "./components/Projetos/page";
import Habilidades from "./components/Habilidades/page";
import Contatos from "./components/Contatos/page";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section className={styles.portfolio}>
        <h1 className={styles.titulo}><strong>Portfólio</strong></h1>
        <p className={styles.subTitulo}>Paula Emy Tamay | Desenvolvedora Web</p>
      </section>
      <Reveal>
        <section id="introducao">
          <Sobre />
        </section>
      </Reveal>
      <Reveal>
        <section id="curriculo">
          <Curriculo />
        </section>
      </Reveal>
      <Reveal>
        <section id="habilidades">
          <Habilidades />
        </section>
      </Reveal>
      <Reveal>
        <section id="projetos">
          <Projetos />
        </section>
      </Reveal>
        <section id="contatos">
          <Contatos />
        </section>
    </>
  );
}