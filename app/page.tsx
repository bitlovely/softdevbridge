"use client";

import { useState } from "react";

const services = [
  {
    title: "Custom Product Teams",
    description:
      "Cross‑functional squads that ship full platforms from discovery to launch.",
    tag: "Embedded partnership",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Resilient infrastructure, automated delivery pipelines, and 24/7 observability.",
    tag: "Enterprise ready",
  },
  {
    title: "AI Integrations",
    description:
      "Intelligent copilots, RAG knowledge bases, and workflow automation.",
    tag: "Future proof",
  },
];

const projects = [
  {
    client: "Pulse Health",
    result: "Reduced triage time by 48% with a clinician-first portal.",
    stat: "2.5M monthly sessions",
  },
  {
    client: "Northwind Logistics",
    result: "Telemetry platform that predicts delays before they happen.",
    stat: "98.9% on-time deliveries",
  },
  {
    client: "Studio Atlas",
    result: "Interactive commerce stack powering global pop-ups.",
    stat: "+34% conversion rate",
  },
];

const steps = [
  { title: "Opportunity mapping", note: "Systems audit + product blueprint" },
  { title: "Experience sprints", note: "Weekly demos with shared backlog" },
  { title: "Scale + enable", note: "Playbooks, training, and observability" },
];

const budgetOptions = [
  "Under $50k",
  "$50k - $150k",
  "$150k - $500k",
  "$500k+",
];

