import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, Palette, Plus } from 'lucide-react';
import { DECOR_CATEGORIES, type DecorCategory } from '../data/eventData';
import { ImageWithFallback } from './ImageWithFallback';

interface DecorCatalogSectionProps {
  selectedItems: string[];
  onToggleItem: (itemName: string) => void;
  onRequestDecorQuote: (categoryLabel: string) => void;
}

export function DecorCatalogSection({
  selectedItems,
  onToggleItem,
  onRequestDecorQuote,
}: DecorCatalogSectionProps) {
  const [activeId, setActiveId] = useState<string>(DECOR_CATEGORIES[0].id);
  const prefersReduced = useReducedMotion();

  const activeCategory: DecorCategory =
    DECOR_CATEGORIES.find((cat) => cat.id === activeId) ?? DECOR_CATEGORIES[0];

  return (
    <section
      id="decoracoes"
      className="border-t border-line/70 py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-sm font-medium tracking-wide text-ocean">
                Catálogo de Decorações
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.15rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                Cenários criados para encantar.
              </h2>
              <p className="mt-4 text-base text-ink-secondary max-w-[46ch]">
                {activeCategory.summary}
              </p>

              <div
                role="tablist"
                aria-label="Estilos de decoração"
                className="mt-8 inline-flex flex-wrap gap-1.5 rounded-xl border border-line bg-surface p-1.5"
              >
                {DECOR_CATEGORIES.map((category) => {
                  const isSelected = category.id === activeCategory.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveId(category.id)}
                      className={`min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean ${
                        isSelected
                          ? 'bg-purple text-ink'
                          : 'text-ink-secondary hover:text-ink'
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 divide-y divide-line border-y border-line">
                {activeCategory.items.map((item, idx) => {
                  const isAdded = selectedItems.includes(item.name);
                  return (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-6 py-5"
                    >
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs font-medium tabular-nums text-ocean">
                            0{idx + 1}.
                          </span>
                          <h3 className="font-display text-lg font-medium text-ink">
                            {item.name}
                          </h3>
                        </div>
                        <p className="mt-1 pl-7 text-sm text-ink-secondary">
                          {item.note}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onToggleItem(item.name)}
                        aria-pressed={isAdded}
                        aria-label={
                          isAdded
                            ? `Remover ${item.name} do orçamento`
                            : `Incluir ${item.name} no orçamento`
                        }
                        className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean ${
                          isAdded
                            ? 'border-ocean bg-ocean text-ocean-ink'
                            : 'border-line bg-surface text-ink-secondary hover:border-ocean/60 hover:text-ink'
                        }`}
                      >
                        {isAdded ? (
                          <Check className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-sm text-ink-secondary">
                <Palette className="h-4 w-4 text-ocean" aria-hidden="true" />
                <span>
                  {selectedItems.length > 0
                    ? `${selectedItems.length} ${
                        selectedItems.length === 1 ? 'item selecionado' : 'itens selecionados'
                      } para orçamento`
                    : 'Toque em + para montar sua decoração'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onRequestDecorQuote(activeCategory.label)}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-ocean/60 bg-surface px-5 py-2.5 text-sm font-semibold text-ocean whitespace-nowrap transition-colors duration-150 hover:bg-ocean hover:text-ocean-ink focus-visible:outline-2 focus-visible:outline-ocean"
              >
                Orçar esta decoração
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-t-[10rem] rounded-b-2xl border border-line bg-surface lg:min-h-[560px]">
              <ImageWithFallback
                src={activeCategory.image}
                alt={activeCategory.imageAlt}
                className="h-full w-full object-cover object-center transition-transform duration-500"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas/85 via-canvas/30 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-medium text-ocean">
                  {activeCategory.label}
                </p>
                <p className="mt-1 font-display text-2xl font-medium text-ink">
                  {activeCategory.headline}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
