import { ZoomIn } from "lucide-react";
import { captionFor, galleries, galleryTitles, type GalleryId, type Lang } from "./galleries";

// Galeria de um projeto: tela principal em moldura de navegador + 4 miniaturas.
// Os links continuam apontando para a imagem (funciona sem JavaScript);
// com JavaScript, o Lightbox intercepta o clique e abre a galeria no próprio site.
export function ProjectGallery({ id, lang = "pt" }: { id: GalleryId; lang?: Lang }) {
  const en = lang === "en";
  const shots = galleries[id];
  const title = galleryTitles[id];
  const [main, ...rest] = shots;
  const strip = rest.slice(0, 4);
  return (
    <div className="project-gallery lf-gallery" aria-label={en ? `${title} screens` : `Telas do ${title}`}>
      <div className="gallery-browser">
        <div className="gallery-browser-bar"><i></i><i></i><i></i><span>{title}</span></div>
        <a className="gallery-main" href={main.src} data-gallery={id} data-index={0}>
          <img src={main.src} alt={`${title}: ${captionFor(main, lang)}`} />
          <span><ZoomIn size={14} /> {en ? "View full screen" : "Ver tela completa"}</span>
        </a>
      </div>
      <div className="gallery-strip">
        {strip.map((shot, i) => (
          <a key={shot.src} href={shot.src} data-gallery={id} data-index={i + 1}>
            <img src={shot.src} alt={`${title}: ${captionFor(shot, lang)}`} loading="lazy" />
            <span>{String(i + 1).padStart(2, "0")} / {captionFor(shot, lang)}</span>
          </a>
        ))}
      </div>
      {shots.length > strip.length + 1 && <GalleryButton id={id} lang={lang} className="gallery-all" />}
    </div>
  );
}

// Botão que abre a galeria completa (também usado nos projetos com demonstração ilustrada).
export function GalleryButton({ id, className = "", lang = "pt" }: { id: GalleryId; className?: string; lang?: Lang }) {
  const shots = galleries[id];
  return (
    <a className={className} href={shots[0].src} data-gallery={id} data-index={0}>
      <ZoomIn size={15} /> {lang === "en"
        ? `View ${shots.length === 1 ? "screen" : `all ${shots.length} screens`}`
        : `Ver ${shots.length === 1 ? "a tela" : `as ${shots.length} telas`}`}
    </a>
  );
}
