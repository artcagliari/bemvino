"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Compass, Menu, MessageCircle, Plane, Sparkles, Users, Utensils, Wine, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const nav = [
  ["Experiências", "/#experiencias"],
  ["Como funciona", "/#filosofia"],
  ["A Bem Vino", "/#sobre"],
  ["Contato", "/#contato"],
] as const;

const experiences = [
  { icon: Wine, title: "Enoturismo & gastronomia", text: "Territórios, sabores e produtores apresentados com tempo para sentir cada lugar.", pos: "center 68%", image: "/images/tuscany.webp" },
  { icon: Plane, title: "Viagens internacionais", text: "Curadoria de destinos e experiências alinhada ao seu ritmo, repertório e expectativas.", pos: "70% 42%", image: "/images/south-africa.webp" },
  { icon: Compass, title: "Experiências pelo Brasil", text: "Um olhar cuidadoso para paisagens, culturas e sabores que revelam o país.", pos: "30% 58%", image: "/images/bem-vino-hero.webp" },
  { icon: Users, title: "Pequenos grupos", text: "Conexões genuínas, atenção próxima e uma forma mais íntima de descobrir o mundo.", pos: "80% 52%", image: "/images/burgundy.webp" },
  { icon: Sparkles, title: "Roteiros personalizados", text: "Uma viagem construída a partir de quem você é, do que deseja e de como gosta de viajar.", pos: "12% 48%", image: "/images/douro.webp" },
  { icon: Utensils, title: "Grupos especiais", text: "Projetos de viagem para empresas, famílias e encontros com propósitos compartilhados.", pos: "56% 62%", image: "/images/tuscany.webp" },
];

