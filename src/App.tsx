import type { CSSProperties } from 'react'
import { Mark } from './components/Mark'
import { ThemeToggle } from './components/ThemeToggle'
import { Arrow, Section } from './components/bits'
import { CONTACTS, SITE } from './data/site'
import { ELSEWHERE, PORTS, YAKUMO, type Port } from './data/projects'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#ports', label: 'Ports' },
  { href: '#elsewhere', label: 'Elsewhere' },
  { href: '#contact', label: 'Contact' },
]

const delay = (n: number) => ({ '--d': n }) as CSSProperties

export function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="bar wrap">
        <a className="bar-home" href="#top" aria-label={`${SITE.handle}, back to top`}>
          <Mark className="bar-mark" />
          <span className="bar-name">{SITE.handle}</span>
        </a>
        <nav className="bar-nav" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </header>

      <main id="main" className="wrap">
        <Hero />
        <About />
        <Ports />
        <Elsewhere />
        <Contact />
      </main>

      <footer className="foot wrap">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p>
          Set in Archivo. Built with React.{' '}
          <a href={SITE.source}>
            Source
            <Arrow />
          </a>
        </p>
      </footer>
    </>
  )
}

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-mark">
        <Mark animate title="Avatar: a horned wolf’s head with a jagged mane, inside a ring" />
      </div>
      <div className="hero-text">
        <p className="kicker rise" style={delay(0)}>
          {SITE.role}
        </p>
        <h1 id="hero-title" className="hero-name">
          <span className="rise" style={delay(1)}>
            Vladimir
          </span>
          <span className="rise" style={delay(2)}>
            Ivanov
          </span>
        </h1>
        <p className="hero-lede rise" style={delay(3)}>
          I build the systems machine learning runs on, the ones that have to stay fast, correct and
          observable when the traffic is real. After hours I rebuild PlayStation Portable games as native
          programs.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" index="01" kicker="About" seed={11}>
      <h2 id="about-title" className="statement">
        I write Go for the part of machine learning nobody demos: the systems that serve features and
        predictions once real traffic arrives.
      </h2>
      <div className="prose">
        <p>
          Models get the attention. Whether they work in production comes down to plainer questions. Does
          the feature arrive in time? Is the prediction the right one? When either goes wrong, can anyone
          tell? That is my part of the job: performance, correctness and observability, under load.
        </p>
        <p>
          Before ML infrastructure I built high-load backends for analytics, social and survey products
          used by millions of people. The lesson carried over. A system is judged on its bad days, when
          traffic spikes, the data is messy and nobody has time to think.
        </p>
      </div>
      <ul className="tenets">
        <li>
          <strong>Fast</strong>
          <span>Latency is measured at the tail, not the average.</span>
        </li>
        <li>
          <strong>Correct</strong>
          <span>The same right answer every time, messy input included.</span>
        </li>
        <li>
          <strong>Observable</strong>
          <span>When something drifts, you see it before your users do.</span>
        </li>
      </ul>
    </Section>
  )
}

function Ports() {
  return (
    <Section id="ports" index="02" kicker="After hours" seed={23}>
      <h2 id="ports-title" className="display">
        PSP games,
        <br />
        recompiled.
      </h2>
      <div className="prose">
        <p>
          My hobby is native ports of PSP games by static recompilation. Nothing is emulated. The game’s
          original code is translated ahead of time into C++, compiled for a modern computer, and run on a
          rewritten version of the PSP’s system software. What comes out is an ordinary program: Vulkan
          graphics, any resolution, higher frame rates, today’s controllers.
        </p>
        <p className="aside">
          None of these projects ship game files. You bring your own copy. All of them are works in
          progress.
        </p>
      </div>

      <Pipeline />

      <article className="feature" aria-labelledby="yakumo-title">
        <div className="feature-main">
          <p className="kicker">Port · {YAKUMO.subject}</p>
          <h3 id="yakumo-title" className="feature-name">
            {YAKUMO.name}
          </h3>
          <p className="feature-blurb">{YAKUMO.blurb}</p>
          <p className="feature-links">
            {YAKUMO.links.map((l, i) => (
              <a key={l.href} className={i === 0 ? 'btn btn-solid' : 'btn'} href={l.href}>
                {l.label}
                <Arrow />
              </a>
            ))}
          </p>
        </div>
        <dl className="facts">
          <div>
            <dt>Status</dt>
            <dd>
              <span className="dot dot-live" aria-hidden="true" />
              {YAKUMO.status}
            </dd>
          </div>
          <div>
            <dt>Runs on</dt>
            <dd>
              <ul className="plain">
                {YAKUMO.platforms.map((p) => (
                  <li key={p.label}>
                    {p.label} <span className="muted">{p.note}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Built with</dt>
            <dd>{YAKUMO.stack.join(' · ')}</dd>
          </div>
        </dl>
      </article>

      <ul className="ports" aria-label="Other recompilation projects">
        {PORTS.map((p) => (
          <li key={p.name}>
            <PortCard port={p} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

function PortCard({ port }: { port: Port }) {
  const body = (
    <>
      <p className="kicker">
        {port.kind} · {port.subject}
      </p>
      <h3 className="card-name">{port.name}</h3>
      <p className="card-blurb">{port.blurb}</p>
      <p className="card-status">
        <span className="dot" aria-hidden="true" />
        <span className="card-status-text">{port.status}</span>
        <span className="card-go">
          {port.published ? (
            <>
              GitHub
              <Arrow />
            </>
          ) : (
            'Coming soon'
          )}
        </span>
      </p>
    </>
  )
  return port.published ? (
    <a className="card card-link" href={port.repo}>
      {body}
    </a>
  ) : (
    <div className="card">{body}</div>
  )
}

function Pipeline() {
  const steps = [
    { ring: 'MIPS', title: 'PSP program', text: 'The game’s machine code, read from your own copy.' },
    { ring: 'C++', title: 'Translated', text: 'Every function rewritten ahead of time. No emulator at the core.' },
    { ring: 'Native', title: 'Your machine', text: 'Compiled and run on a rebuilt PSP system: kernel, graphics, sound, input.' },
  ]
  return (
    <ol className="pipeline" aria-label="How a port is made">
      {steps.map((s) => (
        <li key={s.ring}>
          <span className="pipeline-ring" aria-hidden="true">
            {s.ring}
          </span>
          <span className="pipeline-text">
            <strong>{s.title}</strong>
            {s.text}
          </span>
        </li>
      ))}
    </ol>
  )
}

function Elsewhere() {
  return (
    <Section id="elsewhere" index="03" kicker="Elsewhere" seed={41}>
      <h2 id="elsewhere-title" className="subhead">
        Smaller things
      </h2>
      <ul className="rows">
        {ELSEWHERE.map((e) => (
          <li key={e.name}>
            <a className="row" href={e.href}>
              <span className="row-name">{e.name}</span>
              <span className="row-blurb">{e.blurb}</span>
              <span className="row-meta">
                {e.lang}
                <Arrow />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" index="04" kicker="Contact" seed={59}>
      <h2 id="contact-title" className="display">
        Write to me.
      </h2>
      <ul className="rows contacts">
        {CONTACTS.map((c) => (
          <li key={c.label}>
            <a className="row" href={c.href}>
              <span className="row-name">{c.label}</span>
              <span className="row-value">{c.value}</span>
              <span className="row-meta">
                <Arrow />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
