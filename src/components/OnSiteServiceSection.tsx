import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ONSITE_OPTIONS } from '../data/eventData';
import { ImageWithFallback } from './ImageWithFallback';

interface OnSiteServiceSectionProps {
  onSelectLocationType: (locationType: string) => void;
}

export function OnSiteServiceSection({
  onSelectLocationType,
}: OnSiteServiceSectionProps) {
  const [activeOptionId, setActiveOptionId] = useState<string>(ONSITE_OPTIONS[0].id);
  const prefersReduced = useReducedMotion();

  const currentOption =
    ONSITE_OPTIONS.find((opt) => opt.id === activeOptionId) ?? ONSITE_OPTIONS[0];

  return (
    <section
      id="atendimento"
      className="relative overflow-hidden border-t border-line/70 bg-surface/50 py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-purple/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-line bg-surface-elevated lg:min-h-[520px]">
              <ImageWithFallback
                src={currentOption.image}
                alt={currentOption.imageAlt}
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-canvas/55 via-transparent to-purple/20"
              />
            </div>
          </div>

          <div className="order-1 flex flex-col justify-between lg:order-2 lg:col-span-5">
            <div>
              <p className="text-sm font-medium tracking-wide text-purple-soft">
                Vamos até você
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.15rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                Montagem completa no seu local.
              </h2>

              <div className="mt-8 flex flex-wrap gap-2">
                {ONSITE_OPTIONS.map((option) => {
                  const isActive = option.id === currentOption.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setActiveOptionId(option.id)}
                      className={`min-h-[42px] rounded-lg border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean ${
                        isActive
                          ? 'border-ocean bg-ocean text-ocean-ink font-semibold'
                          : 'border-line bg-surface text-ink-secondary hover:text-ink'
                      }`}
                    >
                      {option.name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                <h3 className="font-display text-2xl font-medium text-ink">
                  {currentOption.subtitle}
                </h3>
                <p className="mt-3 text-base text-ink-secondary">
                  {currentOption.description}
                </p>

                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {currentOption.highlights.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 py-3.5 text-sm text-ink"
                    >
                      <span className="text-xs font-semibold tabular-nums text-ocean">
                        0{index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => onSelectLocationType(currentOption.name)}
                className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-lg bg-purple px-6 py-3 text-sm font-semibold text-ink whitespace-nowrap transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-ocean"
              >
                <span>Solicitar montagem no meu local</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
