import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { HERO_MEDIA } from '../data/eventData';
import { ImageWithFallback } from './ImageWithFallback';

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-purple/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-[340px] w-[340px] rounded-full bg-ocean/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="font-display text-[clamp(2.5rem,5.2vw,4.75rem)] font-semibold leading-[1.04] tracking-tight text-ink">
              Transformamos qualquer local em festa inesquecível.
            </h1>
          </motion.div>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-6 lg:col-span-4 lg:pb-2"
          >
            <p className="text-base leading-relaxed text-ink-secondary max-w-[38ch]">
              Decorações completas para festas infantis e eventos em Catalão, montadas onde você escolher.
            </p>
            <a
              href="#contato"
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-lg bg-ocean px-6 py-3 text-sm font-semibold text-ocean-ink whitespace-nowrap transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ocean"
            >
              <span>Entrar em contato</span>
              <ArrowDownRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 sm:mt-12 overflow-hidden rounded-2xl border border-line bg-surface"
        >
          <div className="aspect-[16/9] max-h-[62vh] w-full overflow-hidden">
            <ImageWithFallback
              src={HERO_MEDIA.image}
              alt={HERO_MEDIA.alt}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-canvas/85 via-canvas/25 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
