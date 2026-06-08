"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Modal from "../Modal/modal";

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<any>(null);
  const [imagemAtual, setImagemAtual] = useState(0);

  useEffect(() => {
  setImagemAtual(0);
  }, [projetoSelecionado]);

  useEffect(() => {
    if (projetoSelecionado) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto";
    };
  }, [projetoSelecionado]);

  const projetos = [
    {
      titulo: "Site de avaliação de projetos para Feira Técnica",
      metodologia: "Metodologia SCRUM",
      descricao:
        "Projeto desenvolvido para meu TCC. O sistema permite o cadastro dos projetos e avaliação digital por professores e visitantes.",
      objetivos: [
        "Otimizar a aplicação de notas em projetos da feira técnica",
        "Cadastro de projetos",
        "Funcionalidade de avaliação dos projetos por professores e visitantes",
        "Geração de crachás personalizados para cada aluno"
      ],
      problemaIdentificado: [
        "Processo de avaliação realizado manualmente em formulários de papel",
        "Dificuldade na organização e armazenamento dos dados das avaliações realizadas durante a feira técnica",
        "Falta da participação dos visitantes na avaliação e fornecimento de feedback aos alunos",
        "Tempo elevado para tabulação dos resultados e divulgação das notas finais dos projetos",
        "Alto consumo de papel e recursos físicos durante o processo de avaliação"
      ],
      solucao: "Criação de um sistema web que digitalizou o processo de avaliação da Feira Técnica, permitindo o cadastro dos projetos, a avaliação online por professores e visitantes e a centralização dos resultados em uma única plataforma.",
      tecnologias: ["HTML", "CSS", "JavaScript", "MySQL"],
      url: "https://github.com/PaulaEmy/tcc",
      desafio: "Criação de um crachá personalizado para cada aluno com um QRCode para avaliação do projeto",
      solucaoTecnica: "Utilização da biblioteca QRCode.js para geração de QRCodes",
      imagens: [
        "/images/tcc_img1.png",
        "/images/tcc_img2.png",
        "/images/tcc_img3.png",
        "/images/tcc_img4.png",
        "/images/tcc_img5.png",
        "/images/tcc_img6.png",
      ]
    },

    {
      titulo: "Site para análise de dados de exportação e importação do estado de SP",
      metodologia: "Metodologia SCRUM",
      descricao:
        "Este projeto teve como objetivo desenvolver uma API para análise de dados das exportações e importações do estado de São Paulo. A solução permitirá a extração e visualização de informações estratégicas sobre os produtos exportados e importados.",
      objetivos: [
        "Segmentação de dados por município",
        "Filtros para busca por código de exportação e importação",
        "Visualização da evolução histórica da balança comercial",
        "Normalização e análise de dados entre 2013 e 2023",
        "Interface web responsiva com gráficos interativos"
      ],
      problemaIdentificado: [
        "Grande volume de dados brutos distribuídos em diferentes fontes, dificultando a análise.",
        "Ausência de uma ferramenta centralizada para consulta e análise das informações de comércio exterior do estado de São Paulo.",
        "Dificuldade em identificar tendências e indicadores estratégicos devido à falta de visualizações adequadas.",
        "Necessidade de tratamento e padronização dos dados para garantir análises confiáveis ao longo dos anos."
      ],
      solucao: "Interface web responsiva com filtros avançados (NCM, país, cidade) e gráficos interativos, consumindo dados de um banco MySQL populado e tratado via script Python.",
      tecnologias: ["HTML", "Python", "CSS", "MySQL", "Flask", "Pandas"],
      url: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-1DSM-API",
      desafio: "Criação de função para query SQL",
      solucaoTecnica: "Utilização SQLAlchemy para criação de funções query para filtrar informações do gráfico.",
      imagens: [
        "/images/proj2_img1.png",
        "/images/proj2_img2.png",
        "/images/proj2_img3.png",
        "/images/proj2_img4.png",
        "/images/proj2_img5.png",
      ]
    },
    {
      titulo: "Plataforma integrada de gestão",
      metodologia: "Metodologia SCRUM",
      descricao:
        "Este projeto tem como objetivo desenvolver uma plataforma única que centralize e padronize processos administrativos, comerciais e operacionais da Newe Log, garantindo maior eficiência e controle para a empresa. A solução permitirá a visualização de informações, notificações e relatórios de forma integrada.",
        objetivos: [
        "Centralização de dados e processos em um único ambiente",
        "Automação de eventos administrativos e treinamentos",
        "Gestão de clientes e vendas (CRM) com histórico completo e funil comercial",
        "Unificação de checklists operacionais dispersos em diferentes ferramentas",
        "Relatórios estratégicos e dashboards em tempo real"
      ],
      problemaIdentificado: [
        "Utilização de múltiplas ferramentas isoladas para gerenciar processos administrativos, comerciais e operacionais.",
        "Fragmentação das informações.",
        "Dificuldade na obtenção de relatórios consolidados para acompanhamento dos indicadores da empresa.",
        "Falta de padronização dos processos internos."
      ],
      solucao: "Ambiente unificado com gestão de clientes (funil de vendas), automação de eventos, centralização de checklists e dashboards estratégicos em tempo real.",
      tecnologias: ["HTML", "CSS", "Node.Js", "TypeScript", "React", "TypeORM"],
      url: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-2DSM-API",
      desafio: "Implementação de um kanban para melhor visualização e gerenciamento de vendas",
      solucaoTecnica: "Implementação da funcionalidade 'draggable' e bibliotecas para integração do backend",
      imagens: [
        "/images/proj3_img1.png",
        "/images/proj3_img2.png",
        "/images/proj3_img3.png",
        "/images/proj3_img4.png",
        "/images/proj3_img5.png",
        "/images/proj3_img6.png",
        "/images/proj3_img7.png",
      ]
    },
    {
      titulo: "Projeto de controle de apontamento de horas",
      metodologia: "Metodologia SCRUM",
      descricao:
        "Sistema desenvolvido para a GSW Soluções Integradas com o objetivo de centralizar o registro de horas dos colaboradores e melhorar o acompanhamento das atividades dos projetos. A plataforma permite o apontamento remoto de horas, oferece maior visibilidade para líderes e gera dados confiáveis para análise de custos, contribuindo para uma gestão mais eficiente e para a tomada de decisões baseada em dados.",
      objetivos: [
        "Profissionais com um lugar padronizado para registrar, editar e acompanhar seus apontamentos de horas por projeto e tipo de atividade",
        "Gestores com controle sobre a estrutura de usuários e projetos cadastrados",
        "Gestores com visibilidade clara da alocação do time, status das tarefas e identificação de gargalos em tempo real",
        "Financeiro/Administrador com dados confiáveis sobre custos reais por projeto e base para auditoria e faturamento"
      ],
      problemaIdentificado: [
        "Baixa visibilidade sobre a distribuição do tempo e da capacidade das equipes.",
        "Dificuldade para acompanhar custos reais dos projetos e gerar informações confiáveis para faturamento e auditoria.",
        "Ausência de indicadores em tempo real para apoiar a gestão e a tomada de decisões."
      ],    
      solucao: "Sistema integrado com três perfis distintos: profissionais registram e acompanham seus apontamentos, gestores validam alocações e monitoram tarefas em tempo real, e o financeiro acessa dados consolidados para auditoria e faturamento.",
      tecnologias: ["React", "Spring Boot", "Next.js", "TypeScript", "Java", "MySQL", "Docker", "JWT"],
      url: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-3DSM-API",
      desafio: "Estruturação do sistema por meio de múltiplos multisserviços independentes utilizando o Spring Boot",
      solucaoTecnica: "Utilização de APIs REST para comunicação entre os serviços e ambiente padronizado com Docker",
      imagens: [
        "/images/proj4_img1.png",
        "/images/proj4_img2.png",
        "/images/proj4_img3.png",
        "/images/proj4_img4.png",
      ]
    },
  ];

  return (
    <section id="projetos" className={styles.container}>
      <h1 className={styles.titulo}>Projetos</h1>

      <div className={styles.projetos}>
        {projetos.map((projeto) => (
          <div
            key={projeto.titulo}
            className={styles.card}
            onClick={() => setProjetoSelecionado(projeto)}
          >
            <h2>{projeto.titulo}</h2>
            <p>Clique para visualizar</p>
          </div>
        ))}
      </div>

      {projetoSelecionado && (
        <Modal onClose={() => setProjetoSelecionado(null)}>
          <div className={styles.windowBar}>
            <div className={styles.botoes}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>

            <span className={styles.url}>
              {projetoSelecionado.url}
            </span>
          </div>

          <div className={styles.modalContent}>
            <h2>{projetoSelecionado.titulo}</h2>

            <p>{projetoSelecionado.metodologia}</p>
            <p>{projetoSelecionado.descricao}</p>

            <h3>Objetivos</h3>
            <ul>
              {projetoSelecionado.objetivos.map((o: string) => (
                <li key={o}>{o}</li>
              ))}
            </ul>

            <h3>Problemas Identificados</h3>
            <ul>
              {projetoSelecionado.problemaIdentificado.map((o: string) => (
                <li key={o}>{o}</li>
              ))}
            </ul>

            <h3>Solução</h3>
            <p>{projetoSelecionado.solucao}</p>
            
            <h3>Desafio Técnico</h3>
            <p>{projetoSelecionado.desafio}</p>

            <h3>Solução Técnica</h3>
            <p>{projetoSelecionado.solucaoTecnica}</p>

            <h3>Tecnologias</h3>
            <ul>
              {projetoSelecionado.tecnologias.map((t: string) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <h3>Imagens do projeto</h3>

            <div className={styles.carrossel}>
              <button
                className={styles.seta}
                onClick={() =>
                  setImagemAtual((prev) =>
                    prev === 0
                      ? projetoSelecionado.imagens.length - 1
                      : prev - 1
                  )
                }
              >
                ❮
              </button>

              <div className={styles.carrosselImagem}>
                <Image
                  key={imagemAtual}
                  src={projetoSelecionado.imagens[imagemAtual]}
                  alt="Projeto"
                  width={800}
                  height={450}
                  className={styles.imagemProjeto}
                />
              </div>

              <button
                className={styles.seta}
                onClick={() =>
                  setImagemAtual((prev) =>
                    prev === projetoSelecionado.imagens.length - 1
                      ? 0
                      : prev + 1
                  )
                }
              >
                ❯
              </button>
            </div>

            <div className={styles.indicadores}>
              {projetoSelecionado.imagens.map((_: any, index: number) => (
                <span
                  key={index}
                  className={
                    index === imagemAtual
                      ? styles.ativo
                      : styles.indicador
                  }
                />
              ))}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}