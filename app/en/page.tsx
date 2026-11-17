import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Code2, Mail, ShoppingBag, Workflow, Globe2, BriefcaseBusiness } from "lucide-react";
import { GalleryButton, ProjectGallery } from "../project-gallery";
import { HtmlLang } from "./html-lang";

const external = { target: "_blank", rel: "noreferrer" } as const;

export const metadata: Metadata = {
  title: "Lavínia Ferraz — Full Stack Developer",
  description: "Websites, online stores, automations and custom web apps built by Lavínia Ferraz, working remotely with clients worldwide.",
  alternates: { canonical: "/en", languages: { "pt-BR": "/", en: "/en" } },
};

// Versão em inglês da página inicial. Ao mudar um projeto em app/page.tsx, mude aqui também.
export default function HomeEn() {
  return (
    <main>
      <HtmlLang lang="en" />
      <header className="topbar">
        <a className="wordmark" href="#inicio"><img src="/brand/lf-logo.svg" alt=""/><span><b>LAVÍNIA</b> FERRAZ</span></a>
        <nav aria-label="Main navigation"><a href="#projetos">Work</a><a href="#servicos">Services</a><a href="#sobre">About</a><a href="#contato">Contact</a><a className="lang-switch" href="/" hrefLang="pt-BR" aria-label="Ver este site em português">PT</a></nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK · SYSTEMS · AUTOMATION</p>
          <h1>Hi, I&apos;m<br/><span>Lavínia.</span></h1>
          <p className="hero-intro">I build web apps, websites and automations that solve real problems, from the interface to the database to the daily routine of the people using them.</p>
          <div className="hero-actions"><a className="button primary" href="#contato">Start a project <ArrowUpRight size={17}/></a><a className="text-link" href="#projetos">See my work <ArrowDown size={15}/></a><a className="text-link" href="https://github.com/v1ih" {...external}>GitHub <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="hero-visual">
          <div className="avatar-frame"><img src="/brand/lavinia-avatar.webp" alt="Illustration of Lavínia coding" width="900" height="900"/></div>
          <div className="code-card" aria-label="Introduction written as code">
            <div className="window-bar"><i/><i/><i/><span>lavinia.ts</span></div>
            <pre><code><b>const</b> lavinia = {'{'}{`\n`}  focus: [<em>"full stack"</em>, <em>"systems"</em>, <em>"automation"</em>],{`\n`}  likes: <em>"understanding before building"</em>{`\n`}{'}'};</code></pre>
            <div className="available"><span/> available for new projects</div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-hidden="true"><div>JAVASCRIPT ✦ SUPABASE ✦ REACT ✦ TYPESCRIPT ✦ N8N ✦ NEXT.JS ✦ JAVASCRIPT ✦ SUPABASE ✦ REACT ✦ TYPESCRIPT ✦</div></section>

      <section className="projects" id="projetos">
        <div className="section-title"><p>SELECTED WORK</p><h2>Things I&apos;ve put<br/>out in the world.</h2></div>

        <article className="project project-caixa">
          <div className="project-copy"><span className="project-index">01 / FULL STACK APP</span><h3>Caixa do Casal</h3><p>A finance app built to help a couple get organized during a move, with real-time shared data and a private finance area for each person.</p><ul><li>Authentication and account linking with an invite code</li><li>Income, expenses, budget and moving plan</li><li>Real-time sync and data protected with row-level security</li><li>Installable on Android and iPhone as a PWA</li></ul><div className="tags"><span>JavaScript</span><span>Supabase</span><span>PostgreSQL</span><span>PWA</span><span>Vercel</span></div><div className="project-actions"><a href="https://caixa-do-casal-nine.vercel.app" {...external}>Open the app (in Portuguese) <ArrowUpRight size={16}/></a></div></div>
          <div className="caixa-demo" aria-label="Illustrative demo of Caixa do Casal"><div className="caixa-phone"><div className="caixa-head"><small>Caixa do Casal</small><strong>October 2026</strong></div><div className="caixa-balance"><span>Monthly balance</span><b>$3,400.00</b><small>Household income and expenses</small></div><div className="caixa-stats"><div><span>Income</span><b>$8,200</b></div><div><span>Expenses</span><b>$4,800</b></div></div><div className="caixa-row"><span>Housing</span><strong>72%</strong></div><div className="caixa-progress"><i/></div><div className="caixa-row"><span>Groceries</span><strong>48%</strong></div><div className="caixa-progress second"><i/></div><div className="caixa-nav"><span>⌂<small>Month</small></span><span>↕<small>Entries</small></span><b>+</b><span>⌁<small>Move</small></span><span>●<small>Personal</small></span></div></div></div>
        </article>

        <article className="project project-lfs">
          <div className="project-copy"><span className="project-index">02 / FULL STACK PLATFORM</span><h3>LF Workspace</h3><p>A platform that brings work, business and career together in one workspace, with real data on productivity, clients, finances and professional growth.</p><ul><li>Kanban, sprints, projects and time tracking</li><li>CRM, clients, financial goals and reports</li><li>Job tracker, skill matrix and achievements based on real data</li></ul><div className="tags"><span>Next.js</span><span>TypeScript</span><span>PostgreSQL</span><span>Full Stack</span><span>Vercel</span></div><div className="project-actions"><a href="https://lf-workspace.vercel.app/" {...external}>See the project <ArrowUpRight size={16}/></a></div></div>
          <ProjectGallery id="lf-workspace" lang="en" />
        </article>

        <article className="project project-lfb">
          <div className="project-copy"><span className="project-index">03 / PWA PRODUCT</span><h3>LF Business</h3><p>An app for freelancers to price a project, send the proposal over WhatsApp and follow each client through to the close. It works offline and installs on a phone, with no sign-up.</p><ul><li>Quote calculator and proposals by WhatsApp or PDF</li><li>Lead pipeline with scheduled follow-ups and metrics</li><li>Offline support, dark theme and 26 automated tests</li></ul><div className="tags"><span>JavaScript</span><span>PWA</span><span>Service Worker</span><span>Testing</span><span>Vercel</span></div><div className="project-actions"><a href="https://lf-business-lake.vercel.app/" {...external}>Open the app (in Portuguese) <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/lf-business" {...external}>View code</a></div></div>
          <ProjectGallery id="lf-business" lang="en" />
        </article>

        <article className="project project-assist">
          <div className="project-copy"><span className="project-index">04 / PRODUCT · AI ON WHATSAPP</span><h3>LF Assistente</h3><p>An AI assistant for small businesses that sell over WhatsApp, already in daily use by a local company. It alerts the owner’s phone when a customer is left waiting, transcribes voice notes and drafts a reply in the business’s tone. The owner reviews it and sends it from their own WhatsApp: the AI never sends anything on its own.</p><ul><li>“Someone is waiting” alert on the phone, with the reply already drafted</li><li>Daily list at 7 a.m.: quotes, follow-ups and anything overdue</li><li>Voice notes transcribed and summarized with AI</li><li>Works with regular WhatsApp or Meta’s official connection</li><li>Reads only the work contacts the owner picks (privacy)</li></ul><div className="tags"><span>Supabase</span><span>Edge Functions</span><span>AI</span><span>WhatsApp</span><span>Web Push</span><span>PWA</span></div><div className="project-actions"><a href="/work/lf-assistente/apresentacao.mp4" {...external}>Watch the 1-minute video (PT) <ArrowUpRight size={16}/></a><a href="https://painel-demo-lf.vercel.app" {...external}>View demo (in Portuguese)</a><GalleryButton id="lf-assistente" lang="en" /></div></div>
          <div className="assist-demo" aria-label="Illustrative demo of LF Assistente"><div className="assist-phone"><div className="assist-head"><small>LF Assistente</small><strong>Waiting for a reply</strong><span><b>3</b> chats</span></div><div className="assist-list"><div className="assist-item hot"><i>C</i><div><b>Carla</b><small>2-bedroom rental</small></div><em>12 min</em></div><div className="assist-item"><i>M</i><div><b>Marcos</b><small>shower door quote · 🎙 0:42 voice note summarized</small></div><em>5 min</em></div><div className="assist-item"><i>J</i><div><b>Juliana</b><small>viewing on Saturday?</small></div><em>2 min</em></div></div><div className="assist-reply"><span>✦ Reply ready · friendly tone</span><p>Hi Carla! We have 2 two-bedroom options downtown, starting at $1,400. Can I send you the photos?</p></div><div className="assist-send">Send on WhatsApp <b>↗</b></div></div></div>
        </article>

        <article className="project project-clinica">
          <div className="clinica-demo" aria-label="Illustrative demo of LF Clínica"><div className="clinica-card"><div className="clinica-head"><span>LF</span><div><strong>Tomorrow&apos;s schedule</strong><small>Dr. Paula · General practice</small></div></div><div className="clinica-slot"><time>8:30</time><div><b>Rachel F.</b><small>Cleaning</small></div><em className="ok">✓ Confirmed</em></div><div className="clinica-slot"><time>9:30</time><div><b>Rita C.</b><small>Evaluation</small></div><em className="wait">⏳ Waiting</em></div><div className="clinica-slot"><time>10:00</time><div><b>Open slot</b><small>patient canceled</small></div><em className="queue">↻ Offered to waitlist</em></div><div className="clinica-slot"><time>11:00</time><div><b>Igor V.</b><small>Root canal</small></div><em className="ok">✓ Confirmed</em></div></div><div className="clinica-wpp"><small>WhatsApp · automatic reminder</small><p>Hi Rita! Can you confirm your appointment tomorrow at 9:30?</p><div><span>Confirm</span><span>Reschedule</span></div></div></div>
          <div className="project-copy"><span className="project-index">05 / PRODUCT · HEALTHCARE</span><h3>LF Clínica</h3><p>A demo system for dental clinics and private practices designed to reduce no-shows: schedules by provider, automatic WhatsApp reminders and confirmations the day before, a waitlist that offers canceled slots to patients who are waiting, patient records and a no-show dashboard. Built on the base of PetHelp, my final-year college project.</p><ul><li>One-tap appointment confirmation on WhatsApp</li><li>Automatic waitlist for canceled appointments</li><li>Dashboard for no-shows and schedule occupancy</li><li>Patient records with insurance, allergies and history</li></ul><div className="tags"><span>React</span><span>TypeScript</span><span>Vite</span><span>UX/UI</span><span>WhatsApp</span></div><div className="project-actions"><a href="https://lf-clinica-demo.vercel.app" {...external}>View demo (in Portuguese) <ArrowUpRight size={16}/></a><GalleryButton id="lf-clinica" lang="en" /></div></div>
        </article>

        <article className="project project-pet">
          <div className="project-copy"><span className="project-index">06 / DIGITAL PRODUCT</span><h3>PetHelp</h3><p>My final-year college project became a platform for managing pet health and connecting owners, clinics and veterinarians.</p><ul><li>Product research and definition</li><li>Responsive interface</li><li>Flows for three types of user</li></ul><div className="tags"><span>React</span><span>TypeScript</span><span>UX/UI</span></div><div className="project-actions"><a href="https://pethelp-web-six.vercel.app/" {...external}>Open the project (in Portuguese) <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/pethelp" {...external}>View code</a></div></div>
          <ProjectGallery id="pethelp" lang="en" />
        </article>

        <article className="project project-mary">
          <ProjectGallery id="mary-bless" lang="en" />
          <div className="project-copy"><span className="project-index">07 / E-COMMERCE</span><h3>Mary Bless</h3><p>A reorganization of a Nuvemshop online store: catalog, product variants, categories, banners and the shopping experience on desktop and mobile.</p><ul><li>Store structure and navigation</li><li>More than 180 items organized</li><li>Sales channels prepared</li></ul><div className="tags"><span>Nuvemshop</span><span>E-commerce</span><span>Content</span></div><div className="project-actions"><a href="https://marybless2.lojavirtualnuvem.com.br/" {...external}>Visit the store <ArrowUpRight size={16}/></a></div></div>
        </article>

        <article className="project project-auto">
          <div className="project-copy"><span className="project-index">08 / AUTOMATION</span><h3>Purchasing assistant</h3><p>A WhatsApp workflow that looks up prices, prepares quote requests and tracks replies. Before anything goes out, the person in charge confirms the action.</p><ul><li>Text and voice input</li><li>Lookup in the purchase history</li><li>Human approval before sending</li></ul><div className="tags"><span>n8n</span><span>WhatsApp</span><span>Integrations</span></div></div>
          <div className="automation-demo" aria-label="Illustrative demo of the automation flow"><div className="demo-head"><span>Purchasing assistant</span><small>online</small></div><div className="bubble sent">I need a quote for 10 bars of 50×50 steel tubing.</div><div className="bubble received"><b>Request ready</b><br/>I found registered suppliers and organized the request.<br/><br/><strong>Do you approve sending it?</strong></div><div className="bubble sent short">Yes</div><div className="bubble received success">✓ Quote request sent. I&apos;ll let you know when replies come in.</div><div className="flow-note"><span>look up</span><i>→</i><span>confirm</span><i>→</i><span>track</span></div></div>
        </article>

        <article className="project project-revolve">
          <div className="revolve-card"><span>REVOLVE</span><div className="orbit"><i/><i/><i/></div><small>LESS REMINDING.<br/>MORE BEING.</small></div>
          <div className="project-copy"><span className="project-index">09 / FRONT-END</span><h3>Revolve Global</h3><p>A responsive website built from a brief, with a product presentation, store, support and its own visual identity.</p><div className="tags"><span>Next.js</span><span>Responsive</span><span>UI Design</span></div><div className="project-actions"><a href="https://v1ih.github.io/revolve-global/" {...external}>Open the project <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/revolve-global" {...external}>View code</a><GalleryButton id="revolve" lang="en" /></div></div>
        </article>

        <article className="project project-chatbot">
          <div className="project-copy"><span className="project-index">10 / CHATBOT</span><h3>Aroma Beans</h3><p>A customer service assistant for a fictional coffee shop. It answers questions about the menu, hours, location and how the coffee is made.</p><ul><li>Custom knowledge base</li><li>Fast answers, even without an external API</li><li>Responsive interface in React</li></ul><div className="tags"><span>React</span><span>JavaScript</span><span>Chatbot</span></div><div className="project-actions"><a href="https://ai-chatbot-lavinia.vercel.app/" {...external}>Try the chatbot <ArrowUpRight size={16}/></a><a href="https://github.com/v1ih/ai-chatbot" {...external}>View code</a><GalleryButton id="aroma-beans" lang="en" /></div></div>
          <div className="chatbot-demo"><div className="chatbot-demo-head"><span>☕ Aroma Beans</span><small>online</small></div><div className="mini-bubble bot">Hi! I can help with the menu, hours or location.</div><div className="mini-bubble user">What time do you open?</div><div className="mini-bubble bot">Monday to Friday, 7 am to 9 pm. On weekends, 8 am to 10 pm.</div><div className="chat-input">Type your message… <b>↑</b></div></div>
        </article>
      </section>


      <section className="services-commercial" id="servicos" aria-labelledby="services-heading">
        <div className="section-title"><p>HOW I CAN HELP</p><h2 id="services-heading">From problem to solution.</h2></div>
        <p className="services-intro">I work as an independent full stack developer on custom projects and contracts with tech teams, remotely and in English or Portuguese. Quotes are based on scope, integrations and complexity.</p>
        <div className="services-grid">
          <article className="service-offer"><Globe2 size={29}/><h3>Business websites</h3><p>Landing pages and responsive websites that present your business and turn visitors into leads.</p><strong>From US$ 600</strong><a href="#contato">Get a quote <ArrowUpRight size={16}/></a></article>
          <article className="service-offer"><ShoppingBag size={29}/><h3>Online stores</h3><p>New stores and improvements to existing ones: catalog, navigation, customization and shopping experience.</p><strong>From US$ 1,200</strong><a href="#contato">Get a quote <ArrowUpRight size={16}/></a></article>
          <article className="service-offer"><Workflow size={29}/><h3>Automations and integrations</h3><p>Smart workflows, APIs and connected tools that simplify the daily routine of a business.</p><strong>From US$ 900</strong><a href="#contato">Get a quote <ArrowUpRight size={16}/></a></article>
          <article className="service-offer"><Code2 size={29}/><h3>Full stack apps</h3><p>Custom systems, platforms and features, from the front end to the database.</p><strong>Custom quote</strong><a href="#contato">Talk about your project <ArrowUpRight size={16}/></a></article>
        </div>
        <div className="contracts-banner"><BriefcaseBusiness size={26}/><div><h3>Also available for projects and contracts with startups and agencies</h3><p>Web development, product work, APIs and integrations for companies in Brazil and abroad.</p></div><a href="#contato">Let&apos;s talk <ArrowUpRight size={17}/></a></div>
        <p className="services-note">Starting prices are for basic scopes. Hosting, paid tools and additional features are quoted separately.</p>
      </section>

      <section className="skills"><div><Code2/><h3>Applications</h3><p>Systems and responsive interfaces, from the user experience to the database.</p></div><div><ShoppingBag/><h3>Stores</h3><p>Catalog, navigation, banners and the daily routine of e-commerce.</p></div><div><Workflow/><h3>Automation</h3><p>Workflows that connect customer service, data and operations.</p></div></section>

      <section className="about" id="sobre"><p className="eyebrow">A LITTLE ABOUT ME</p><div className="about-grid"><h2>I don&apos;t just want to make pretty screens.</h2><div><p>I&apos;m Lavínia Ferraz, a student of Information Systems and Computer Engineering based in Brazil. I like getting inside the problem, organizing what&apos;s confusing and building something people can actually use.</p><p>Today I work with full stack development, e-commerce and automation. I take on independent projects and technical contracts, working remotely with hours that overlap the US business day.</p></div></div></section>

      <section className="contact" id="contato"><p>Have an idea or a process that needs to work better?</p><h2>Let&apos;s talk.</h2><div><a href="mailto:freelancelavinia@gmail.com?subject=Project%20inquiry"><Mail size={18}/> freelancelavinia@gmail.com</a><a href="https://wa.me/5524992643632?text=Hi%20Lav%C3%ADnia%21%20I%20found%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project." {...external}>WhatsApp <ArrowUpRight size={17}/></a></div></section>
      <footer><strong>Lavínia Ferraz</strong><span>Built with code, coffee and attention to detail.</span><a href="#inicio">Back to top ↑</a></footer>
    </main>
  );
}
