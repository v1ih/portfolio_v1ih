import { ArrowDown, ArrowUpRight, Code2, Mail, ShoppingBag, Workflow } from "lucide-react";

const external = { target: "_blank", rel: "noreferrer" } as const;

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#inicio">LAVÍNIA<span>FERRAZ</span></a>
        <nav aria-label="Navegação principal"><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">DESENVOLVEDORA WEB · E-COMMERCE · AUTOMAÇÃO</p>
          <h1>Oi, eu sou a<br/><span>Lavínia.</span></h1>
          <p className="hero-intro">Eu construo sites, lojas e sistemas que resolvem problemas de verdade — da primeira tela à rotina de quem vai usar.</p>
          <div className="hero-actions"><a className="button primary" href="#projetos">Ver projetos <ArrowDown size={17}/></a><a className="text-link" href="https://github.com/v1ih" {...external}>GitHub <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="code-card" aria-label="Apresentação em formato de código">
          <div className="window-bar"><i/><i/><i/><span>lavinia.ts</span></div>
          <pre><code><b>const</b> lavinia = {'{'}{`\n`}  foco: [<em>"web"</em>, <em>"lojas"</em>, <em>"automação"</em>],{`\n`}  gostaDe: <em>"entender antes de construir"</em>,{`\n`}  objetivo: <em>"criar soluções que crescem"</em>{`\n`}{'}'};</code></pre>
          <div className="available"><span/> disponível para novos projetos</div>
        </div>
        <div className="hero-sticker">DEV<br/>+<br/>PRODUTO</div>
      </section>

      <section className="ticker" aria-hidden="true"><div>REACT ✦ TYPESCRIPT ✦ NUVEMSHOP ✦ N8N ✦ JAVASCRIPT ✦ UX/UI ✦ REACT ✦ TYPESCRIPT ✦ NUVEMSHOP ✦ N8N ✦</div></section>

      <section className="projects" id="projetos">
        <div className="section-title"><p>TRABALHOS SELECIONADOS</p><h2>O que eu já<br/>coloquei no mundo.</h2></div>

        <article className="project project-pet">
          <div className="project-copy"><span className="project-index">01 / PRODUTO DIGITAL</span><h3>PetHelp</h3><p>Meu trabalho de conclusão de curso virou uma plataforma para organizar a saúde dos pets e conectar responsáveis, clínicas e veterinários.</p><ul><li>Pesquisa e definição do produto</li><li>Interface responsiva</li><li>Fluxos para três perfis de usuário</li></ul><div className="tags"><span>React</span><span>TypeScript</span><span>UX/UI</span></div><div className="project-actions"><a href="https://pethelp-web-six.vercel.app/" {...external}>Abrir projeto <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/pethelp" {...external}>Ver código</a></div></div>
          <div className="project-media pet-media"><img src="/work/pethelp-app.png" alt="Tela de entrada do PetHelp"/></div>
        </article>

        <article className="project project-mary">
          <div className="project-media browser-frame"><div className="browser-top"><i/><i/><i/><span>marybless2.lojavirtualnuvem.com.br</span></div><img src="/work/mary-desktop.jpeg" alt="Loja Mary Bless na Nuvemshop"/></div>
          <div className="project-copy"><span className="project-index">02 / E-COMMERCE</span><h3>Mary Bless</h3><p>Reorganização de uma loja Nuvemshop: catálogo, variações, categorias, banners e experiência de compra no computador e no celular.</p><ul><li>Estrutura e navegação da loja</li><li>Organização de mais de 180 itens</li><li>Preparação dos canais de venda</li></ul><div className="tags"><span>Nuvemshop</span><span>E-commerce</span><span>Conteúdo</span></div><div className="project-actions"><a href="https://marybless2.lojavirtualnuvem.com.br/" {...external}>Visitar loja <ArrowUpRight size={16}/></a></div></div>
        </article>

        <article className="project project-auto">
          <div className="project-copy"><span className="project-index">03 / AUTOMAÇÃO</span><h3>Assistente de compras</h3><p>Um fluxo pelo WhatsApp que consulta preços, prepara cotações e acompanha respostas. Antes de qualquer envio, a pessoa responsável confirma a ação.</p><ul><li>Entrada por texto e áudio</li><li>Consulta ao histórico de compras</li><li>Aprovação humana antes do envio</li></ul><div className="tags"><span>n8n</span><span>WhatsApp</span><span>Integrações</span></div></div>
          <div className="automation-demo" aria-label="Demonstração ilustrativa do fluxo da automação"><div className="demo-head"><span>Assistente de compras</span><small>online</small></div><div className="bubble sent">Preciso cotar 10 barras de Metalon 50×50.</div><div className="bubble received"><b>Pedido preparado</b><br/>Encontrei fornecedores cadastrados e organizei a solicitação.<br/><br/><strong>Autoriza o envio?</strong></div><div className="bubble sent short">Sim</div><div className="bubble received success">✓ Cotação enviada. Aviso quando as respostas chegarem.</div><div className="flow-note"><span>consulta</span><i>→</i><span>confirma</span><i>→</i><span>acompanha</span></div></div>
        </article>

        <article className="project project-revolve">
          <div className="revolve-card"><span>REVOLVE</span><div className="orbit"><i/><i/><i/></div><small>LESS REMINDING.<br/>MORE BEING.</small></div>
          <div className="project-copy"><span className="project-index">04 / FRONT-END</span><h3>Revolve Global</h3><p>Site responsivo criado a partir de um briefing, com apresentação do produto, loja, suporte e uma identidade visual própria.</p><div className="tags"><span>Next.js</span><span>Responsivo</span><span>UI Design</span></div><div className="project-actions"><a href="https://v1ih.github.io/revolve-global/" {...external}>Abrir projeto <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/revolve-global" {...external}>Ver código</a></div></div>
        </article>
      </section>

      <section className="skills"><div><Code2/><h3>Web</h3><p>Sites e interfaces responsivas, do layout à publicação.</p></div><div><ShoppingBag/><h3>Lojas</h3><p>Catálogo, navegação, banners e rotina de e-commerce.</p></div><div><Workflow/><h3>Automação</h3><p>Fluxos que conectam atendimento, dados e operação.</p></div></section>

      <section className="about" id="sobre"><p className="eyebrow">UM POUCO SOBRE MIM</p><div className="about-grid"><h2>Não quero só fazer telas bonitas.</h2><div><p>Sou Lavínia Ferraz, estudante de Sistemas de Informação e Engenharia da Computação. Gosto de entrar no problema, organizar o que está confuso e construir algo que as pessoas consigam usar.</p><p>Hoje trabalho com desenvolvimento web, Nuvemshop e automações. Meu plano é transformar essa experiência em uma empresa capaz de acompanhar outros negócios enquanto eles crescem.</p></div></div></section>

      <section className="contact" id="contato"><p>Tem uma ideia ou um processo que precisa funcionar melhor?</p><h2>Vamos conversar.</h2><div><a href="mailto:contato.nexoautomacoes@gmail.com"><Mail size={18}/> contato.nexoautomacoes@gmail.com</a><a href="https://wa.me/5524992643632" {...external}>WhatsApp <ArrowUpRight size={17}/></a></div></section>
      <footer><strong>Lavínia Ferraz</strong><span>Desenvolvido com código, café e atenção aos detalhes.</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </main>
  );
}
