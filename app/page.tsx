import { ArrowDown, ArrowUpRight, Code2, Mail, ShoppingBag, Workflow } from "lucide-react";

const external = { target: "_blank", rel: "noreferrer" } as const;

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#inicio"><img src="/brand/lf-logo.svg" alt=""/><span><b>LAVÍNIA</b> FERRAZ</span></a>
        <nav aria-label="Navegação principal"><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK · SISTEMAS · AUTOMAÇÃO</p>
          <h1>Oi, eu sou a<br/><span>Lavínia.</span></h1>
          <p className="hero-intro">Eu construo aplicações, sites e automações que resolvem problemas de verdade — da interface ao banco de dados e à rotina de quem vai usar.</p>
          <div className="hero-actions"><a className="button primary" href="#projetos">Ver projetos <ArrowDown size={17}/></a><a className="text-link" href="https://github.com/v1ih" {...external}>GitHub <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="hero-visual">
          <div className="avatar-frame"><img src="/brand/lavinia-avatar.webp" alt="Ilustração de Lavínia programando" width="900" height="900"/></div>
          <div className="code-card" aria-label="Apresentação em formato de código">
            <div className="window-bar"><i/><i/><i/><span>lavinia.ts</span></div>
            <pre><code><b>const</b> lavinia = {'{'}{`\n`}  foco: [<em>"full stack"</em>, <em>"sistemas"</em>, <em>"automação"</em>],{`\n`}  gostaDe: <em>"entender antes de construir"</em>{`\n`}{'}'};</code></pre>
            <div className="available"><span/> disponível para novos projetos</div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-hidden="true"><div>JAVASCRIPT ✦ SUPABASE ✦ REACT ✦ TYPESCRIPT ✦ N8N ✦ NEXT.JS ✦ JAVASCRIPT ✦ SUPABASE ✦ REACT ✦ TYPESCRIPT ✦</div></section>

      <section className="projects" id="projetos">
        <div className="section-title"><p>TRABALHOS SELECIONADOS</p><h2>O que eu já<br/>coloquei no mundo.</h2></div>

        <article className="project project-caixa">
          <div className="project-copy"><span className="project-index">01 / APLICAÇÃO FULL STACK</span><h3>Caixa do Casal</h3><p>Aplicação financeira criada para organizar a vida de um casal em período de mudança, com dados compartilhados em tempo real e uma área financeira privada para cada pessoa.</p><ul><li>Autenticação e vínculo por código de convite</li><li>Receitas, despesas, orçamento e planejamento da mudança</li><li>Sincronização em tempo real e dados protegidos com RLS</li><li>Instalável no Android e iPhone como PWA</li></ul><div className="tags"><span>JavaScript</span><span>Supabase</span><span>PostgreSQL</span><span>PWA</span><span>Vercel</span></div><div className="project-actions"><a href="https://caixa-do-casal-nine.vercel.app" {...external}>Abrir aplicativo <ArrowUpRight size={16}/></a></div></div>
          <div className="caixa-demo" aria-label="Demonstração ilustrativa do Caixa do Casal"><div className="caixa-phone"><div className="caixa-head"><small>Caixa do Casal</small><strong>Outubro 2026</strong></div><div className="caixa-balance"><span>Saldo do mês</span><b>R$ 3.400,00</b><small>Receitas e despesas da casa</small></div><div className="caixa-stats"><div><span>Entradas</span><b>R$ 8.200</b></div><div><span>Saídas</span><b>R$ 4.800</b></div></div><div className="caixa-row"><span>Moradia</span><strong>72%</strong></div><div className="caixa-progress"><i/></div><div className="caixa-row"><span>Mercado</span><strong>48%</strong></div><div className="caixa-progress second"><i/></div><div className="caixa-nav"><span>⌂<small>Mês</small></span><span>↕<small>Lançamentos</small></span><b>+</b><span>⌁<small>Mudança</small></span><span>●<small>Pessoal</small></span></div></div></div>
        </article>

        <article className="project project-pet">
          <div className="project-copy"><span className="project-index">02 / PRODUTO DIGITAL</span><h3>PetHelp</h3><p>Meu trabalho de conclusão de curso virou uma plataforma para organizar a saúde dos pets e conectar responsáveis, clínicas e veterinários.</p><ul><li>Pesquisa e definição do produto</li><li>Interface responsiva</li><li>Fluxos para três perfis de usuário</li></ul><div className="tags"><span>React</span><span>TypeScript</span><span>UX/UI</span></div><div className="project-actions"><a href="https://pethelp-web-six.vercel.app/" {...external}>Abrir projeto <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/pethelp" {...external}>Ver código</a></div></div>
          <div className="project-media pet-media"><img src="/work/pethelp-app.png" alt="Tela de entrada do PetHelp"/></div>
        </article>

        <article className="project project-mary">
          <div className="project-media browser-frame"><div className="browser-top"><i/><i/><i/><span>marybless2.lojavirtualnuvem.com.br</span></div><img src="/work/mary-desktop.jpeg" alt="Loja Mary Bless na Nuvemshop"/></div>
          <div className="project-copy"><span className="project-index">03 / E-COMMERCE</span><h3>Mary Bless</h3><p>Reorganização de uma loja Nuvemshop: catálogo, variações, categorias, banners e experiência de compra no computador e no celular.</p><ul><li>Estrutura e navegação da loja</li><li>Organização de mais de 180 itens</li><li>Preparação dos canais de venda</li></ul><div className="tags"><span>Nuvemshop</span><span>E-commerce</span><span>Conteúdo</span></div><div className="project-actions"><a href="https://marybless2.lojavirtualnuvem.com.br/" {...external}>Visitar loja <ArrowUpRight size={16}/></a></div></div>
        </article>

        <article className="project project-auto">
          <div className="project-copy"><span className="project-index">04 / AUTOMAÇÃO</span><h3>Assistente de compras</h3><p>Um fluxo pelo WhatsApp que consulta preços, prepara cotações e acompanha respostas. Antes de qualquer envio, a pessoa responsável confirma a ação.</p><ul><li>Entrada por texto e áudio</li><li>Consulta ao histórico de compras</li><li>Aprovação humana antes do envio</li></ul><div className="tags"><span>n8n</span><span>WhatsApp</span><span>Integrações</span></div></div>
          <div className="automation-demo" aria-label="Demonstração ilustrativa do fluxo da automação"><div className="demo-head"><span>Assistente de compras</span><small>online</small></div><div className="bubble sent">Preciso cotar 10 barras de Metalon 50×50.</div><div className="bubble received"><b>Pedido preparado</b><br/>Encontrei fornecedores cadastrados e organizei a solicitação.<br/><br/><strong>Autoriza o envio?</strong></div><div className="bubble sent short">Sim</div><div className="bubble received success">✓ Cotação enviada. Aviso quando as respostas chegarem.</div><div className="flow-note"><span>consulta</span><i>→</i><span>confirma</span><i>→</i><span>acompanha</span></div></div>
        </article>

        <article className="project project-revolve">
          <div className="revolve-card"><span>REVOLVE</span><div className="orbit"><i/><i/><i/></div><small>LESS REMINDING.<br/>MORE BEING.</small></div>
          <div className="project-copy"><span className="project-index">05 / FRONT-END</span><h3>Revolve Global</h3><p>Site responsivo criado a partir de um briefing, com apresentação do produto, loja, suporte e uma identidade visual própria.</p><div className="tags"><span>Next.js</span><span>Responsivo</span><span>UI Design</span></div><div className="project-actions"><a href="https://v1ih.github.io/revolve-global/" {...external}>Abrir projeto <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/revolve-global" {...external}>Ver código</a></div></div>
        </article>

        <article className="project project-chatbot">
          <div className="project-copy"><span className="project-index">06 / CHATBOT</span><h3>Aroma Beans</h3><p>Assistente de atendimento para uma cafeteria fictícia. Ele responde dúvidas sobre cardápio, horários, endereço e preparo de café.</p><ul><li>Base de conhecimento personalizada</li><li>Respostas rápidas mesmo sem API externa</li><li>Interface responsiva em React</li></ul><div className="tags"><span>React</span><span>JavaScript</span><span>Chatbot</span></div><div className="project-actions"><a href="https://ai-chatbot-lavinia.vercel.app/" {...external}>Testar chatbot <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/ai-chatbot" {...external}>Ver código</a></div></div>
          <div className="chatbot-demo"><div className="chatbot-demo-head"><span>☕ Aroma Beans</span><small>online</small></div><div className="mini-bubble bot">Olá! Posso ajudar com o cardápio, horários ou localização.</div><div className="mini-bubble user">Que horas vocês abrem?</div><div className="mini-bubble bot">De segunda a sexta, das 7h às 21h. Nos fins de semana, das 8h às 22h.</div><div className="chat-input">Digite sua mensagem… <b>↑</b></div></div>
        </article>
      </section>

      <section className="skills"><div><Code2/><h3>Aplicações</h3><p>Sistemas e interfaces responsivas, da experiência do usuário ao banco de dados.</p></div><div><ShoppingBag/><h3>Lojas</h3><p>Catálogo, navegação, banners e rotina de e-commerce.</p></div><div><Workflow/><h3>Automação</h3><p>Fluxos que conectam atendimento, dados e operação.</p></div></section>

      <section className="about" id="sobre"><p className="eyebrow">UM POUCO SOBRE MIM</p><div className="about-grid"><h2>Não quero só fazer telas bonitas.</h2><div><p>Sou Lavínia Ferraz, estudante de Sistemas de Informação e Engenharia da Computação. Gosto de entrar no problema, organizar o que está confuso e construir algo que as pessoas consigam usar.</p><p>Hoje trabalho com desenvolvimento full stack, e-commerce e automações. Meu plano é transformar essa experiência em uma empresa capaz de acompanhar outros negócios enquanto eles crescem.</p></div></div></section>

      <section className="contact" id="contato"><p>Tem uma ideia ou um processo que precisa funcionar melhor?</p><h2>Vamos conversar.</h2><div><a href="mailto:contato.nexoautomacoes@gmail.com"><Mail size={18}/> contato.nexoautomacoes@gmail.com</a><a href="https://wa.me/5524992643632" {...external}>WhatsApp <ArrowUpRight size={17}/></a></div></section>
      <footer><strong>Lavínia Ferraz</strong><span>Desenvolvido com código, café e atenção aos detalhes.</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </main>
  );
}
