import { ArrowDownRight, ArrowUpRight, Code2, Mail, ShoppingBag, Workflow } from "lucide-react";
import type { ReactNode } from "react";

const external = { target: "_blank", rel: "noreferrer" } as const;

function ProjectHeader({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="project-heading"><span className="project-number">{number}</span><div><p className="overline">{label}</p><h3>{title}</h3></div></div>;
}

function ExternalButton({ href, children, subtle = false }: { href: string; children: ReactNode; subtle?: boolean }) {
  return <a className={`project-link ${subtle ? "subtle" : ""}`} href={href} {...external}>{children} <ArrowUpRight size={16} /></a>;
}

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="identity" href="#top" aria-label="Ir para o início"><span>LF</span><div><strong>Lavínia Ferraz</strong><small>Desenvolvimento &amp; produto digital</small></div></a>
      <nav aria-label="Navegação principal"><a href="#trabalhos">Trabalhos</a><a href="#atuacao">Atuação</a><a href="#sobre">Sobre</a><a className="header-contact" href="mailto:contato.nexoautomacoes@gmail.com">Contato <ArrowUpRight size={14} /></a></nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-index"><span>PORTFÓLIO</span><span>2026</span></div>
      <h1>Desenvolvo produtos digitais que <em>organizam negócios.</em></h1>
      <div className="hero-bottom"><p>Sites, e-commerce e automações construídos com atenção ao funcionamento, à experiência de quem usa e à rotina de quem opera.</p><a href="#trabalhos">Ver projetos <ArrowDownRight size={18} /></a></div>
    </section>

    <section className="manifesto"><p>Da interface ao fluxo de trabalho.</p><p>Eu conecto desenvolvimento, organização e comunicação para transformar uma necessidade em uma entrega que funciona.</p></section>

    <section className="work" id="trabalhos">
      <div className="section-intro"><p className="overline">TRABALHOS SELECIONADOS</p><h2>Projetos com contexto,<br />decisão e entrega.</h2></div>

      <article className="case case-pethelp">
        <div className="case-copy">
          <ProjectHeader number="01" label="PRODUTO DIGITAL · TCC" title="PetHelp" />
          <p className="case-lead">Plataforma para aproximar responsáveis, clínicas e profissionais veterinários em torno do histórico de saúde do animal.</p>
          <div className="case-columns"><div><span>Desafio</span><p>Substituir registros dispersos por uma experiência única para consultas, vacinas, exames e acompanhamento.</p></div><div><span>Participação</span><p>Pesquisa, definição da experiência, desenvolvimento da interface, testes e comunicação de lançamento.</p></div></div>
          <div className="stack"><span>React</span><span>TypeScript</span><span>UX/UI</span><span>Pesquisa</span></div>
          <div className="link-row"><ExternalButton href="https://pethelp-web-six.vercel.app/">Acessar sistema</ExternalButton><ExternalButton href="https://github.com/v1ih/pethelp" subtle><Code2 size={15}/> Ver código</ExternalButton></div>
        </div>
        <div className="pethelp-visual"><img src="/work/pethelp-campaign-main.jpeg" alt="Campanha de apresentação do PetHelp" /><img src="/work/pethelp-app.png" alt="Tela de acesso do sistema PetHelp" /></div>
      </article>

      <article className="case case-mary">
        <div className="mary-visual"><img className="mary-desktop" src="/work/mary-desktop.jpeg" alt="Página inicial da loja Mary Bless no computador" /><img className="mary-mobile" src="/work/mary-mobile.jpeg" alt="Página inicial da loja Mary Bless no celular" /></div>
        <div className="case-copy">
          <ProjectHeader number="02" label="E-COMMERCE · NUVEMSHOP" title="Mary Bless" />
          <p className="case-lead">Reestruturação da operação digital de uma marca de vestuário e artigos religiosos, do catálogo à apresentação da loja.</p>
          <ul className="deliveries"><li>Organização de produtos, variações, categorias e estoque</li><li>Banners e experiência responsiva para desktop e celular</li><li>Preparação de canais de venda e materiais de marketing</li></ul>
          <div className="stack"><span>Nuvemshop</span><span>E-commerce</span><span>Catálogo</span><span>Conteúdo</span></div>
          <ExternalButton href="https://marybless2.lojavirtualnuvem.com.br/">Visitar loja</ExternalButton>
        </div>
      </article>

      <article className="case case-perfimetal">
        <div className="case-copy">
          <ProjectHeader number="03" label="AUTOMAÇÃO · OPERAÇÃO DE COMPRAS" title="Assistente de cotações" />
          <p className="case-lead">Fluxo conversacional no WhatsApp para consultar histórico de preços, iniciar cotações e acompanhar respostas sem retirar o controle do comprador.</p>
          <div className="metric-row"><div><strong>Texto + áudio</strong><span>Entrada flexível para a rotina</span></div><div><strong>Aprovação humana</strong><span>Nenhum envio sem confirmação</span></div><div><strong>Status centralizado</strong><span>Acompanhamento das cotações</span></div></div>
          <p className="confidentiality">Interface e informações comerciais apresentadas de forma limitada para preservar dados do cliente.</p>
          <div className="stack"><span>n8n</span><span>WhatsApp</span><span>Integrações</span><span>Automação</span></div>
        </div>
        <div className="phone-gallery"><img src="/work/perfimetal-query-anon.png" alt="Assistente consultando histórico de preços, com dados anonimizados" /><img src="/work/perfimetal-quote-anon.png" alt="Assistente solicitando autorização para cotação, com dados anonimizados" /><img src="/work/perfimetal-status-anon.png" alt="Assistente apresentando o status das cotações, com dados anonimizados" /></div>
      </article>

      <article className="case case-revolve">
        <div className="revolve-art" aria-hidden="true"><span>REVOLVE</span><i>ORBIT / 01</i><div className="orbit"><b /><b /><b /></div><p>Menos lembretes.<br/>Mais presença.</p></div>
        <div className="case-copy">
          <ProjectHeader number="04" label="FRONT-END · EXPERIÊNCIA DE MARCA" title="Revolve Global" />
          <p className="case-lead">Site responsivo para um produto de organização pessoal, com narrativa de marca, apresentação do dispositivo, loja, suporte e termos.</p>
          <div className="stack"><span>Next.js</span><span>UI Design</span><span>Responsivo</span><span>GitHub Pages</span></div>
          <div className="link-row"><ExternalButton href="https://v1ih.github.io/revolve-global/">Acessar projeto</ExternalButton><ExternalButton href="https://github.com/v1ih/revolve-global" subtle><Code2 size={15}/> Ver código</ExternalButton></div>
        </div>
      </article>
    </section>

    <section className="visual-work" id="conteudo">
      <div className="section-intro compact"><p className="overline">DESIGN &amp; CONTEÚDO</p><h2>O produto também precisa<br />saber se apresentar.</h2><p>Peças digitais criadas para explicar benefícios, apoiar campanhas e manter consistência entre produto, loja e comunicação.</p></div>
      <div className="campaign-grid"><figure className="campaign-large"><img src="/work/pethelp-campaign-data.jpeg" alt="Campanha PetHelp sobre registros de saúde"/><figcaption>PetHelp · Conteúdo informativo</figcaption></figure><figure><img src="/work/mary-coupon.jpeg" alt="Campanha de primeira compra Mary Bless"/><figcaption>Mary Bless · Campanha promocional</figcaption></figure><figure><img src="/work/pethelp-campaign-vetpass.jpeg" alt="Campanha Vet-Pass do PetHelp"/><figcaption>PetHelp · Apresentação de recurso</figcaption></figure><figure className="campaign-tall"><img src="/work/pethelp-campaign-vaccines.jpeg" alt="Story sobre controle de vacinas no PetHelp"/><figcaption>PetHelp · Story de produto</figcaption></figure></div>
    </section>

    <section className="expertise" id="atuacao">
      <div className="section-intro"><p className="overline">ATUAÇÃO</p><h2>Estratégia suficiente.<br />Execução de verdade.</h2></div>
      <div className="expertise-grid"><article><Code2/><span>01</span><h3>Desenvolvimento web</h3><p>Sites, páginas de apresentação e interfaces responsivas com atenção a estrutura, clareza e manutenção.</p></article><article><ShoppingBag/><span>02</span><h3>E-commerce</h3><p>Organização de lojas, catálogo, navegação, banners, integrações e preparação dos canais de venda.</p></article><article><Workflow/><span>03</span><h3>Automação</h3><p>Fluxos que conectam atendimento, dados e operação para reduzir tarefas manuais sem perder controle.</p></article></div>
    </section>

    <section className="lab"><div className="lab-copy"><p className="overline">EXPERIMENTOS &amp; APRENDIZADO</p><h2>Aroma Beans</h2><p>Chatbot de atendimento desenvolvido para responder dúvidas sobre cardápio, horários e informações de uma cafeteria. A integração está sendo revisada para manter a chave da API fora do código público.</p><a href="https://github.com/v1ih/ai-chatbot" {...external}>Ver repositório <ArrowUpRight size={15}/></a></div><div className="lab-image"><img src="/work/aroma-chatbot.jpeg" alt="Interface do chatbot Aroma Beans" /></div></section>

    <section className="about" id="sobre"><div><p className="overline">SOBRE</p><h2>Construindo uma carreira com visão de produto e negócio.</h2></div><div className="about-text"><p>Sou Lavínia Ferraz, desenvolvedora e estudante de Sistemas de Informação e Engenharia da Computação. Trabalho entre desenvolvimento web, e-commerce e automação.</p><p>Gosto de entender o problema antes de escolher a ferramenta. Meu objetivo é construir uma empresa capaz de acompanhar negócios desde a primeira organização digital até soluções mais completas de operação e crescimento.</p><div className="about-meta"><span>React</span><span>TypeScript</span><span>JavaScript</span><span>Python</span><span>n8n</span><span>Nuvemshop</span><span>UX/UI</span></div></div></section>

    <section className="contact" id="contato"><p className="overline">CONTATO</p><h2>Tem um projeto ou um problema<br />que precisa sair do papel?</h2><div className="contact-actions"><a href="mailto:contato.nexoautomacoes@gmail.com"><Mail size={18}/> contato.nexoautomacoes@gmail.com</a><a href="https://wa.me/5524992643632" {...external}>WhatsApp <ArrowUpRight size={17}/></a></div></section>

    <footer><div><strong>Lavínia Ferraz</strong><span>Desenvolvimento web · E-commerce · Automação</span></div><div><a href="https://github.com/v1ih" {...external}>GitHub</a><a href="https://www.linkedin.com/in/laviniaferraz-v1ih" {...external}>LinkedIn</a></div><small>© 2026 · Desenvolvido por Lavínia Ferraz</small></footer>
  </main>;
}
