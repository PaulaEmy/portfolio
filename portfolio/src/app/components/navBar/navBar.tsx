"use client";
import styles from "./page.module.css"
import { useState } from "react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <header>
      <nav className={styles.navBar}>
        <button
          className={styles.hamburger}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>
        <ul
          className={`${styles.navLinks} ${
            menuAberto ? styles.ativo : ""
          }`}
        >
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById("introducao")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              Introdução
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById("curriculo")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              Trajetória
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById("habilidades")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById("projetos")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              Projetos
            </a>
          </li>
          <li><a
              href="certificados/Curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >
              Currículo
            </a>
          </li>      
        </ul>
      </nav>
    </header>
  );
}