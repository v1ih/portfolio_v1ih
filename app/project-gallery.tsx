import { ZoomIn } from "lucide-react";
import { galleries, galleryTitles, type GalleryId } from "./galleries";

// Galeria de um projeto: tela principal em moldura de navegador + 4 miniaturas.
// Os links continuam apontando para a imagem (funciona sem JavaScript);
// com JavaScript, o Lightbox intercepta o clique e abre a galeria no próprio site.
export function ProjectGallery({ id }: { id: GalleryId }) {
  const shots = galleries[id];
  const title = galleryTitles[id];
  const [main, ...rest] = shots;
  const strip = rest.slice(0, 4);
  return (
    <div className="project-gallery lf-gallery" aria-label={`Telas do ${title}`}>
      <div className="gallery-browser">
        <div className="gallery-browser-bar"><i></i><i></i><i></i><span>{title}</span></div>
        <a className="gallery-main" href={main.src} data-gallery={id} data-index={0}>
          <img src={main.src} alt={`${title}: ${main.caption}`} />
          <span><ZoomIn size={14} /> Ver tela completa</span>
        </a>
      </div>
      <div className="gallery-strip">
        {strip.map((shot, i) => (
          <a key={shot.src} href={shot.src} data-gallery={id} data-index={i + 1}>
            <img src={shot.src} alt={`${title}: ${shot.caption}`} loading="lazy" />
            <span>{String(i + 1).padStart(2, "0")} / {shot.caption}</span>
          </a>
        ))}
      </div>
      {shots.length > strip.length + 1 && <GalleryButton id={id} className="gallery-all" />}
    </div>
  );
}

// Botão que abre a galeria completa (também usado nos projetos com demonstração ilustrada).
export function GalleryButton({ id, className = "" }: { id: GalleryId; className?: string }) {
  const shots = galleries[id];
  return (
    <a className={className} href={shots[0].src} data-gallery={id} data-index={0}>
      <ZoomIn size={15} /> Ver {shots.length === 1 ? "a tela" : `as ${shots.length} telas`}
    </a>
  );
}