const testimonials = [
  {
    name: "Emily Vargas",
    title: "CTO, Pulse Health",
    quote:
      "They operate like an internal department. Shipping velocity doubled without ballooning headcount.",
  },
  {
    name: "Liam Osei",
    title: "VP Digital, Northwind Logistics",
    quote:
      "SoftDevBridge turned our fragmented data into a single command center. Reliability is now our advantage.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    headline: "",
    budget: budgetOptions[0],
    success: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    timezone: "",
    preferredSlot: "",
  });
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBookRecoveryCall = () => setIsBookingModalOpen(true);
  const handleViewRecentWork = () => scrollToSection("work");

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setBookingStatus("idle");
  };

  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !bookingData.name.trim() ||
      !bookingData.email.trim() ||
      !bookingData.preferredSlot.trim()
    ) {
      setBookingStatus("error");
      return;
    }
    setBookingStatus("sending");
    setTimeout(() => {
      setBookingStatus("sent");
      setTimeout(() => handleCloseBookingModal(), 900);
    }, 600);
  };

  const handleSendBriefing = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.headline.trim() || !formData.success.trim()) {
      setFormStatus("error");
      return;
    }
    setFormStatus("sending");

    // Simulate async submission
    setTimeout(() => {
      setFormStatus("sent");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-10 lg:px-12">
        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/70 via-slate-900 to-slate-950 px-8 py-14 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_rgba(15,23,42,0))]" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-sm text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                SoftDevBridge · Full-stack IT agency
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Build resilient digital experiences that scale with your
                business.
              </h1>
              <p className="text-lg text-slate-200">
                We assemble elite product teams, automate infrastructure, and
                integrate AI so you can launch faster, stay reliable, and focus
                on the roadmap that matters.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={handleBookRecoveryCall}
                  className="rounded-full bg-cyan-400 px-8 py-3 text-center text-slate-950 transition hover:bg-cyan-300"
                >
                  Book a recovery call
                </button>
                <button
                  type="button"
                  onClick={handleViewRecentWork}
                  className="rounded-full border border-white/20 px-8 py-3 text-center text-white transition hover:bg-white/10"
                >
                  View recent work
                </button>
              </div>
            </div>
            <div className="grid w-full max-w-sm grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-100">
              {[
                { label: "Products launched", value: "120+" },
                { label: "Avg. NPS", value: "73" },
                { label: "Time zones covered", value: "4" },
                { label: "Team members", value: "38" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1 border-white/5">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2" id="services">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <p className="text-sm uppercase tracking-wide text-cyan-300">
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Modular services designed for velocity and resilience.
            </h2>
            <p className="mt-4 text-slate-300">
              Whether you need a fully embedded squad or a focused strike team,
              we plug into your workflow, align on business outcomes, and ship
              every week.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 px-4 py-1">
                SaaS platforms
              </span>
              <span className="rounded-full border border-white/10 px-4 py-1">
                Mobile experiences
              </span>
              <span className="rounded-full border border-white/10 px-4 py-1">
                Cloud migrations
              </span>
              <span className="rounded-full border border-white/10 px-4 py-1">
                AI copilots
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-cyan-300/60"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {service.tag}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-cyan-300">
                Case studies
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Proof that craft + rigor beats backlog chaos.
              </h2>
            </div>
            <a
              className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white"
              href="#contact"
            >
              Request detailed deck →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.client}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  {project.client}
                </p>
                <p className="text-lg text-white">{project.result}</p>
                <p className="text-sm font-semibold text-cyan-200">
                  {project.stat}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-wide text-cyan-300">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              A transparent playbook built on co-creation.
            </h2>
            <p className="mt-3 text-slate-300">
              Every engagement pairs a product lead with engineering, design,
              and delivery. You get shared dashboards, async updates, and zero
              surprises.
            </p>
            <div className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg font-semibold text-cyan-300">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="text-sm text-slate-400">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm uppercase tracking-wide text-cyan-300">
              Voices
            </p>
            <div className="mt-6 space-y-8">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="space-y-3">
                  <blockquote className="text-lg text-slate-100">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="text-sm text-slate-400">
                    {testimonial.name} · {testimonial.title}
                  </figcaption>
                  <div className="h-px bg-white/10" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-8 rounded-3xl border border-cyan-500/40 bg-slate-900/70 p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wide text-cyan-300">
              Let's build
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Tell us about your product vision.
            </h2>
            <p className="text-slate-300">
              Send over a roadmap, Figma file, or napkin sketch. We'll respond
              within one business day with a tailored plan, resourcing model,
              and timeline.
            </p>
            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              <p className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                ✉️ hello@softdevbridge.com
              </p>
              <p className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                ☎️ +1 (646) 555-0178
              </p>
              <p className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                📍 NYC · Montréal · Remote EU
              </p>
              <p className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                🗓️ Weekly start dates
              </p>
            </div>
          </div>
          <form
            className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6"
            onSubmit={handleSendBriefing}
          >
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Project headline
              <input
                type="text"
                placeholder="Relaunch global partner portal"
                value={formData.headline}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    headline: event.target.value,
                  }))
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Budget range
              <select
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                value={formData.budget}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    budget: event.target.value,
                  }))
                }
              >
                {budgetOptions.map((budget) => (
                  <option key={budget} className="bg-slate-900" value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              What does success look like?
              <textarea
                rows={4}
                placeholder="Integrate AI triage, reduce downtime, enable observability..."
                value={formData.success}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    success: event.target.value,
                  }))
                }
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-cyan-400 px-6 py-3 text-center text-slate-950 font-semibold transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-cyan-700/40 disabled:text-white/60"
              disabled={formStatus === "sending" || formStatus === "sent"}
            >
              {formStatus === "sending"
                ? "Sending..."
                : formStatus === "sent"
                  ? "Briefing sent"
                  : "Send briefing"}
            </button>
            <p
              className="text-sm text-slate-400"
              aria-live="polite"
              role="status"
            >
              {formStatus === "error" &&
                "Please add a project headline and success goals before sending."}
              {formStatus === "sent" &&
                "Thanks! We’ll reply within one business day with next steps."}
            </p>
          </form>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-10 text-sm text-slate-500 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SoftDevBridge. All rights reserved.</p>
          <div className="flex gap-6 text-white">
            <a className="hover:text-cyan-300" href="#">
              LinkedIn
            </a>
            <a className="hover:text-cyan-300" href="#">
              GitHub
            </a>
            <a className="hover:text-cyan-300" href="#">
              Behance
            </a>
          </div>
        </div>
      </footer>
      {isBookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-8 shadow-2xl">
            <button
              aria-label="Close booking modal"
              onClick={handleCloseBookingModal}
              className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-sm text-slate-300 hover:border-cyan-400 hover:text-white"
            >
              Esc
            </button>
            <p className="text-sm uppercase tracking-wide text-cyan-300">
              Book a call
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Reserve a 30-min strategy session.
            </h2>
            <p className="mt-2 text-slate-300">
              Share a few details and we’ll send a calendar invite with a video
              link within the hour.
            </p>
            <form
              className="mt-8 space-y-4"
              onSubmit={handleBookingSubmit}
            >
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Full name
                <input
                  type="text"
                  value={bookingData.name}
                  onChange={(event) =>
                    setBookingData((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Jordan Lee"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Work email
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(event) =>
                    setBookingData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  placeholder="jordan@company.com"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Time zone
                <input
                  type="text"
                  value={bookingData.timezone}
                  onChange={(event) =>
                    setBookingData((prev) => ({
                      ...prev,
                      timezone: event.target.value,
                    }))
                  }
                  placeholder="EST, PST, CET..."
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Preferred slot / agenda
                <textarea
                  rows={3}
                  value={bookingData.preferredSlot}
                  onChange={(event) =>
                    setBookingData((prev) => ({
                      ...prev,
                      preferredSlot: event.target.value,
                    }))
                  }
                  placeholder="Tuesday between 10-12 EST · Focus on DevOps roadmap"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-cyan-400 px-6 py-3 text-center text-slate-950 font-semibold transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-cyan-700/40 disabled:text-white/60"
                disabled={bookingStatus === "sending" || bookingStatus === "sent"}
              >
                {bookingStatus === "sending"
                  ? "Booking..."
                  : bookingStatus === "sent"
                    ? "Booked!"
                    : "Request calendar invite"}
              </button>
              <p
                className="text-sm text-slate-400"
                aria-live="polite"
                role="status"
              >
                {bookingStatus === "error" &&
                  "Please add your name, email, and a preferred slot."}
                {bookingStatus === "sent" &&
                  "Thanks! Check your inbox shortly for a calendar invite."}
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
