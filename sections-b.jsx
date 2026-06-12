/* Sections B: Metodo, Professores, Depoimentos, Investimento, Inscrição, FAQ, CTA, Footer */
const DSb = window.POCUSMedsafeDesignSystem_c0650d;

function Metodo() {
  const band = [
    { k: 'Modalidade', v: 'Teórico-prática' },
    { k: 'Público', v: 'Médicos e acadêmicos' },
    { k: 'Carga horária', v: '10 horas' },
    { k: 'Certificação', v: 'Certificado de conclusão' },
    { k: 'Vagas', v: 'Máx. 16 alunos' }
  ];
  const chips = [
    { icon: 'Presentation', t: 'Aulas com slides' },
    { icon: 'MonitorPlay', t: 'Demonstrações práticas' },
    { icon: 'Activity', t: 'Simulações clínicas' },
    { icon: 'MessagesSquare', t: 'Discussão de casos' },
    { icon: 'Stethoscope', t: 'Prática supervisionada' },
    { icon: 'BookOpen', t: 'Material de apoio & e-book' }
  ];
  const cron = [
    { h: '07:00 – 10:00', d: 'Teoria + prática', b: false },
    { h: '10:00 – 10:30', d: 'Intervalo', b: true },
    { h: '10:30 – 12:00', d: 'Teoria + prática', b: false },
    { h: '12:00 – 13:00', d: 'Intervalo para almoço', b: true },
    { h: '13:00 – 15:00', d: 'Teoria + prática', b: false },
    { h: '15:00 – 15:20', d: 'Intervalo', b: true },
    { h: '15:20 – 17:00', d: 'Teoria + prática', b: false }
  ];
  return (
    <section className="lp-section lp-tint" id="curso">
      <div className="lp-container">
        <div className="lp-head">
          <Reveal><span className="lp-eyebrow">O curso</span></Reveal>
          <Reveal delay={60}>
            <h2 className="lp-h2">Uma formação presencial, teórico-prática e aplicável já no próximo plantão.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lp-lede">
              O método combina conteúdo teórico, demonstrações, simulações, discussão de casos
              e prática supervisionada com ultrassons — do conceito à conduta.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="lp-band" style={{ marginBottom: 40 }}>
            {band.map((b) => (
              <div key={b.k}>
                <p className="lp-band__k">{b.k}</p>
                <p className="lp-band__v">{b.v}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="lp-grid lp-grid--2" style={{ gap: 32, alignItems: 'start' }}>
          <Reveal>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: 'var(--fs-h3)', color: 'var(--text-strong)', margin: '0 0 18px' }}>
                Como você aprende
              </h3>
              <div className="lp-learn">
                {chips.map((c) => (
                  <div className="lp-learn__row" key={c.t}>
                    <span className="lp-learn__ic"><Icon name={c.icon} size={20} /></span>
                    <span className="lp-learn__t">{c.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: 'var(--fs-h3)', color: 'var(--text-strong)', margin: '0 0 8px' }}>
                Cronograma do dia
              </h3>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', margin: '0 0 14px' }}>
                Sábado, 04 de julho
              </p>
              <div className="lp-time">
                {cron.map((r, i) => (
                  <div className="lp-time__row" data-break={r.b} key={i}>
                    <span className="lp-time__h">{r.h}</span>
                    <span className="lp-time__d">{r.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Professores() {
  const profs = [
    {
      ini: 'FC',
      slot: 'prof-francisco',
      photo: asset('fotoFrancisco', 'assets/foto-francisco.png'),
      spec: 'CARDIO · ECO · UTI',
      name: 'Dr. Francisco César de Oliveira Gonçalves',
      role: 'Cardiologia · Ecocardiografia · Terapia Intensiva',
      cred: [
        'Residências em Clínica Médica, Cardiologia (HU-UFPI) e Ecocardiografia (HUWC/UFC)',
        'Título de Especialista em Terapia Intensiva pela AMIB/AMB',
        'Preceptor da Residência de Terapia Intensiva do Hospital Getúlio Vargas',
        'Cardiologista da linha de cuidados de IAM do Estado do Piauí',
        'Coordenador das UTIs 1/2 do Hospital Getúlio Vargas',
        'Diarista da UTI Cardíaca do Hospital Getúlio Vargas'
      ]
    },
    {
      ini: 'TN',
      slot: 'prof-thiago',
      photo: asset('fotoDocente', 'assets/foto-docente.png'),
      spec: 'CARDIO · ECO · USP',
      name: 'Dr. Thiago Nunes Pereira Leite',
      role: 'Doutor em Cardiologia (USP) · Ecocardiografia',
      cred: [
        'Doutorado em Cardiologia pela Universidade de São Paulo (USP)',
        'Residência em Cardiologia e Ecocardiografia pelo InCor – HCFMUSP',
        'Especialista em Cardiologia, Ecocardiografia e Clínica Médica',
        'Preceptor das Residências de Cardiologia e Clínica Médica (HU-UFPI) e professor da UNIFACID',
        'Coordenador Médico da Medsafe Brasil'
      ]
    }
  ];
  return (
    <section className="lp-section lp-navy" id="professores">
      <img src={asset('grafismoHook', 'assets/grafismo-hook.png')} alt="" aria-hidden="true"
        style={{ position: 'absolute', left: '-3%', bottom: '-8%', height: '70%',
          opacity: 0.18, filter: 'brightness(1.6)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-head">
          <Reveal><span className="lp-eyebrow">Corpo docente</span></Reveal>
          <Reveal delay={60}><h2 className="lp-h2">Quem ensina, faz.</h2></Reveal>
          <Reveal delay={100}>
            <p className="lp-lede">
              Preceptores e coordenadores médicos com atuação real em UTI, cardiologia e
              ecocardiografia — experiência que vira didática à beira-leito.
            </p>
          </Reveal>
        </div>
        <div className="lp-fac">
          {profs.map((p, i) => (
            <Reveal key={p.ini} delay={i * 90}>
              <article className={'lp-fac__row' + (i % 2 === 1 ? ' lp-fac__row--rev' : '')}>
                <div className="lp-fac__photo">
                  <img src={p.photo} alt={p.name} />
                </div>
                <div className="lp-fac__body">
                  <div className="lp-fac__meta">
                    <span className="lp-fac__ix">{String(i + 1).padStart(2, '0')} / {String(profs.length).padStart(2, '0')}</span>
                    <span className="lp-fac__spec"><Icon name="Activity" size={12} strokeWidth={2} /> {p.spec}</span>
                  </div>
                  <h3 className="lp-fac__name">{p.name}</h3>
                  <p className="lp-fac__role">{p.role}</p>
                  <ul className="lp-fac__creds">
                    {p.cred.map((c, j) => (
                      <li className="lp-fac__cred" key={j}>
                        <span className="lp-fac__cred-ix">{String(j + 1).padStart(2, '0')}</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Investimento() {
  const { Button } = DSb;
  const incl = [
    '10 horas de formação presencial',
    'Aulas teóricas e práticas',
    'Prática supervisionada com ultrassons',
    'E-book e materiais didáticos',
    'Certificado de conclusão',
    'Suporte para dúvidas e contato da equipe'
  ];
  return (
    <section className="lp-section lp-tint" id="investimento">
      <div className="lp-container">
        <div className="lp-head">
          <Reveal><span className="lp-eyebrow">Investimento</span></Reveal>
          <Reveal delay={60}>
            <h2 className="lp-h2">Um dia de formação. Uma habilidade para a carreira inteira.</h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="lp-price">
            <div className="lp-price__main">
              <img className="lp-price__grafismo" src={asset('grafismoRings', 'assets/grafismo-rings.svg')} alt="" aria-hidden="true" />
              <p className="lp-price__from">A partir de</p>
              <p className="lp-price__big">R$ 1.697<small>,00</small></p>
              <p className="lp-price__inst">em até 12x no cartão de crédito</p>
              <div className="lp-price__cash">
                <Icon name="Tag" size={18} style={{ color: 'var(--clinical-blue)' }} />
                <span>À vista:</span> <b>R$ 1.528,29</b>
                <DSb.Badge variant="accent" size="sm">10% OFF</DSb.Badge>
              </div>
              <Button variant="accent" size="lg" fullWidth
                iconRight={<Icon name="ArrowRight" size={20} />}
                onClick={() => scrollToId('inscricao')}>
                Fazer minha inscrição
              </Button>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--blue-200)', margin: '16px 0 0',
                display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="Users" size={15} /> Turma limitada a 16 participantes
              </p>
            </div>
            <div className="lp-price__incl">
              <h4>O que está incluído</h4>
              <ul>
                {incl.map((it) => (
                  <li key={it}><Icon name="Check" size={18} /> {it}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Inscricao() {
  const { Button, Field, Input, Checkbox, Alert } = DSb;
  // Endpoint do Formspree — as inscrições caem na sua dashboard e no seu e-mail.
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meewrovy';
  // Número de WhatsApp da equipe (formato internacional, só dígitos): +55 86 99807-9236
  const WHATSAPP_NUMBER = '5586998079236';
  const waLink = () => {
    const primeiro = form.nome.trim().split(' ')[0] || '';
    const msg = `Olá! Acabei de me inscrever no curso POCUS da Medsafe` +
      (primeiro ? `. Meu nome é ${primeiro}` : '') +
      ` e gostaria de receber as orientações para garantir minha vaga.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };
  const [form, setForm] = React.useState({ nome: '', email: '', whats: '' });
  const [accept, setAccept] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!form.nome.trim()) er.nome = 'Informe seu nome completo.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'Informe um e-mail válido.';
    if (form.whats.replace(/\D/g, '').length < 10) er.whats = 'Informe um telefone com DDD.';
    if (!accept) er.accept = true;
    setErrors(er);
    if (Object.keys(er).length) return;

    setSubmitError(false);
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          telefone: form.whats,
          _subject: `Nova inscrição POCUS — ${form.nome}`
        })
      });
      if (!res.ok) throw new Error('Falha no envio');
      window.fbq?.('track', 'Lead'); // Meta Pixel
      setSent(true);
    } catch (err) {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="lp-section lp-navy" id="inscricao">
      <div className="lp-container">
        <div className="lp-form-wrap">
          <Reveal>
            <div>
              <span className="lp-eyebrow">Inscrição</span>
              <h2 className="lp-h2">Garanta sua vaga na próxima turma.</h2>
              <p className="lp-lede" style={{ marginBottom: 8 }}>
                Preencha seus dados para receber as informações de inscrição e assegurar seu
                lugar no curso POCUS da Medsafe.
              </p>
              <ul className="lp-form__list">
                <li>
                  <span className="lp-itile"><Icon name="CalendarDays" size={18} /></span>
                  <div><b>04 de julho · Teresina/PI</b>
                    <span>Auditório Parnaíba — Manhattan River Center (Torre 2)</span></div>
                </li>
                <li>
                  <span className="lp-itile"><Icon name="Users" size={18} /></span>
                  <div><b>Apenas 16 vagas</b>
                    <span>Turma reduzida para garantir prática individual com os ultrassons.</span></div>
                </li>
                <li>
                  <span className="lp-itile"><Icon name="CalendarClock" size={18} /></span>
                  <div><b>Inscrições até 02 de julho</b>
                    <span>Após a confirmação, a equipe acompanha você com todas as orientações.</span></div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={90}>
            {sent ? (
              <div className="lp-form" style={{ alignItems: 'flex-start', gap: 16 }}>
                <span className="lp-itile" style={{ background: 'var(--success-soft)',
                  color: 'var(--success)', width: 56, height: 56 }}>
                  <Icon name="CheckCheck" size={28} />
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: 'var(--fs-h3)', color: 'var(--text-strong)', margin: 0 }}>
                  Inscrição recebida!
                </h3>
                <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 1.6 }}>
                  Obrigado, {form.nome.split(' ')[0]}. O último passo é falar com a nossa
                  equipe pelo WhatsApp — é por lá que confirmamos sua vaga e enviamos as
                  informações de pagamento, o endereço e todas as orientações do curso.
                </p>
                <Button variant="accent" size="lg" className="lp-whatsapp-btn"
                  iconLeft={<img className="lp-whatsapp-btn__icon"
                    src={asset('whatsappIcon', 'assets/whatsapp.svg')} alt="" aria-hidden="true" />}
                  iconRight={<Icon name="ArrowRight" size={18} />}
                  onClick={() => { window.fbq?.('track', 'Contact'); // Meta Pixel
                    window.open(waLink(), '_blank', 'noopener'); }}>
                  Falar com a equipe no WhatsApp
                </Button>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>
                  Não foi redirecionado?{' '}
                  <a className="pocus-link" href={waLink()}
                    onClick={() => { window.fbq?.('track', 'Contact'); /* Meta Pixel */ }}
                    target="_blank" rel="noopener noreferrer">Abra a conversa por aqui</a>.
                </p>
                <Button variant="ghost" onClick={() => { setSent(false);
                  setForm({ nome: '', email: '', whats: '' }); setAccept(false); }}>
                  Fazer nova inscrição
                </Button>
              </div>
            ) : (
              <form className="lp-form" onSubmit={submit} noValidate>
                <Field label="Nome completo" htmlFor="f-nome"
                  error={errors.nome}>
                  <Input id="f-nome" placeholder="Seu nome completo" value={form.nome}
                    onChange={set('nome')} invalid={!!errors.nome}
                    iconLeft={<Icon name="User" size={18} />} />
                </Field>
                <Field label="E-mail" htmlFor="f-email"
                  hint={!errors.email ? 'Usaremos para enviar os detalhes da inscrição.' : undefined}
                  error={errors.email}>
                  <Input id="f-email" type="email" placeholder="voce@hospital.br"
                    value={form.email} onChange={set('email')} invalid={!!errors.email}
                    iconLeft={<Icon name="Mail" size={18} />} />
                </Field>
                <Field label="Telefone / WhatsApp" htmlFor="f-whats" error={errors.whats}>
                  <Input id="f-whats" type="tel" placeholder="(86) 90000-0000"
                    value={form.whats} onChange={set('whats')} invalid={!!errors.whats}
                    iconLeft={<Icon name="Phone" size={18} />} />
                </Field>
                <Checkbox checked={accept} onChange={setAccept}
                  label="Aceito receber informações sobre o curso pelo WhatsApp e e-mail." />
                {errors.accept && (
                  <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--danger)' }}>
                    É necessário aceitar para continuar.
                  </span>
                )}
                {submitError && (
                  <Alert variant="danger" title="Não foi possível enviar agora">
                    Verifique sua conexão e tente novamente. Se persistir, fale com a equipe
                    pelo WhatsApp.
                  </Alert>
                )}
                <Button type="submit" variant="primary" size="lg" fullWidth
                  disabled={submitting}
                  iconRight={submitting ? undefined : <Icon name="ArrowRight" size={20} />}>
                  {submitting ? 'Enviando…' : 'Quero garantir minha vaga'}
                </Button>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', margin: 0,
                  textAlign: 'center' }}>
                  Turma limitada a 16 participantes.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: 'Para quem é o curso?',
      a: 'Para médicos e acadêmicos de Medicina de todos os períodos que querem aplicar o ultrassom Point of Care no raciocínio clínico e na conduta à beira-leito.' },
    { q: 'Preciso ter experiência prévia com ultrassom?',
      a: 'Não. O curso parte dos conceitos básicos — incluindo a escolha do transdutor — e evolui até as aplicações clínicas, com prática supervisionada para todos os níveis.' },
    { q: 'O curso é prático?',
      a: 'Sim. É teórico-prático: além das aulas expositivas, há demonstrações, simulações, discussão de casos e prática supervisionada com ultrassons reais.' },
    { q: 'Recebo certificado?',
      a: 'Sim. Ao concluir o curso você recebe certificado de conclusão, mediante participação nas atividades propostas.' },
    { q: 'Onde será realizado?',
      a: 'No Auditório Parnaíba — Manhattan River Center (Torre 2), Av. Senador Área Leão, 2185, Teresina/PI.' },
    { q: 'Até quando posso me inscrever?',
      a: 'As inscrições vão até 02 de julho, ou até o preenchimento das 16 vagas — o que ocorrer primeiro.' },
    { q: 'Quais as formas de pagamento?',
      a: 'R$ 1.697,00 em até 12x no cartão de crédito, ou R$ 1.528,29 à vista com 10% de desconto.' }
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="lp-section lp-white" id="faq">
      <div className="lp-container lp-container--narrow">
        <div className="lp-head lp-head--center">
          <Reveal><span className="lp-eyebrow">Dúvidas frequentes</span></Reveal>
          <Reveal delay={60}><h2 className="lp-h2">Ainda com dúvidas? Comece por aqui.</h2></Reveal>
        </div>
        <Reveal>
          <div className="lp-faq">
            {items.map((it, i) => (
              <div className="lp-faq__item" data-open={open === i} key={i}>
                <button className="lp-faq__q" onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}>
                  {it.q}
                  <Icon name="ChevronDown" size={22} />
                </button>
                <div className="lp-faq__a" ref={(el) => {
                  if (el) el.style.maxHeight = open === i ? el.scrollHeight + 'px' : '0px';
                }}>
                  <div className="lp-faq__a-inner">{it.a}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTAFinal() {
  const { Button } = DSb;
  return (
    <section className="lp-section lp-cta" id="cta">
      <img className="lp-cta__grafismo-l" src={asset('grafismoArc', 'assets/grafismo-arc.png')} alt="" aria-hidden="true" />
      <img className="lp-cta__grafismo-r" src={asset('grafismoArc', 'assets/grafismo-arc.png')} alt="" aria-hidden="true" />
      <div className="lp-container lp-container--narrow" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <span className="lp-eyebrow" style={{ color: 'var(--clinical-blue)' }}>Ver. Interpretar. Agir.</span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="lp-h2" style={{ fontSize: 'clamp(2rem, 1.3rem + 2.8vw, 3rem)' }}>
            Desenvolva uma habilidade que pode mudar sua tomada de decisão à beira-leito.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="lp-lede" style={{ marginInline: 'auto', color: 'var(--mist-blue)' }}>
            Garanta sua vaga no curso POCUS da Medsafe e aprenda, na prática, como aplicar o
            ultrassom Point of Care em cenários reais da medicina.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div style={{ marginTop: 32 }}>
            <Button variant="accent" size="lg"
              iconRight={<Icon name="ArrowRight" size={20} />}
              onClick={() => scrollToId('inscricao')}>
              Quero me inscrever
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-container">
        <div className="lp-footer__top">
          <div>
            <img className="lp-footer__logo" src={asset('logoPocusWhite', 'assets/logo-pocus-white.png')} alt="POCUS" />
            <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--mist-blue)', maxWidth: '34ch',
              margin: '18px 0 0', lineHeight: 1.6 }}>
              Conhecimento à beira-leito para decisões mais seguras. Um curso Medsafe de
              ultrassonografia Point of Care.
            </p>
          </div>
          <div className="lp-footer__cols">
            <div className="lp-footer__col">
              <h5>O curso</h5>
              <a href="#problema">O problema</a>
              <a href="#solucao">A solução</a>
              <a href="#professores">Professores</a>
              <a href="#investimento">Investimento</a>
            </div>
            <div className="lp-footer__col">
              <h5>Onde &amp; quando</h5>
              <p>04 de julho · Sábado</p>
              <p>Auditório Parnaíba</p>
              <p>Manhattan River Center (Torre 2)</p>
              <p>Teresina / PI</p>
            </div>
            <div className="lp-footer__col">
              <h5>Inscrições</h5>
              <p>Até 02 de julho</p>
              <p>Máx. 16 participantes</p>
              <a href="#inscricao">Garantir minha vaga →</a>
            </div>
          </div>
        </div>
        <div className="lp-footer__bottom">
          <span>© 2026 Medsafe · POCUS — Ultrassonografia Point of Care</span>
          <span>Ver. Interpretar. Agir.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Metodo, Professores, Investimento, Inscricao, FAQ, CTAFinal, Footer });
