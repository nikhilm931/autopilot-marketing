import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Autopilot Marketing | AI-Powered Content & SEO Systems",
  description:
    "Autopilot Marketing helps agencies and service businesses automate client onboarding, content generation, social media posting, and SEO workflows.",
};

export default function Page() {
  const services = [
    {
      title: "AI Content Engine",
      description:
        "Turn one client record into blogs, social posts, and campaign-ready content in minutes instead of days.",
    },
    {
      title: "Client Database Automation",
      description:
        "Add, update, and manage client records through AI agents so your pipeline stays organized and usable.",
    },
    {
      title: "SEO Optimization",
      description:
        "Every asset is tuned for discoverability with keyword optimization, structure, and distribution-ready formatting.",
    },
    {
      title: "Autopilot Workflows",
      description:
        "From intake to publishing, your marketing stack runs on repeatable agent workflows that reduce manual work.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Capture client data",
      description:
        "Store business details, offers, audience, and brand voice in a structured client database.",
    },
    {
      number: "02",
      title: "Generate content",
      description:
        "Use AI agents to produce blogs, social media posts, and campaign assets tied to each client ID.",
    },
    {
      number: "03",
      title: "Optimize for SEO",
      description:
        "Improve rankings and attention with keyword targeting, search-friendly structure, and optimization loops.",
    },
    {
      number: "04",
      title: "Publish and grow",
      description:
        "Use a scalable workflow that helps you onboard more clients without growing headcount at the same pace.",
    },
  ];

  const outcomes = [
    "Cut content production time from days to under an hour",
  "Publish consistently across blog + LinkedIn without hiring writers",
  "Track exactly which content drives engagement with a live dashboard",
  "Onboard new clients without adding headcount",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="text-xl font-bold text-cyan-400 tracking-tight">
            Autopilot<span className="text-white">Marketing</span>
          </span>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
            <a
              href="https://calendly.com/nikhilm931"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-cyan-400 px-4 py-2 text-black"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Stop writing content manually.{" "}
          <span className="text-cyan-400">Let AI do it for your agency.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Hi, I'm Nikhil — a Data Scientist who builds AI systems that generate 
          blogs, LinkedIn posts, and SEO content for marketing agencies on autopilot. 
          Your team focuses on clients. The system handles the content.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://calendly.com/nikhilm931"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl"
          >
            Book a Strategy Call
          </a>

          <a
            href="#how-it-works"
            className="border px-6 py-3 rounded-xl"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border p-6 rounded-xl">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20 bg-neutral-900">
        <h2 className="text-3xl font-bold mb-10">How it works</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.number} className="border p-6 rounded-xl">
              <div className="text-cyan-400">{s.number}</div>
              <h3 className="text-xl font-semibold mt-2">{s.title}</h3>
              <p className="mt-3 text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Why clients choose you
        </h2>

        <ul className="space-y-3">
          {outcomes.map((o) => (
            <li key={o}>• {o}</li>
          ))}
        </ul>
      </section>
      {/* Pricing */}
      <section className="px-6 py-20 bg-neutral-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple, flat-rate pricing</h2>
        <p className="text-gray-400 mb-10">No retainers. No surprises.</p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      { tier: "Starter", price: "$500", desc: "4 blog posts + 8 LinkedIn posts/mo + basic dashboard" },
      { tier: "Growth", price: "$1,200", desc: "12 blog posts + 24 LinkedIn posts/mo + SEO optimization + engagement dashboard" },
      { tier: "Agency", price: "$2,500", desc: "Unlimited content for up to 5 clients + full workflow automation + reporting" },
    ].map((p) => (
      <div key={p.tier} className="border border-white/10 p-8 rounded-xl">
        <div className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">{p.tier}</div>
        <div className="text-4xl font-bold mt-2">{p.price}<span className="text-gray-400 text-base">/mo</span></div>
        <p className="mt-4 text-gray-400 text-sm">{p.desc}</p>
        <a href="https://calendly.com/nxikhilm931" target="_blank" rel="noreferrer"
          className="mt-6 block bg-cyan-400 text-black px-4 py-2 rounded-xl text-sm font-semibold">
          Get Started
        </a>
      </div>
    ))}
  </div>
</section>
      {/* Contact */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Ready to automate your marketing?
        </h2>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="mailto:nikhilm931@gmail.com"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl"
          >
            Email Us
          </a>

          <a
            href="https://calendly.com/nikhilm931"
            target="_blank"
            className="border px-6 py-3 rounded-xl"
          >
            Book Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Autopilot Marketing
      </footer>
    </div>
  );
}
