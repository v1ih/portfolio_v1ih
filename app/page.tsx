"use client";

import { useState } from "react";
import { ArrowRight, Bot, Braces, ExternalLink, Mail, ShoppingBag, Sparkles, Store, Workflow } from "lucide-react";

const filters = ["Todos", "Sites", "E-commerce", "Automação"] as const;
type Filter = (typeof filters)[number];

const projects = [
  { title: "Mary Bless", category: "E-commerce" as Filter, eyebrow: "Nuvemshop · moda e varejo", description: "Organização da loja, do catálogo e das variações, além da criação de banners e preparação dos canais de venda.", tags: ["Nuvemshop", "Catálogo", "Marketing"], art: "mary" },
  { title: "Assistente de Compras IA", category: "Automação" as Filter, eyebrow: "WhatsApp · automação de compras", description: "Assistente que entende texto e áudio, consulta o histórico de preços e ajuda o comprador a conduzir novas cotações.", tags: ["IA", "WhatsApp", "n8n"], art: "automation" },
  { title: "Nexo Automações", category: "Sites" as Filter, eyebrow: "Marca e presença digital", description: "Site institucional criado para apresentar serviços de automação e facilitar o primeiro contato com empresas.", tags: ["Landing page", "Responsivo", "Conversão"], art: "nexo" },
  { title: "Aroma Beans Chatbot", category: "Automação" as Filter, eyebrow: "Atendimento para cafeteria", description: "Chatbot preparado para responder dúvidas sobre cardápio, horários, métodos de preparo e informações da cafeteria.", tags: ["React", "Gemini AI", "Chatbot"], art: "chatbot", url: "https://ai-chatbot-lavinia.vercel.app/" },
  { title: "Revolve Global", category: "Sites" as Filter, eyebrow: "Site e loja de tecnologia", description: "Uma experiência digital completa, com apresentação do produto, loja, suporte, contato e newsletter.", tags: ["UX/UI", "E-commerce", "Responsivo"], art: "revolve", url: "https://revolve-global.contato-nexoautomaco.chatgpt.site" },
  { title: "Aplicativo de Clima", category: "Sites" as Filter, eyebrow: "Consulta meteorológica", description: "Aplicação responsiva para consultar as condições do tempo em diferentes cidades usando dados atualizados.", tags: ["API", "Front-end", "Responsivo"], art: "weather", url: "https://v1ih.github.io/weather-app/" },
];

function ProjectVisual({ art, title }: { art: string; title: string }) {
  if (art === "automation") return <img src="/automacao-compras.png" alt="Demonstração anonimizada do assistente de compras com IA" className="project-img project-img-phone" />;
  if (art === "chatbot") return <img src="https://portfolio-v1ih.vercel.app/assets/chatbot-f27d720f.png" alt={title} className="project-img" />;
  if (art === "weather") return <img src="https://portfolio-v1ih.vercel.app/assets/weather-99187036.png" alt={title} className="project-img" />;
  if (art === "mary") return <div className="project-art mary-art"><span className="mary-mark">MB</span><p>Loja virtual, catálogo<br />e presença digital</p></div>;
  if (art === "nexo") return <div className="project-art nexo-art"><span>NEXO</span><div className="nexo-line" /><p>Automações que conectam negócios e pessoas.</p></div>;
  return <div className="project-art revolve-art"><span>REVOLVE</span><div className="orbit"><i /><i /><i /></div><p>Organize o hoje. Abra espaço para o próximo.</p></div>;
}

