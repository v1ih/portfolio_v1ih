"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { galleries, galleryTitles, type GalleryId } from "./galleries";

type Open = { id: GalleryId; index: number } | null;

// Galeria em tela cheia. Intercepta cliques em qualquer link com data-gallery,
// então as galerias continuam sendo HTML simples renderizado no servidor.
export function Lightbox() {
  const [open, setOpen] = useState<Open>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const shots = open ? galleries[open.id] : [];
  const shot = open ? shots[open.index] : null;

  const go = useCallback(
    (step: number) =>
      setOpen((o) => (o ? { ...o, index: (o.index + step + galleries[o.id].length) % galleries[o.id].length } : o)),
    [],
  );
  const close = useCallback(() => {
    setOpen(null);
    returnFocus.current?.focus();
  }, []);

  // Abre ao clicar em qualquer link de galeria da página.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-gallery]");
      const id = link?.dataset.gallery as GalleryId | undefined;
      if (!link || !id || !(id in galleries)) return;
      e.preventDefault();
      returnFocus.current = link;
      setOpen({ id, index: Number(link.dataset.index) || 0 });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Teclado, rolagem travada e foco enquanto está aberta.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, go, close]);

  // Pré-carrega as vizinhas para a troca ser instantânea.
  useEffect(() => {
    if (!open) return;
    for (const step of [1, -1]) {
      const next = shots[(open.index + step + shots.length) % shots.length];
      if (next) new Image().src = next.src;
    }
  }, [open, shots]);

  if (!open || !shot) return null;
  const many = shots.length > 1;
  const count = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Telas do ${galleryTitles[open.id]}`}
      onClick={(e) => e.target === e.currentTarget && close()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <header className="lightbox-bar">
        <span className="lightbox-title">{galleryTitles[open.id]}</span>
        <span className="lightbox-count" aria-live="polite">
          {count(open.index + 1)} / {count(shots.length)}
        </span>
        <button ref={closeRef} type="button" className="lightbox-close" onClick={close} aria-label="Fechar galeria">
          ×
        </button>
      </header>

      <div className="lightbox-stage" onClick={(e) => e.target === e.currentTarget && close()}>
        {many && (
          <button type="button" className="lightbox-nav prev" onClick={() => go(-1)} aria-label="Tela anterior">
            ←
          </button>
        )}
        <figure className={shot.mobile ? "is-mobile" : ""}>
          <img key={shot.src} src={shot.src} alt={shot.caption} />
          <figcaption>{shot.caption}</figcaption>
        </figure>
        {many && (
          <button type="button" className="lightbox-nav next" onClick={() => go(1)} aria-label="Próxima tela">
            →
          </button>
        )}
      </div>

      {many && (
        <nav className="lightbox-thumbs" aria-label="Todas as telas">
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={i === open.index ? "active" : ""}
              aria-current={i === open.index}
              aria-label={s.caption}
              onClick={() => setOpen({ id: open.id, index: i })}
            >
              <img src={s.src} alt="" loading="lazy" />
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
