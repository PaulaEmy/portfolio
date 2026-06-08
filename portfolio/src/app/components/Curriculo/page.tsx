"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Curriculo() {
  const [abaAtiva, setAbaAtiva] = useState("educacao");
  const [atividadeAberta, setAtividadeAberta] = useState<number | null>(null);

  const atividades = [
    {
      titulo: "Feira técnica (2022)",
      local: "UNIVAP Centro",
      descricao: "Participação no evento com apresentação de um jogo de jogo da velha simples feito em python.",
    },
    {
      titulo: "Feira técnica (2023)",
      local: "UNIVAP Centro",
      descricao: "Participação no evento com apresentação de projeto e desenvolvimento de habilidades técnicas.",
    },
    {
      titulo: "Feira técnica (2024)",
      local: "UNIVAP Centro",
      descricao: "Apresentação de TCC.",
    },
    {
      titulo: "Maratona de Programação (2023)",
      local: "UNIVAP Urbanova",
      descricao: "Equipe - Pão com arroz",
    },
    {
      titulo: "Maratona de Programação (2024)",
      local: "UNIVAP Urbanova",
      descricao: "Equipe - Capivaras",
    },
    {
      titulo: "Maratona de Programação (2025)",
      local: "FATEC",
      descricao: "Equipe - Capivaras",
    },
    {
      titulo: "PyDay (2025)",
      local: "ETEC - SJC",
      descricao: "Participação em networking e palestras sobre python.",
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Minha Trajetória</h1>

      <div className={styles.curriculoContainer}>
        <div className={styles.menu}>
          <button
            className={abaAtiva === "educacao" ? styles.ativo : ""}
            onClick={() => setAbaAtiva("educacao")}
          >
            Educação
          </button>

          <button
            className={abaAtiva === "certificados" ? styles.ativo : ""}
            onClick={() => setAbaAtiva("certificados")}
          >
            Certificados
          </button>

          <button
            className={abaAtiva === "experiencias" ? styles.ativo : ""}
            onClick={() => setAbaAtiva("experiencias")}
          >
            Experiências
          </button>

          <button
            className={abaAtiva === "atividades" ? styles.ativo : ""}
            onClick={() => setAbaAtiva("atividades")}
          >
            Eventos / Atividades Extracurriculares
          </button>
        </div>

        <div key={abaAtiva} className={styles.conteudo}>
          {abaAtiva === "educacao" && (
            <>
              <h2>Educação</h2>

              <div className={styles.item}>
                <h3>FATEC</h3>
                <p>Desenvolvimento de Software Multiplataforma</p>
                <span>2025 - Presente</span>
              </div>

              <div className={styles.item}>
                <h3>UNIP</h3>
                <p>Ciência da Computação</p>
                <span>2025 - Presente</span>
              </div>

              <div className={styles.item}>
                <h3>Colégio Técnico UNIVAP Centro</h3>
                <p>Curso de Informática</p>
                <span>2022 - 2024</span>
              </div>
            </>
          )}

          {abaAtiva === "certificados" && (
            <>
              <h2>Certificados</h2>

              <div className={styles.item}>
                <a
                    href="certificados/certificado_Excel.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Introdução à Análise de Dados com Excel
                </a>
              </div>

              <div className={styles.item}>
                <a
                    href="certificados/certificado_maratona2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Maratona de Programação 2023
                </a>
              </div>

              <div className={styles.item}>
                <a
                    href="certificados/certificado_maratona2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Maratona de Programação 2024
                </a>
              </div>

              <div className={styles.item}>
                <a
                    href="https://badge.cps.sp.gov.br//view.aspx?b60d7b03-68b5-42ad-a259-cf3ec5e7a96d"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    FrontEnd Básico
                </a>
              </div>
            </>
          )}

          {abaAtiva === "experiencias" && (
            <>
              <h2>Experiências</h2>

              <div className={styles.item}>
                <h3>Infinity Academy</h3>

                <p>
                  Estágio em desenvolvimento de cenários em 3D
                </p>
                <span>
                    Atuação utilizando o Unity3D na criação de cenários e estudos sobre realidade virtual 
                    <ul>
                        <li>Estudo e criação de animação de objetos no cenário</li>
                        <li>Criação de uma UI interativa e esteticamente agradável</li>
                        <li>Habilidades desenvolvidas: C#, Design UI</li>
                    </ul>
                </span>
              </div>
            </>
          )}
          {abaAtiva === "atividades" && (
            <>
              <h2>Atividades Extracurriculares</h2>

              <div>
                {atividades.map((item, index) => {
                  const aberto = atividadeAberta === index;

                  return (
                    <div
                      key={index}
                      className={`${styles.item} ${
                        atividadeAberta === index ? styles.aberto : ""
                      }`}
                    >
                      <div
                        className={styles.headerAtividade}
                        onClick={() =>
                          setAtividadeAberta(aberto ? null : index)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <h3>
                          {item.titulo}
                        </h3>
                      </div>

                      {aberto && (
                        <div className={styles.conteudoAtividade}>
                          <p>{item.local}</p>
                          <p>{item.descricao}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}