import { useEffect, useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/eventData';

interface ContactSectionProps {
  prefill: { text: string; id: number } | null;
  selectedItems: string[];
}

const EVENT_TYPES = [
  'Festa Infantil',
  'Mesversário',
  'Aniversário Jovem / Adulto',
  'Chá Revelação / Bebê',
  'Outro evento',
];

export function ContactSection({
  prefill,
  selectedItems,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!prefill) return;
    setMessage(prefill.text);
    setSubmittedUrl(null);
  }, [prefill]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    const digits = phone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      setErrorMsg('Por favor, informe seu nome para continuarmos.');
      return;
    }

    if (digits.length < 10) {
      setErrorMsg('Informe um telefone ou WhatsApp válido com DDD.');
      return;
    }

    const parts = [
      `Olá, ${BUSINESS_INFO.name}! Me chamo ${trimmedName}.`,
      `Telefone: ${phone.trim()}`,
      `Tipo de evento: ${eventType}`,
    ];

    if (selectedItems.length > 0) {
      parts.push(`Itens desejados na decoração: ${selectedItems.join(', ')}`);
    }

    if (message.trim()) {
      parts.push(`Local e detalhes: ${message.trim()}`);
    }

    const url = buildWhatsAppUrl(parts.join('\n'));
    setSubmittedUrl(url);
  };

  const quickWhatsAppUrl = buildWhatsAppUrl(
    `Olá, ${BUSINESS_INFO.name}! Gostaria de solicitar um orçamento de decoração para meu evento.`
  );

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-line/70 bg-surface/40 py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-ocean/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-medium tracking-wide text-ocean">
                Orçamento & Atendimento
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.15rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                Vamos decorar a sua próxima festa.
              </h2>
              <p className="mt-4 text-base text-ink-secondary max-w-[40ch]">
                Conte o tema e o endereço do evento. Nossa equipe vai até o local escolhido em Catalão e região.
              </p>

              <dl className="mt-10 divide-y divide-line border-y border-line">
                <div className="flex items-start gap-4 py-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium text-ink-muted">Sede em Catalão</dt>
                    <dd className="mt-1 text-sm text-ink">{BUSINESS_INFO.address}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium text-ink-muted">Telefone & WhatsApp</dt>
                    <dd className="mt-1 text-sm font-medium tabular-nums text-ink">
                      {BUSINESS_INFO.phoneDisplay}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium text-ink-muted">Horário</dt>
                    <dd className="mt-1 text-sm text-ink">{BUSINESS_INFO.hours}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-8">
              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-lg bg-ocean px-6 py-3 text-sm font-semibold text-ocean-ink whitespace-nowrap transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] sm:w-auto focus-visible:outline-2 focus-visible:outline-ocean"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Chamar no WhatsApp agora</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-line bg-surface p-6 sm:p-10"
            >
              <h3 className="font-display text-2xl font-medium text-ink">
                Solicite seu orçamento
              </h3>
              <p className="mt-1 text-sm text-ink-secondary">
                Informe o tema, a data e onde a festa será montada para enviarmos uma proposta pelo WhatsApp.
              </p>

              {selectedItems.length > 0 && (
                <div className="mt-5 rounded-xl border border-ocean/40 bg-canvas/60 px-4 py-3 text-xs text-ink-secondary">
                  <span className="font-semibold text-ocean">Itens incluídos: </span>
                  {selectedItems.join(' · ')}
                </div>
              )}

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-ink"
                  >
                    Nome completo
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ocean focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-ink"
                  >
                    WhatsApp ou telefone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(64) 99999-9999"
                    className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm tabular-nums text-ink placeholder:text-ink-muted focus:border-ocean focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-type"
                  className="block text-sm font-medium text-ink"
                >
                  Tipo de celebração
                </label>
                <select
                  id="contact-type"
                  name="eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink focus:border-ocean focus:outline-none"
                >
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-ink"
                >
                  Tema, data e local da montagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex.: Festa infantil de 5 anos, tema azul e roxo, montagem no salão do condomínio."
                  className="mt-2 w-full resize-y rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ocean focus:outline-none"
                />
              </div>

              {errorMsg && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg border border-purple-soft/50 bg-purple/25 px-4 py-2.5 text-sm text-ink"
                >
                  {errorMsg}
                </p>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-purple px-7 py-3 text-sm font-semibold text-ink whitespace-nowrap transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-ocean"
                >
                  Preparar envio no WhatsApp
                </button>

                {submittedUrl && (
                  <a
                    href={submittedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-ocean px-6 py-3 text-sm font-semibold text-ocean-ink whitespace-nowrap transition-transform duration-150 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-ocean"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Abrir conversa pronta</span>
                  </a>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
