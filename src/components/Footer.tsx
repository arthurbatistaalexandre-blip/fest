import { BUSINESS_INFO } from '../data/eventData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {BUSINESS_INFO.name}
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            {BUSINESS_INFO.address} · Atendimento {BUSINESS_INFO.hours}
          </p>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center gap-6 text-sm text-ink-secondary"
        >
          <a href="#inicio" className="transition-colors hover:text-ink">
            Início
          </a>
          <a href="#decoracoes" className="transition-colors hover:text-ink">
            Decorações
          </a>
          <a href="#atendimento" className="transition-colors hover:text-ink">
            Como funciona
          </a>
          <a href="#galeria" className="transition-colors hover:text-ink">
            Galeria
          </a>
          <a href="#contato" className="transition-colors hover:text-ink">
            Contato
          </a>
        </nav>

        <p className="text-xs text-ink-muted">
          © {year} {BUSINESS_INFO.name}
        </p>
      </div>
    </footer>
  );
}
