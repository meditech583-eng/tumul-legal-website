"use client";

import { useState } from "react";

const practiceAreas = [
  {
    title: "General Litigation / Alternative Dispute Resolution",
    summary:
      "Representation for clients who need to file proceedings, defend claims, or resolve disputes through negotiation, mediation, arbitration or court action.",
    details: [
      "Civil and criminal litigation in the National Court and District Courts of Papua New Guinea.",
      "Contractual disputes, leases, tenancies, licences and other commercial disputes.",
      "Pre-trial strategy, opinions and preparation to reduce delays and help matters progress efficiently.",
      "Alternative dispute resolution through negotiation, mediation and arbitration where appropriate.",
    ],
  },
  {
    title: "Banking and Finance Litigation",
    summary:
      "Legal advice and litigation support for banks, financial institutions, lenders, borrowers and clients involved in finance-related disputes.",
    details: [
      "Loan recovery, liquidation proceedings and enforcement of securities.",
      "Proceedings to take possession of mortgaged property and summary eviction of defaulting mortgagors.",
      "Applications for injunction orders and defence of tortious claims.",
      "Advisory work on general legal issues affecting financial institutions.",
    ],
  },
  {
    title: "Corporate and Commercial Law",
    summary:
      "Practical legal support for businesses, companies, partnerships and organisations operating in Papua New Guinea.",
    details: [
      "Company, business name and association registrations.",
      "Corporate governance, shareholder rights and commercial advice.",
      "Advice on transactions, commercial trade and business operations.",
      "Assistance with legal obstacles so clients can make informed business decisions.",
    ],
  },
  {
    title: "Property and Conveyancing Law",
    summary:
      "Advice and documentation support for property transactions, conveyancing matters and property-related disputes.",
    details: [
      "Sale and purchase of properties.",
      "Drafting and reviewing contracts of sale.",
      "Mortgages and related financing documents.",
      "Compliance with laws and regulations, including liaison with relevant government agencies.",
    ],
  },
  {
    title: "Administrative and Public Law",
    summary:
      "Advice and representation for public law, administrative decisions, regulatory issues and judicial review matters.",
    details: [
      "Judicial review and administrative law proceedings.",
      "Regulatory advice for clients dealing with government agencies.",
      "Representation where public decisions affect individual, corporate or organisational rights.",
    ],
  },
  {
    title: "Employment and Labour Law",
    summary:
      "Advice and representation for employers, employees and organisations in employment and labour matters.",
    details: [
      "Employment contracts and workplace advisory services.",
      "Advice for employers on the regulatory framework for citizens and non-citizens.",
      "Litigation and mediation services in workplace disputes.",
      "Representation for clients in unlawful termination claims.",
    ],
  },
  {
    title: "Probate, Succession and Trusts",
    summary:
      "Legal services to assist families and individuals with succession, estate planning, wills, probate and administration matters.",
    details: [
      "Drafting Last Wills and Testaments.",
      "Setting up trusts.",
      "Applications for probate and letters of administration.",
      "Helping families manage succession matters with respect and clarity.",
    ],
  },
  {
    title: "Family Law",
    summary:
      "Sensitive and practical legal guidance for family-related legal matters.",
    details: [
      "Advice and representation in family disputes.",
      "Guidance focused on practical outcomes and informed decisions.",
      "Support where family matters overlap with property, succession or trust issues.",
    ],
  },
  {
    title: "Contract Law",
    summary:
      "Drafting, review and dispute support for contracts, agreements and commercial arrangements.",
    details: [
      "Review and preparation of contracts.",
      "Advice on contractual rights and obligations.",
      "Representation in contractual breach disputes.",
    ],
  },
  {
    title: "Insurance Law",
    summary:
      "Advice and representation for insurance-related disputes, claims and litigation matters.",
    details: [
      "Insurance litigation and claims-related disputes.",
      "Advice for clients dealing with insurers or policy issues.",
      "Representation in matters involving tortious claims and insurance disputes.",
    ],
  },
  {
    title: "Torts",
    summary:
      "Representation and advice in civil wrongs and claims involving loss, damage or liability.",
    details: [
      "Tortious claims and civil liability matters.",
      "Advice on rights, remedies and defence strategies.",
      "Court representation and dispute resolution support.",
    ],
  },
  {
    title: "Land Law",
    summary:
      "Legal advice and representation for land matters, property disputes and related compensation claims.",
    details: [
      "Land disputes and landowner compensation claims.",
      "Property-related litigation and advisory services.",
      "Guidance for clients dealing with land and government processes.",
    ],
  },
];

