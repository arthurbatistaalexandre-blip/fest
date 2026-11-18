import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/eventData';
import { ImageWithFallback } from './ImageWithFallback';

export function GallerySection() {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxItem]);

  const [featured, vertical, wideLeft, wideRight] = GALLERY_ITEMS;

  return (
    <section
      id="galeria"
      className="border-t border-line/70 py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium tracking-wide text-ocean">
            Sobre & Montagens Reais
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
            Foco em festas infantis, cuidado em cada montagem.
          </h2>
          <p className="mt-5 text-base text-ink-secondary">
            Levamos painéis, balões orgânicos, cilindros e peças exclusivas até o endereço da sua comemoração para você celebrar sem preocupações.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          <button
            type="button"
            onClick={() => setLightboxItem(featured)}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface text-left md:col-span-7 focus-visible:outline-2 focus-visible:outline-ocean"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <ImageWithFallback
                src={featured.image}
                alt={featured.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/20 to-transparent"
            />
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-ocean">{featured.category}</p>
                <p className="mt-1 font-display text-xl font-medium text-ink">
                  {featured.title}
                </p>
              </div>
              <Maximize2
                className="h-4 w-4 shrink-0 text-ink-secondary transition-colors group-hover:text-ocean"
                aria-hidden="true"
              />
            </div>
          </button>

          <button
            type="button"
            onClick={() => setLightboxItem(vertical)}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface text-left md:col-span-5 focus-visible:outline-2 focus-visible:outline-ocean"
          >
            <div className="aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden">
              <ImageWithFallback
                src={vertical.image}
                alt={vertical.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/20 to-transparent"
            />
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-ocean">{vertical.category}</p>
                <p className="mt-1 font-display text-xl font-medium text-ink">
                  {vertical.title}
                </p>
              </div>
              <Maximize2
                className="h-4 w-4 shrink-0 text-ink-secondary transition-colors group-hover:text-ocean"
                aria-hidden="true"
              />
            </div>
          </button>

          <button
            type="button"
            onClick={() => setLightboxItem(wideLeft)}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface text-left md:col-span-5 focus-visible:outline-2 focus-visible:outline-ocean"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <ImageWithFallback
                src={wideLeft.image}
                alt={wideLeft.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/20 to-transparent"
            />
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-ocean">{wideLeft.category}</p>
                <p className="mt-1 font-display text-xl font-medium text-ink">
                  {wideLeft.title}
                </p>
              </div>
              <Maximize2
                className="h-4 w-4 shrink-0 text-ink-secondary transition-colors group-hover:text-ocean"
                aria-hidden="true"
              />
            </div>
          </button>

          <button
            type="button"
            onClick={() => setLightboxItem(wideRight)}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface text-left md:col-span-7 focus-visible:outline-2 focus-visible:outline-ocean"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <ImageWithFallback
                src={wideRight.image}
                alt={wideRight.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/20 to-transparent"
            />
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-ocean">{wideRight.category}</p>
                <p className="mt-1 font-display text-xl font-medium text-ink">
                  {wideRight.title}
                </p>
              </div>
              <Maximize2
                className="h-4 w-4 shrink-0 text-ink-secondary transition-colors group-hover:text-ocean"
                aria-hidden="true"
              />
            </div>
          </button>
        </div>
      </div>

      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-canvas/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Fechar visualização"
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-canvas/80 text-ink transition-colors hover:border-ocean hover:text-ocean focus-visible:outline-2 focus-visible:outline-ocean"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden">
              <ImageWithFallback
                src={lightboxItem.image}
                alt={lightboxItem.imageAlt}
                className="h-full max-h-[75vh] w-full object-contain bg-canvas"
              />
            </div>
            <div className="border-t border-line px-6 py-4">
              <p className="text-xs text-ocean">{lightboxItem.category}</p>
              <p className="mt-1 font-display text-xl font-medium text-ink">
                {lightboxItem.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
