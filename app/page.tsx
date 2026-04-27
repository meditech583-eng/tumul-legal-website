export default function Home() {
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
              Staff Login
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
                Tumul Legal provides timely, cost-effective and solution-oriented legal
                services across litigation, commercial law, property, employment,
                probate and dispute resolution matters.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#d6b76a] px-6 py-3 font-semibold text-[#041f1a] hover:bg-[#e6c87a]"
                >
                  Contact Us
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
              The firm is committed to providing practical, timely and solution-oriented
              legal services while helping clients make informed decisions.
            </p>
          </div>

          <img
            src="/images/legal-meeting.jpg"
            alt="Legal meeting"
            className="h-[430px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
          />
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

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "General Litigation / Alternative Dispute Resolution",
              "Banking and Finance Litigation",
              "Corporate and Commercial Law",
              "Property and Conveyancing Law",
              "Administrative and Public Law",
              "Employment and Labour Law",
              "Probate, Succession and Trusts",
              "Family Law",
              "Contract Law",
              "Insurance Law",
              "Torts",
              "Land Law",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <h3 className="font-bold text-[#f6f1e7]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/images/justice-scales.jpg"
              alt="Justice scales"
              className="mb-6 h-48 w-full rounded-2xl object-cover"
            />
            <h3 className="text-2xl font-bold text-[#063b2f]">Solution-Oriented</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Focused legal advice designed to help clients resolve matters clearly,
              efficiently and professionally.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/images/law-books.jpg"
              alt="Law books"
              className="mb-6 h-48 w-full rounded-2xl object-cover"
            />
            <h3 className="text-2xl font-bold text-[#063b2f]">Experienced Advocacy</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Representation and advice across litigation, commercial disputes,
              employment, property and regulatory matters.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/images/waigani-office.jpg"
              alt="Waigani office"
              className="mb-6 h-48 w-full rounded-2xl object-cover"
            />
            <h3 className="text-2xl font-bold text-[#063b2f]">Client-Focused</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Practical legal support for individuals, businesses and organisations
              needing reliable guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="fade-up bg-[#f6f1e7] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0b5a45]">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Trusted Legal Support
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold text-[#063b2f]">Experienced</h3>
              <p className="mt-2 text-slate-700">
                Proven experience in litigation, commercial law and court representation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#063b2f]">Client Focused</h3>
              <p className="mt-2 text-slate-700">
                We provide practical solutions tailored to each client’s needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#063b2f]">Reliable</h3>
              <p className="mt-2 text-slate-700">
                Timely, professional and cost-effective legal services you can trust.
              </p>
            </div>
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
              <img
                src="/images/mek-tumul.jpg"
                alt="Mek Tumul"
                className="mb-6 h-72 w-full rounded-2xl bg-[#f6f1e7] object-contain"
              />
              <h3 className="text-2xl font-bold text-[#063b2f]">Mek Tumul</h3>
              <p className="mt-1 font-semibold text-[#8a6a2f]">Principal</p>

              <p className="mt-4 leading-7 text-slate-700">
                Mek Tumul is the Principal of Tumul Legal and a member of the PNG Law Society.
                He was admitted to the bar in 2013 and has extensive experience in litigation,
                commercial matters, employment law, contracts, conveyancing and court representation.
              </p>

              <p className="mt-4 font-semibold text-[#063b2f]">
                mek@tumullegal.com
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f6f1e7] p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="/images/moses-liu.jpg"
                alt="Moses Liu"
                className="mb-6 h-72 w-full rounded-2xl bg-[#eae5dc] object-contain"
              />
              <h3 className="text-2xl font-bold text-[#063b2f]">Moses H Liu</h3>
              <p className="mt-1 font-semibold text-[#8a6a2f]">Associate</p>

              <p className="mt-4 leading-7 text-slate-700">
                Moses H Liu is an Associate with Tumul Legal and a member of the PNG Law Society.
                He has experience in civil and criminal litigation in the District and National Courts
                of Papua New Guinea.
              </p>

              <p className="mt-4 font-semibold text-[#063b2f]">
                mosesliu@tumullegal.com
              </p>
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