export default function Home() {
  const [active, setActive] = useState<Filter>("Todos");
  const visible = active === "Todos" ? projects : projects.filter((project) => project.category === active);
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Início"><span>LF</span> Lavínia Ferraz</a>
        <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a className="nav-cta" href="https://wa.me/5524992643632" target="_blank" rel="noreferrer">Vamos conversar</a></nav>
      </header>
      <section id="inicio" className="hero shell">
        <div className="hero-copy">
          <p className="kicker"><span /> DISPONÍVEL PARA NOVOS PROJETOS</p>
          <h1>Sites que apresentam.<br /><em>Lojas que vendem.</em><br />Automações que trabalham.</h1>
          <p className="hero-text">Desenvolvo experiências digitais completas para pequenas empresas: do site e e-commerce à automação com inteligência artificial.</p>
          <div className="hero-actions"><a className="button primary" href="#projetos">Ver trabalhos <ArrowRight size={18} /></a><a className="button secondary" href="https://wa.me/5524992643632" target="_blank" rel="noreferrer">Solicitar orçamento</a></div>
        </div>
        <div className="hero-stage" aria-label="Resumo das áreas de atuação">
          <div className="stage-glow" /><div className="stage-card stage-main"><div className="window-bar"><i /><i /><i /><span>lavinia.digital</span></div><div className="window-content"><p>PROJETO EM FOCO</p><strong>Soluções digitais<br />do início ao resultado.</strong><div className="mini-grid"><span>UX/UI</span><span>IA</span><span>WEB</span></div></div></div>
          <div className="stage-card stage-small top"><Bot size={24} /><span>Automação ativa</span><b>24/7</b></div><div className="stage-card stage-small bottom"><Store size={24} /><span>E-commerce</span><b>organizado</b></div>
        </div>
      </section>
      <section id="servicos" className="services shell section">
        <div className="section-heading"><p className="kicker">O QUE EU FAÇO</p><h2>Estratégia, criação e tecnologia<br />no mesmo projeto.</h2></div>
        <div className="service-grid">
          <article><span className="icon-box"><Braces /></span><h3>Sites e landing pages</h3><p>Sites institucionais e páginas responsivas, pensadas para apresentar seu negócio e gerar contatos.</p><ul><li>Design e desenvolvimento</li><li>Versão para celular</li><li>Formulários e WhatsApp</li></ul></article>
          <article><span className="icon-box"><ShoppingBag /></span><h3>E-commerce e Nuvemshop</h3><p>Organização de lojas virtuais para tornar o catálogo claro, consistente e pronto para vender.</p><ul><li>Produtos, variações e estoque</li><li>Banners e navegação</li><li>Integração de canais</li></ul></article>
          <article><span className="icon-box"><Workflow /></span><h3>Automações com IA</h3><p>Fluxos inteligentes para reduzir tarefas manuais e melhorar o atendimento e a operação.</p><ul><li>WhatsApp e ManyChat</li><li>n8n e integrações</li><li>Agentes personalizados</li></ul></article>
        </div>
      </section>
      <section id="projetos" className="projects section"><div className="shell">
        <div className="projects-head"><div><p className="kicker">PORTFÓLIO</p><h2>Projetos que unem<br />design e solução.</h2></div><div className="filters" role="group" aria-label="Filtrar projetos">{filters.map((filter)=><button key={filter} onClick={()=>setActive(filter)} className={active===filter?"active":""}>{filter}</button>)}</div></div>
        <div className="project-grid">{visible.map((project)=><article className="project-card" key={project.title}><div className="project-visual"><ProjectVisual art={project.art} title={project.title} /></div><div className="project-info"><p className="project-eyebrow">{project.eyebrow}</p><div className="project-title-row"><h3>{project.title}</h3>{project.url&&<a href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}><ExternalLink size={18}/></a>}</div><p>{project.description}</p><div className="tags">{project.tags.map((tag)=><span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        <p className="privacy-note">Informações comerciais e dados de clientes foram adaptados quando necessário.</p>
      </div></section>
      <section id="sobre" className="about shell section">
        <div className="about-number">01</div><div><p className="kicker">SOBRE MIM</p><h2>Transformo necessidades reais em soluções digitais simples de usar.</h2></div>
        <div className="about-copy"><p>Sou Lavínia Ferraz, desenvolvedora e estudante de Sistemas de Informação e Engenharia da Computação. Atuo com desenvolvimento web, estruturação de e-commerce e automações com inteligência artificial.</p><p>Meu trabalho combina raciocínio técnico, organização e cuidado visual. Antes de começar, procuro entender a rotina do negócio para construir algo que realmente ajude o cliente.</p><div className="skill-pills"><span>React</span><span>JavaScript</span><span>Python</span><span>n8n</span><span>Nuvemshop</span><span>Figma</span><span>IA</span></div></div>
      </section>
      <section className="contact shell section"><Sparkles className="contact-spark" /><p className="kicker">VAMOS CONVERSAR?</p><h2>Conte o que você precisa.<br />Eu cuido da parte digital.</h2><p>Atendimento para sites, lojas virtuais e automações.</p><div className="hero-actions contact-actions"><a className="button light" href="https://wa.me/5524992643632" target="_blank" rel="noreferrer">WhatsApp: (24) 99264-3632</a><a className="button contact-email" href="mailto:contato.nexoautomacoes@gmail.com"><Mail size={18}/> Enviar e-mail</a></div></section>
      <footer className="footer shell"><div><strong>Lavínia Ferraz</strong><span>Sites · E-commerce · Automações com IA</span></div><div><a href="https://github.com/v1ih" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/laviniaferraz-v1ih" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:contato.nexoautomacoes@gmail.com">E-mail</a><a href="https://wa.me/5524992643632" target="_blank" rel="noreferrer">WhatsApp</a></div><small>© 2026 · Desenvolvido por Lavínia Ferraz</small></footer>
    </main>
  );
}