const whatsappNumber = "5554999187888";
const wa = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20planejar%20uma%20viagem%20com%20a%20Bem%20Vino.`;

const Globe = dynamic(() => import("@/components/travel-globe").then((mod) => mod.TravelGlobe), {
  ssr: false,
  loading: () => <div className="globe-canvas globe-canvas--loading" aria-hidden="true" />,
});

function Header({ route }: { route: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(route !== "/");
  useEffect(() => {
    const handle = () => setScrolled(route !== "/" || window.scrollY > 48);
    handle(); window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [route]);
  return (
    <header className={`site-header ${scrolled ? "site-header--solid" : ""}`}>
      <Link className="brand" href="/" aria-label="Bem Vino Boutique Travel — início">
        <span className="brand__seal"><Image src="/images/bem-vino-logo.jpeg" alt="" width={84} height={84} priority /></span>
        <span><b>Bem Vino</b><small>Boutique Travel</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {nav.map(([label, href]) => <Link key={href} className={route.startsWith(href) ? "active" : ""} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="/#planejar">Planeje sua viagem</Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-nav" aria-label="Navegação mobile">{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/#planejar" onClick={() => setOpen(false)}>Planeje sua viagem</Link></nav>}
    </header>
  );
}

function Footer() {
  return (
    <footer id="contato" className="site-footer">
      <div className="footer-main">
        <div><p className="eyebrow">Bem Vino Boutique Travel</p><h2>Entre taças e destinos,<br /><em>desenhamos memórias.</em></h2></div>
        <div className="footer-links"><Link href="/#sobre">A Bem Vino</Link><Link href="/#experiencias">Experiências</Link><Link href="/#planejar">Planeje sua viagem</Link><a href={wa} target="_blank" rel="noreferrer">WhatsApp</a><Link href="/privacidade">Privacidade</Link></div>
        <div className="footer-contact"><span>Rua Pernambuco, 81 · Humaitá<br />Bento Gonçalves · RS</span><a href="mailto:atendimento@bemvino.com.br">atendimento@bemvino.com.br</a><a href={wa} target="_blank" rel="noreferrer">+55 54 99918-7888</a><a href="https://www.instagram.com/bemvinoviagens/" target="_blank" rel="noreferrer">@bemvinoviagens</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Bem Vino Viagens e Turismo Ltda.</span><span>CNPJ 28.612.336/0001-24</span></div>
    </footer>
  );
}

function HomePage() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => gsap.fromTo(el, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }));
    });
    return () => ctx.revert();
  }, [reduce]);
  return (
    <>
      <section className="hero">
        <motion.div className="hero__image" initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }} />
        <div className="hero__veil" />
        <div className="hero__content">
          <motion.p className="eyebrow eyebrow--light" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}>Boutique travel · Enogastronomia</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4, duration: .9 }}>Viagens que despertam<br /><em>todos os sentidos.</em></motion.h1>
          <motion.p className="hero__lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65, duration: .8 }}>Experiências autorais, destinos extraordinários e momentos feitos para permanecer na memória.</motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}><Link className="button button--champagne" href="/#planejar">Planeje sua viagem</Link><Link className="button button--ghost" href="/#experiencias">Conheça as experiências</Link></motion.div>
        </div>
        <div className="hero__index"><span>01</span><i /><span>Descoberta</span></div>
        <a className="scroll-cue" href="#filosofia"><span>Rolar para descobrir</span><i /></a>
      </section>

      <section id="filosofia" className="editorial-section section-shell gsap-reveal">
        <div className="editorial-kicker"><span>01</span><p>A arte de viajar</p></div>
        <div className="editorial-copy"><h2>Viajar é descobrir<br /><em>o extraordinário.</em></h2><p>Cada roteiro começa com uma conversa. Interesses, expectativas, ritmos e pequenos desejos se transformam em uma jornada desenhada com presença e sensibilidade.</p><Link className="text-link" href="/#sobre">Conheça nossa história</Link></div>
        <div className="editorial-image"><Image src="/images/tuscany.webp" alt="Vila entre vinhedos ao pôr do sol na Toscana" width={720} height={879} sizes="(max-width: 1050px) 560px, 30vw" /><span>Tempo para sentir cada destino</span></div>
      </section>

      <section id="experiencias" className="experiences-section">
        <div className="section-heading section-shell gsap-reveal"><div><p className="eyebrow">Experiências</p><h2>Um mundo desenhado<br /><em>ao seu redor.</em></h2></div><p>Não partimos de um pacote. Partimos de você — e de tudo o que deseja viver, provar e guardar.</p></div>
        <div className="experience-grid section-shell">
          {experiences.map((item, i) => <Link className="experience-card gsap-reveal" href="/#planejar" key={item.title} style={{ backgroundPosition: item.pos, "--card-image": `url('${item.image}')` } as CSSProperties}><span className="experience-card__number">0{i + 1}</span><item.icon aria-hidden="true" /><div><h3>{item.title}</h3><p>{item.text}</p><span>Planejar esta experiência</span></div></Link>)}
        </div>
      </section>

      <section className="world-section">
        <div className="world-copy gsap-reveal"><p className="eyebrow eyebrow--light">O mundo Bem Vino</p><h2>O destino é só<br /><em>o começo.</em></h2><p>Vinho, gastronomia, cultura, natureza e encontros. Explore por aquilo que desperta sua curiosidade.</p><ul><li>Regiões do vinho</li><li>Brasil essencial</li><li>Cultura & gastronomia</li><li>Experiências em grupo</li></ul><Link className="button button--champagne" href="/#planejar">Começar meu roteiro</Link></div>
        <Globe />
      </section>

      <section id="sobre" className="trust-section section-shell gsap-reveal">
        <div className="trust-section__title"><p className="eyebrow">A Bem Vino</p><h2>Conhecer o mundo<br /><em>muda a forma de planejar.</em></h2><p className="trust-section__copy">Andreia e Silvana Gentilini unem repertório internacional, hospitalidade e enogastronomia para criar cada viagem com atenção próxima.</p><div className="trust-section__people"><a href="https://www.instagram.com/andreiagentilini" target="_blank" rel="noreferrer"><Image src="/images/andreia-instagram.webp" alt="Andreia Gentilini" width={56} height={56} /><span>Andreia Gentilini</span></a><a href="https://www.instagram.com/silvanagentilini" target="_blank" rel="noreferrer"><Image src="/images/silvana-instagram.webp" alt="Silvana Gentilini" width={56} height={56} /><span>Silvana Gentilini</span></a></div></div>
        <div className="trust-section__proof"><strong>60+</strong><span>países visitados pelas fundadoras</span></div>
        <blockquote><p>“A cada viagem, temos a certeza de que queremos fazer a próxima.”</p><footer>Neida P. · depoimento publicado pela Bem Vino</footer></blockquote>
      </section>

      <section className="custom-journey section-shell gsap-reveal"><div className="custom-journey__image" /><div><p className="eyebrow">Viagem sob medida</p><h2>Uma viagem tão única<br /><em>quanto você.</em></h2><p>Conte-nos o que imagina. Nossa curadoria transforma referências, desejos e prioridades em uma experiência com identidade própria.</p><div className="journey-steps"><span><b>01</b>Você compartilha</span><span><b>02</b>Nós desenhamos</span><span><b>03</b>Você vive</span></div><Link className="button button--wine" href="/#planejar">Criar minha experiência</Link></div></section>

      <section id="planejar" className="planner-section home-planner section-shell"><div className="planner-intro"><p className="section-number">Seu próximo roteiro</p><h2>Comece pela sua<br /><em>forma de viajar.</em></h2><p>Escolha destinos, interesses e ritmo. No final, seu resumo segue diretamente para a Bem Vino pelo WhatsApp.</p></div><JourneyPlanner /></section>
    </>
  );
}

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return <section className="page-hero"><div className="page-hero__image" /><div className="page-hero__veil" /><div className="page-hero__content"><p className="eyebrow eyebrow--light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}

type JourneyDraft = {
  planType: "sugestoes" | "lugares";
  destination: string;
  places: string;
  suggestions: string[];
  period: string;
  travelers: string;
  interests: string[];
  pace: "tranquilo" | "equilibrado" | "intenso";
  name: string;
  notes: string;
};

const destinationSuggestions = ["Serra Gaúcha", "Toscana", "Douro & Porto", "África do Sul", "Borgonha & Champagne", "Quero ser surpreendido"];
const interestOptions = ["Vinhos", "Gastronomia", "Natureza", "Cultura", "Lazer", "Descanso"];
const plannerSteps = ["Roteiro", "Preferências", "Detalhes", "Revisão"];

function JourneyPlanner() {
  const [step, setStep] = useState(0);
  const [validation, setValidation] = useState("");
  const [draft, setDraft] = useState<JourneyDraft>({ planType: "sugestoes", destination: "", places: "", suggestions: [], period: "", travelers: "2", interests: [], pace: "equilibrado", name: "", notes: "" });
  const update = (field: keyof JourneyDraft, value: string) => setDraft((current) => ({ ...current, [field]: value }));
  const toggleList = (field: "suggestions" | "interests", item: string, checked: boolean) => setDraft((current) => ({ ...current, [field]: checked ? [...current[field], item] : current[field].filter((value) => value !== item) }));
  const next = () => {
    if (step === 0 && draft.planType === "sugestoes" && draft.suggestions.length === 0) return setValidation("Escolha ao menos uma inspiração para o roteiro.");
    if (step === 0 && draft.planType === "lugares" && draft.places.trim().length < 2) return setValidation("Conte quais lugares você deseja conhecer.");
    if (step === 1 && draft.interests.length === 0) return setValidation("Escolha ao menos um interesse para personalizarmos a viagem.");
    if (step === 2 && draft.name.trim().length < 2) return setValidation("Digite seu nome para preparar a mensagem.");
    setValidation("");
    setStep((current) => Math.min(3, current + 1));
  };
  const back = () => { setValidation(""); setStep((current) => Math.max(0, current - 1)); };
  const whatsappHref = useMemo(() => {
    const request = draft.planType === "lugares" ? "montar um roteiro passando pelos lugares que selecionei" : "receber sugestões para um roteiro personalizado";
    const text = [
      `Olá, Bem Vino! Sou ${draft.name.trim() || "um(a) viajante"} e gostaria de ${request}.`,
      draft.planType === "sugestoes" ? `Inspirações escolhidas: ${draft.suggestions.join(", ")}.` : `Lugares que quero conhecer: ${draft.places.trim()}.`,
      draft.destination.trim() ? `Destino ou região principal: ${draft.destination.trim()}.` : "",
      `Período: ${draft.period.trim() || "a definir"}.`,
      `Viajantes: ${draft.travelers || "a definir"}.`,
      `Interesses: ${draft.interests.join(", ")}.`,
      `Ritmo da viagem: ${draft.pace}.`,
      draft.notes.trim() ? `Observações: ${draft.notes.trim()}.` : "",
    ].filter(Boolean).join("\n");
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [draft]);

  return (
    <div className="planner planner--flow">
      <div className="planner-stepper" aria-label={`Etapa ${step + 1} de 4`}>{plannerSteps.map((label, index) => <div className={index === step ? "active" : index < step ? "complete" : ""} key={label}><span>{index < step ? <Check /> : index + 1}</span><small>{label}</small></div>)}</div>

      {step === 0 && <section className="planner-panel"><p className="eyebrow">01 · Ponto de partida</p><h3>Como você quer criar seu roteiro?</h3><div className="route-options" role="radiogroup" aria-label="Como criar o roteiro"><label className="route-option"><input id="plan-suggestions" type="radio" name="plan-type" value="sugestoes" checked={draft.planType === "sugestoes"} onChange={() => { update("planType", "sugestoes"); setValidation(""); }} /><span><b>Quero sugestões</b><small>Escolha algumas inspirações e a Bem Vino desenvolve o roteiro.</small></span></label><label className="route-option"><input id="plan-places" type="radio" name="plan-type" value="lugares" checked={draft.planType === "lugares"} onChange={() => { update("planType", "lugares"); setValidation(""); }} /><span><b>Já escolhi os lugares</b><small>Conte quais cidades, vinícolas ou regiões precisam estar na viagem.</small></span></label></div>{draft.planType === "sugestoes" ? <div className="planner-conditional"><p className="planner-label">Quais destinos despertam sua curiosidade?</p><div className="selection-grid">{destinationSuggestions.map((item, index) => <label className="selection-card" key={item}><input id={`destination-${index}`} type="checkbox" checked={draft.suggestions.includes(item)} onChange={(event) => { toggleList("suggestions", item, event.target.checked); setValidation(""); }} /><span>{item}</span></label>)}</div><Input aria-label="Outra ideia de destino" placeholder="Outra região ou país que você imagina (opcional)" value={draft.destination} onChange={(event) => update("destination", event.target.value)} /></div> : <div className="planner-conditional"><label className="planner-field-label" htmlFor="chosen-places">Quais lugares você quer incluir?</label><Textarea id="chosen-places" placeholder="Ex.: Porto, Vale do Douro, Lisboa e Alentejo" value={draft.places} onChange={(event) => { update("places", event.target.value); setValidation(""); }} /><Input aria-label="Destino principal" placeholder="País ou região principal (opcional)" value={draft.destination} onChange={(event) => update("destination", event.target.value)} /></div>}</section>}

      {step === 1 && <section className="planner-panel"><p className="eyebrow">02 · Preferências</p><h3>O que não pode faltar?</h3><p>Você pode marcar várias opções.</p><div className="selection-grid selection-grid--interests">{interestOptions.map((item, index) => <label className="selection-card" key={item}><input id={`interest-${index}`} type="checkbox" checked={draft.interests.includes(item)} onChange={(event) => { toggleList("interests", item, event.target.checked); setValidation(""); }} /><span>{item}</span></label>)}</div><p className="planner-label">Qual ritmo combina com você?</p><div className="pace-options" role="radiogroup" aria-label="Ritmo da viagem">{[["tranquilo", "Tranquilo"], ["equilibrado", "Equilibrado"], ["intenso", "Quero aproveitar tudo"]].map(([value, label]) => <label key={value}><input id={`pace-${value}`} type="radio" name="journey-pace" value={value} checked={draft.pace === value} onChange={() => update("pace", value)} /><span>{label}</span></label>)}</div></section>}

      {step === 2 && <section className="planner-panel"><p className="eyebrow">03 · Detalhes</p><h3>Quando e com quem?</h3><div className="planner-fields planner-fields--two"><div><label className="planner-field-label" htmlFor="journey-period">Período</label><Input id="journey-period" placeholder="Ex.: setembro de 2027 ou datas flexíveis" value={draft.period} onChange={(event) => update("period", event.target.value)} /></div><div><label className="planner-field-label" htmlFor="journey-travelers">Viajantes</label><Input id="journey-travelers" type="number" min="1" value={draft.travelers} onChange={(event) => update("travelers", event.target.value)} /></div></div><div className="planner-fields"><label className="planner-field-label" htmlFor="journey-name">Seu nome</label><Input id="journey-name" placeholder="Como podemos chamar você?" value={draft.name} onChange={(event) => { update("name", event.target.value); setValidation(""); }} /><label className="planner-field-label" htmlFor="journey-notes">Mais algum desejo?</label><Textarea id="journey-notes" placeholder="Comemorações, restrições, acessibilidade ou algo especial (opcional)" value={draft.notes} onChange={(event) => update("notes", event.target.value)} /></div></section>}

      {step === 3 && <section className="planner-panel planner-review"><p className="eyebrow">04 · Revisão</p><h3>Seu ponto de partida está pronto.</h3><div className="review-grid"><div><span>Tipo de roteiro</span><b>{draft.planType === "sugestoes" ? "Quero sugestões" : "Já escolhi os lugares"}</b></div><div><span>Destinos</span><b>{draft.planType === "sugestoes" ? draft.suggestions.join(", ") : draft.places}</b></div><div><span>Interesses</span><b>{draft.interests.join(", ")}</b></div><div><span>Ritmo</span><b>{draft.pace}</b></div><div><span>Período</span><b>{draft.period || "A definir"}</b></div><div><span>Viajantes</span><b>{draft.travelers}</b></div></div><p className="planner-disclaimer">Nada é salvo no site. A conversa e a finalização do roteiro acontecem pelo WhatsApp.</p></section>}

      {validation && <p className="planner-error" role="alert">{validation}</p>}
      <div className="planner-actions">{step > 0 && <Button type="button" variant="ghost" onClick={back}>Voltar</Button>}{step < 3 ? <Button type="button" className="button button--wine" onClick={next}>Continuar</Button> : <a className="button button--wine" href={whatsappHref} target="_blank" rel="noreferrer">Enviar para o WhatsApp</a>}</div>
    </div>
  );
}

function PrivacyPage() { return <><PageHero eyebrow="Privacidade" title={<>Seus dados tratados<br /><em>com cuidado.</em></>} text="Transparência sobre como as informações enviadas neste site são utilizadas." /><article className="legal section-shell"><p>Última atualização: 8 de outubro de 2026.</p><h2>1. Como funciona</h2><p>Este é um site estático. Os dados preenchidos no pedido de roteiro são usados apenas no navegador para montar a mensagem que será aberta no WhatsApp.</p><h2>2. Armazenamento</h2><p>O site não possui banco de dados e não salva as respostas do formulário. A mensagem só é enviada quando você confirma o envio dentro do WhatsApp.</p><h2>3. Atendimento</h2><p>Após o envio, o tratamento das informações e a continuidade do atendimento acontecem pelos canais oficiais da Bem Vino.</p><h2>4. Contato</h2><p>Para dúvidas sobre privacidade, fale com a Bem Vino pelo WhatsApp divulgado neste site.</p></article></>;
}

function RouteContent({ route }: { route: string }) {
  if (route === "/privacidade") return <PrivacyPage />;
  return <HomePage />;
}

export function BemVinoSite({ route }: { route: string }) {
  const normalized = useMemo(() => route.length > 1 ? route.replace(/\/$/, "") : route, [route]);
  return <div className="site"><Header route={normalized} /><main><RouteContent route={normalized} /></main><Footer /><a className="whatsapp" href={wa} target="_blank" rel="noreferrer" aria-label="Falar com a Bem Vino pelo WhatsApp"><MessageCircle /></a></div>;
}
