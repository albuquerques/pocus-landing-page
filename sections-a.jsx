/* Sections A: Header, Hero, Problema, Solução, Sobre o curso */
const DS = window.POCUSMedsafeDesignSystem_c0650d;

function Header() {
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const { Button } = DS;
  return (
    <header className="lp-header" data-stuck={stuck}>
      <div className="lp-container lp-header__inner">
        <a href="#top" aria-label="POCUS — início">
          <img className="lp-header__logo" src={asset('logoPocus', 'assets/logo-pocus.png')} alt="POCUS" />
        </a>
        <nav className="lp-header__nav">
          <a href="#problema">O problema</a>
          <a href="#solucao">O curso</a>
          <a href="#professores">Professores</a>
          <a href="#investimento">Investimento</a>
          <a href="#faq">FAQ</a>
        </nav>
        <Button variant="primary" size="sm" onClick={() => scrollToId('investimento')}>
          Garantir minha vaga
        </Button>
      </div>
    </header>
  );
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
}

function Hero() {
  const { Button, Badge } = DS;
  const facts = [
    { icon: 'CalendarDays', k: 'Data', v: '04 de julho' },
    { icon: 'MapPin', k: 'Local', v: 'Teresina / PI' },
    { icon: 'Clock', k: 'Carga horária', v: '10 horas' },
    { icon: 'Users', k: 'Turma', v: 'Máx. 16 alunos' }
  ];
  return (
    <section className="lp-hero" id="top">
      <img src={asset('grafismoArc', 'assets/grafismo-arc.png')} alt="" aria-hidden="true"
        style={{ position: 'absolute', right: '-12%', top: '0', height: '100%', width: 'auto',
          opacity: 0.16, filter: 'brightness(1.7)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-hero__grid">

          <Reveal className="lp-hero__cell-eyebrow">
            <span className="lp-eyebrow" style={{ color: 'var(--clinical-blue)' }}>
              Curso presencial · Medsafe
            </span>
          </Reveal>

          <Reveal delay={120} className="lp-hero__cell-video">
            <VideoPlaceholder />
          </Reveal>

          <div className="lp-hero__cell-body">
            <Reveal delay={60}>
              <h1 className="lp-hero__title">
                O médico que usa <em>POCUS</em> decide mais rápido, erra menos e <em>sai do plantão mais seguro</em>.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="lp-hero__sub">
                Curso teórico-prático de POCUS para médicos e acadêmicos de Medicina, com foco
                em raciocínio clínico, diagnóstico diferencial e aplicação imediata em plantões,
                enfermaria, UTI e ambulatório.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="lp-hero__facts">
                {facts.map((f) => (
                  <div className="lp-fact" key={f.k}>
                    <span className="lp-fact__ico"><Icon name={f.icon} size={22} /></span>
                    <div>
                      <p className="lp-fact__k">{f.k}</p>
                      <p className="lp-fact__v">{f.v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="lp-hero__cta">
                <Button variant="accent" size="lg"
                  iconRight={<Icon name="ArrowRight" size={20} />}
                  onClick={() => scrollToId('investimento')}>
                  Garantir minha vaga
                </Button>
                <span className="lp-hero__note">
                  Inscrições até <strong>02 de julho</strong>
                </span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

function VideoPlaceholder() {
  const { Badge } = DS;
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
  };

  return (
    <div className="lp-video" onClick={() => { if (!playing) play(); }} role="button"
      aria-label="Vídeo de apresentação do curso">
      <video
        ref={videoRef}
        className="lp-video__el"
        src={asset('videoChamada', 'assets/chamada-francisco.mp4')}
        poster="assets/poster-francisco.jpg"
        playsInline
        preload="metadata"
        controls={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      ></video>
      {!playing && (
        <React.Fragment>
          <div className="lp-video__tag">
            <span className="lp-video__dur">
              <Icon name="Clock" size={13} strokeWidth={2} /> 0:28
            </span>
          </div>
          <div className="lp-video__play">
            <Icon name="Play" size={30} style={{ marginLeft: 4, fill: '#fff' }} strokeWidth={1.5} />
          </div>
          <div className="lp-video__label">
            <p className="t">Assista à apresentação</p>
            <p className="s">O Dr. Francisco César apresenta o curso e explica o POCUS na prática.</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

function Problema() {
  const pains = [
    { n: '01', icon: 'GitFork', t: 'Causas que se confundem', tag: 'Dispneia · Choque',
      d: 'Diferenciar origem cardíaca, pulmonar e vascular em poucos minutos nem sempre é simples.' },
    { n: '02', icon: 'HelpCircle', t: 'Insegurança à beira-leito', tag: 'Decisão crítica',
      d: 'Decidir conduta sem confirmação objetiva gera hesitação em momentos críticos.' },
    { n: '03', icon: 'Hourglass', t: 'Exames que demoram', tag: 'Tempo que custa',
      d: 'Dependência de exames externos que podem atrasar a definição diagnóstica.' },
    { n: '04', icon: 'Crosshair', t: 'Precisão sob pressão', tag: 'Plantão · UTI',
      d: 'Plantões e ambientes críticos exigem mais acurácia e agilidade na decisão.' }
  ];
  return (
    <section className="lp-section lp-tint" id="problema">
      <img src={asset('grafismoBeamC', 'assets/grafismo-beam-c.png')} alt="" aria-hidden="true" className="lp-prob__beam" />
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-head">
          <Reveal><span className="lp-eyebrow">O problema</span></Reveal>
          <Reveal delay={60}>
            <h2 className="lp-h2">Conhecimento importa. Mas a velocidade da decisão muda desfechos.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lp-lede">
              Em cenários como dispneia, choque, suspeita de congestão, TVP ou acesso venoso
              difícil, a capacidade de tomar decisões rápidas e precisas pode mudar o desfecho
              do paciente.
            </p>
          </Reveal>
        </div>

        <div className="lp-prob">
          <Reveal delay={120}>
            <div className="lp-scene">
              <image-slot id="problema-img" shape="rounded" radius="16"
                placeholder="Arraste uma imagem clínica"></image-slot>
              <span className="lp-scene__live"><i></i>Beira-leito</span>
              <div className="lp-scene__q">
                <span className="lp-scene__q-k">O dilema</span>
                <p className="lp-scene__q-t">“Qual janela você escolheria?”</p>
              </div>
            </div>
          </Reveal>

          <ol className="lp-path">
            {pains.map((p, i) => (
              <Reveal as="li" className="lp-path__item" key={p.t} delay={140 + i * 70}>
                <span className="lp-path__num">{p.n}</span>
                <div className="lp-path__body">
                  <div className="lp-path__top">
                    <span className="lp-path__ico"><Icon name={p.icon} size={19} /></span>
                    <h3>{p.t}</h3>
                    <span className="lp-path__tag">{p.tag}</span>
                  </div>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Solucao() {
  const apps = [
    { icon: 'ScanLine', t: 'Conceitos básicos e escolha do transdutor' },
    { icon: 'Wind', t: 'Diagnóstico diferencial da dispneia' },
    { icon: 'HeartPulse', t: 'Avaliação do paciente chocado' },
    { icon: 'Droplets', t: 'Avaliação de congestão' },
    { icon: 'AudioLines', t: 'Ultrassonografia pulmonar' },
    { icon: 'Heart', t: 'Janelas ecocardiográficas' },
    { icon: 'Activity', t: 'Avaliação de TVP' },
    { icon: 'Syringe', t: 'Acesso venoso guiado' }
  ];
  const bonus = [
    { icon: 'Eye', t: 'Bainha do nervo óptico' },
    { icon: 'Soup', t: 'Avaliação de estômago cheio' }
  ];
  return (
    <section className="lp-section lp-white" id="solucao">
      <img src={asset('grafismoBeamJ', 'assets/grafismo-beam-j.png')} alt="" aria-hidden="true" className="lp-sol__beam" />
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-split lp-split--rev">
          <Reveal delay={140}>
            <div className="lp-figure">
              <image-slot id="solucao-img" data-variant="banner" shape="rounded" radius="14"
                placeholder="Arraste uma imagem do curso / equipamento"></image-slot>
              <span className="lp-figure__tag"><Icon name="ScanLine" size={14} /> Point of Care</span>
            </div>
          </Reveal>
          <div className="lp-head" style={{ marginBottom: 0 }}>
            <Reveal><span className="lp-eyebrow">A solução</span></Reveal>
            <Reveal delay={60}>
              <h2 className="lp-h2">O POCUS leva o ultrassom para o ponto de cuidado.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="lp-lede">
                Complemente o exame físico, acelere hipóteses diagnósticas e tome decisões com
                mais segurança — sem sair de perto do paciente. Veja o que você vai dominar:
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={80}>
          <div className="lp-syllabus">
            <div className="lp-syllabus__bar">
              <span className="lp-syllabus__title">Competências do curso</span>
              <span className="lp-syllabus__count">08 módulos + 02 bônus</span>
            </div>
            <ol className="lp-syllabus__list">
              {apps.map((a, i) => (
                <li className="lp-syllabus__row" key={a.t}>
                  <span className="lp-syllabus__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="lp-syllabus__t">{a.t}</span>
                  <span className="lp-syllabus__ic"><Icon name={a.icon} size={19} /></span>
                </li>
              ))}
            </ol>
            <div className="lp-syllabus__bonus">
              <span className="lp-syllabus__bonus-k">+ Bônus</span>
              {bonus.map((b) => (
                <span className="lp-syllabus__bonus-i" key={b.t}>
                  <Icon name={b.icon} size={17} /> {b.t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MetodoLeitura() {
  const steps = [
    {
      ix: '01', name: 'Ver', icon: 'ScanSearch',
      desc: 'Encontre a janela, reconheça as estruturas e identifique o achado que realmente importa.',
      q: '“Qual janela você escolheria?”'
    },
    {
      ix: '02', name: 'Interpretar', icon: 'Brain',
      desc: 'Relacione a imagem ao contexto do paciente — e aos limites do que o exame consegue mostrar.',
      q: '“O que este achado muda na conduta?”'
    },
    {
      ix: '03', name: 'Agir', icon: 'CircleCheckBig',
      desc: 'Defina o próximo passo, as prioridades e o momento certo de escalar o cuidado.',
      q: '“Qual é o próximo passo seguro?”'
    }
  ];
  return (
    <section className="lp-section lp-navy lp-read" id="metodo-leitura">
      <img src={asset('grafismoRings', 'assets/grafismo-rings.svg')} alt="" aria-hidden="true" className="lp-read__rings" />
      <div className="lp-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lp-head">
          <Reveal><span className="lp-eyebrow">O método de leitura</span></Reveal>
          <Reveal delay={50}>
            <div className="lp-read__triad">
              <span>VER</span><i></i><span>INTERPRETAR</span><i></i><span>AGIR</span>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="lp-h2">Toda imagem existe para levar a uma decisão.</h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="lp-lede">
              POCUS não é apenas captar uma boa imagem. É um método de raciocínio que conecta
              o que aparece na tela à conduta que o paciente precisa — e que você vai exercitar
              em cada janela do curso.
            </p>
          </Reveal>
        </div>

        <div className="lp-read__steps">
          {steps.map((s, i) => (
            <Reveal className="lp-read__step" key={s.ix} delay={160 + i * 90}>
              <div className="lp-read__marker">
                <span className="lp-read__dot"><Icon name={s.icon} size={26} strokeWidth={1.6} /></span>
                <span className="lp-read__ix">{s.ix}</span>
              </div>
              <h3 className="lp-read__name">{s.name}</h3>
              <p className="lp-read__desc">{s.desc}</p>
              <p className="lp-read__cue">A provocação</p>
              <p className="lp-read__q">{s.q}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UrgencyBar() {
  const DEADLINE        = new Date('2026-07-02T23:59:59-03:00');
  const TOTAL_SPOTS     = 16;
  const REMAINING_SPOTS = 12;

  function calcTimeLeft() {
    const diff = DEADLINE - Date.now();
    if (diff <= 0) return null;
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  }

  const [timeLeft, setTimeLeft] = React.useState(calcTimeLeft);

  React.useEffect(() => {
    const t = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!timeLeft) return null;

  const pct = Math.round(((TOTAL_SPOTS - REMAINING_SPOTS) / TOTAL_SPOTS) * 100);
  const units = [
    { v: timeLeft.d, k: 'dias' },
    { v: timeLeft.h, k: 'horas' },
    { v: timeLeft.m, k: 'min' },
    { v: timeLeft.s, k: 'seg' },
  ];

  return (
    <div className="lp-urgency">
      <div className="lp-container">
        <div className="lp-urgency__inner">

          <div className="lp-urgency__cd">
            <span className="lp-urgency__label">
              <Icon name="Clock" size={13} /> Inscrições encerram em
            </span>
            <div className="lp-urgency__units">
              {units.map((u, i) => (
                <React.Fragment key={u.k}>
                  {i > 0 && <span className="lp-urgency__sep">:</span>}
                  <div className="lp-urgency__unit">
                    <span className="lp-urgency__val">{String(u.v).padStart(2, '0')}</span>
                    <span className="lp-urgency__k">{u.k}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="lp-urgency__div" />

          <div className="lp-urgency__spots">
            <div className="lp-urgency__spots-top">
              <span className="lp-urgency__label">
                <Icon name="Users" size={13} /> Vagas disponíveis
              </span>
              <span className="lp-urgency__spots-count">
                <em>{REMAINING_SPOTS}</em> de {TOTAL_SPOTS}
              </span>
            </div>
            <div className="lp-urgency__bar">
              <div className="lp-urgency__bar-fill" style={{ width: pct + '%' }} />
            </div>
          </div>

          <button className="lp-urgency__cta" onClick={() => scrollToId('investimento')}>
            Garantir vaga <Icon name="ArrowRight" size={15} />
          </button>

        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Header, Hero, Problema, Solucao, MetodoLeitura, UrgencyBar, scrollToId });