export default function Home() {
  const [openPractice, setOpenPractice] = useState<string | null>(practiceAreas[0].title);

  return (
    <main className="min-h-screen bg-[#f6f1e7] text-[#081f1a]">
      <section
        className="relative min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero-law-office.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#041f1a]/90 via-[#041f1a]/80 to-[#041f1a]/95" />

        <div className="relative z-10">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div>
              <img
                src="/images/tumul-logo.png"
                alt="Tumul Legal Logo"
                className="h-20 w-auto rounded-md shadow-md transition duration-300 hover:scale-105"
              />
            </div>

            <div className="hidden gap-6 text-sm md:flex">
              <a href="#about" className="hover:text-[#d6b76a]">About</a>
              <a href="#practice" className="hover:text-[#d6b76a]">Practice Areas</a>
              <a href="#team" className="hover:text-[#d6b76a]">Team</a>
              <a href="#contact" className="hover:text-[#d6b76a]">Contact</a>
            </div>

            <a
              href="https://tumul-legal-system-v1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#d6b76a] px-5 py-2 text-sm font-semibold text-[#041f1a] hover:bg-[#e6c87a]"
            >
              Staff Portal
            </a>
          </nav>

          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
            <div className="fade-up">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b76a]">
                Advocate • Passionate • Inspire • Consistency
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Practical legal solutions for clients in Papua New Guinea.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Tumul Legal provides quality, timely and solution-oriented legal services
                across litigation, commercial law, banking and finance, property,
                employment, probate and dispute resolution matters.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#d6b76a] px-6 py-3 font-semibold text-[#041f1a] hover:bg-[#e6c87a]"
                >
                  Book a Consultation
                </a>
                <a
                  href="#practice"
                  className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#041f1a]"
                >
                  View Practice Areas
                </a>
              </div>
            </div>

            <div className="fade-up rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <img
                src="/images/mek-tumul.jpg"
                alt="Mek Tumul"
                className="mb-6 h-64 w-full rounded-2xl bg-[#f6f1e7] object-contain"
              />
              <h3 className="text-2xl font-bold text-[#d6b76a]">Tumul Legal Office</h3>
              <div className="mt-6 space-y-4 text-slate-200">
                <p><strong>Phone:</strong> +675 78993998</p>
                <p><strong>Email:</strong> mek@tumullegal.com</p>
                <p><strong>Alternate:</strong> mosesliu@tumullegal.com</p>
                <p>
                  <strong>Address:</strong> Level 2, Suite 3, Waigani Haus,
                  Section 31, Allotment 5, Mokoraha Road, Waigani, NCD
                </p>
                <p><strong>Postal:</strong> PO Box 5856, Boroko, NCD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="fade-up mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0b5a45]">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              A focused legal team established in August 2022.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Tumul Legal is a legal practice based in Waigani, National Capital District.
              The firm is led by its Principal and supported by an Associate, legal clerk
              and administration officer.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              The firm is committed to providing amicable, cost-effective and
              solution-oriented services in a timely manner to its clients.
            </p>
          </div>

          <img
            src="/images/legal-meeting.jpg"
            alt="Legal meeting"
            className="h-[430px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
          />
        </div>
      </section>

      <section className="fade-up bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0b5a45]">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Quality legal service at a reasonable rate.
            </h2>
          </div>
          <div className="rounded-3xl bg-[#f6f1e7] p-8 shadow-xl">
            <p className="text-lg leading-8 text-slate-700">
              Our mission is to provide clients with high quality legal services at a
              reasonable rate. We offer practical solutions and quality advice so our
              clients can make informed decisions.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              We are committed to excellence and to finding innovative solutions to
              complex legal problems faced by our clients.
            </p>
          </div>
        </div>
      </section>

      <section id="practice" className="fade-up bg-[#041f1a] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b76a]">
            Practice Areas
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Areas of Expertise and Practice
          </h2>
          <p className="mt-5 max-w-3xl text-slate-300">
            Select a practice area below to learn how Tumul Legal can assist.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => {
              const isOpen = openPractice === area.title;

              return (
                <div
                  key={area.title}
                  className={`rounded-2xl border p-6 shadow-sm transition duration-300 ${
                    isOpen
                      ? "border-[#d6b76a] bg-white text-[#081f1a]"
                      : "border-white/10 bg-white/5 hover:-translate-y-1 hover:bg-white/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenPractice(isOpen ? null : area.title)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold ${isOpen ? "text-[#063b2f]" : "text-[#f6f1e7]"}`}>
                      {area.title}
                    </span>
                    <span className={`text-2xl leading-none ${isOpen ? "text-[#8a6a2f]" : "text-[#d6b76a]"}`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-5 border-t border-[#d6b76a]/40 pt-5">
                      <p className="leading-7 text-slate-700">{area.summary}</p>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                        {area.details.map((detail) => (
                          <li key={detail} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6b76a]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className="mt-5 inline-block rounded-full bg-[#d6b76a] px-5 py-2 text-sm font-semibold text-[#041f1a] hover:bg-[#e6c87a]"
                      >
                        Enquire About This Service
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img src="/images/justice-scales.jpg" alt="Justice scales" className="mb-6 h-48 w-full rounded-2xl object-cover" />
            <h3 className="text-2xl font-bold text-[#063b2f]">Solution-Oriented</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Focused legal advice designed to help clients resolve matters clearly,
              efficiently and professionally.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img src="/images/law-books.jpg" alt="Law books" className="mb-6 h-48 w-full rounded-2xl object-cover" />
            <h3 className="text-2xl font-bold text-[#063b2f]">Experienced Advocacy</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Representation and advice across litigation, commercial disputes,
              employment, property and regulatory matters.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img src="/images/waigani-office.jpg" alt="Waigani office" className="mb-6 h-48 w-full rounded-2xl object-cover" />
            <h3 className="text-2xl font-bold text-[#063b2f]">Client-Focused</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Practical legal support for individuals, businesses and organisations
              needing reliable guidance.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="fade-up bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0b5a45]">
            The Team
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Meet Our Legal Professionals
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-[#f6f1e7] p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img src="/images/mek-tumul.jpg" alt="Mek Tumul" className="mb-6 h-72 w-full rounded-2xl bg-[#f6f1e7] object-contain" />
              <h3 className="text-2xl font-bold text-[#063b2f]">Mek Tumul</h3>
              <p className="mt-1 font-semibold text-[#8a6a2f]">Founder and Principal</p>
              <p className="mt-4 leading-7 text-slate-700">
                Mek Tumul is a member of the PNG Law Society and was admitted to the bar in 2013.
                Prior to establishing Tumul Legal, he was a Senior Associate at Allens Linklaters
                and has over 9 years of experience in litigation, commercial matters, employment law,
                contracts, conveyancing and court representation.
              </p>
              <p className="mt-4 font-semibold text-[#063b2f]">mek@tumullegal.com</p>
              <p className="mt-1 font-semibold text-[#063b2f]">+675 78993998</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f6f1e7] p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img src="/images/moses-liu.jpg" alt="Moses Liu" className="mb-6 h-72 w-full rounded-2xl bg-[#eae5dc] object-contain" />
              <h3 className="text-2xl font-bold text-[#063b2f]">Moses H Liu</h3>
              <p className="mt-1 font-semibold text-[#8a6a2f]">Associate</p>
              <p className="mt-4 leading-7 text-slate-700">
                Moses Harold Liu is an Associate with Tumul Legal and a member of the PNG Law Society.
                He has civil and criminal litigation experience in the District and National Courts of PNG,
                including legal research, drafting court documents, registry searches and court appearances.
              </p>
              <p className="mt-4 font-semibold text-[#063b2f]">mosesliu@tumullegal.com</p>
              <p className="mt-1 font-semibold text-[#063b2f]">+675 79058748</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="fade-up bg-[#063b2f] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6b76a]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Speak with Tumul Legal
            </h2>
            <p className="mt-5 text-slate-200">
              For legal enquiries, consultations or follow-ups, contact the office
              using the details provided.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f6f1e7] p-8 text-[#081f1a] shadow-xl">
            <p><strong>Telephone:</strong> +675 78993998</p>
            <p className="mt-3"><strong>Email:</strong> mek@tumullegal.com</p>
            <p className="mt-3"><strong>Email:</strong> mosesliu@tumullegal.com</p>
            <p className="mt-3"><strong>Postal:</strong> Tumul Legal, PO Box 5856, Boroko, NCD</p>
            <p className="mt-3">
              <strong>Address:</strong> Level 2, Suite 3, Waigani Haus, Section 31,
              Allotment 5, Mokoraha Road, Waigani, National Capital District
            </p>

            <a
              href="mailto:mek@tumullegal.com"
              className="mt-6 inline-block rounded-full bg-[#d6b76a] px-6 py-3 font-semibold text-[#041f1a] hover:bg-[#e6c87a]"
            >
              Email Tumul Legal
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#041f1a] px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Tumul Legal. All Rights Reserved.
      </footer>
    </main>
  );
}
