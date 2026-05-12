'use client'

export default function AmirulAzizWebsite() {
  const navItems = [
    { label: 'About', href: 'about', type: 'scroll' },
    { label: 'Working Experiences', href: 'experience', type: 'scroll' },
    { label: 'Writings & Poems', href: 'writings-poems', type: 'scroll' },
    { label: 'Random Updates', href: '/random', type: 'page' },
    { label: 'Contact', href: 'contact', type: 'scroll' },
  ]

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#071326] text-white font-sans">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#071326]/85 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="text-xl font-semibold tracking-wide hover:opacity-80 transition">
            Amirul Aziz
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  if (item.type === 'page') {
                    window.location.href = item.href
                  } else {
                    scrollToSection(item.href)
                  }
                }}
                className="hover:text-white transition duration-300 relative group cursor-pointer inline-flex items-center bg-transparent border-none"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="top" className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Projects, marketing,
            <br />
            thoughts & poems
          </h1>

          <p className="text-white/70 text-lg leading-8 max-w-xl mb-8">
            Based in Selangor, passionate about projects, marketing and building things across Southeast Asia and Japan — and of course, every culture’s food scene.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#experience" className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-[#071326] transition inline-flex items-center justify-center text-white">
              My Experiences
            </a>

            <a href="#contact" className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-[#071326] transition inline-flex items-center justify-center text-white">
              Email Me
            </a>

            <a href="#writings-poems" className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-[#071326] transition inline-flex items-center justify-center text-white">
              Read Writings
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src="/images/profile.jpg"
            alt="Amirul Aziz"
            className="relative rounded-[2rem] object-cover object-top h-[460px] max-w-[380px] mx-auto w-full border border-[#0B1220]/10 shadow-2xl"
          />
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-white text-[#071326]">
        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              ABOUT
            </p>

            <div className="mb-8">
              <h2 className="text-4xl font-bold leading-tight mb-6">
                A mix of strategy,
                creativity and execution
              </h2>

              <a
                href="/about"
                className="inline-flex items-center gap-2 text-[#1D4ED8] hover:text-[#071326] transition text-lg"
              >
                More About Me →
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#0B1220]/70 leading-8 text-lg mb-6">
              I started my journey through economics, media and digital communications before moving into regional growth, performance marketing and project management.
            </p>

            <p className="text-[#0B1220]/70 leading-8 text-lg mb-6">
              Over the years, I’ve worked across advertising, telecommunications, stakeholder engagement and international expansion projects involving Southeast Asia and Japan.
            </p>

            <p className="text-[#0B1220]/70 leading-8 text-lg">
              Outside of work, I enjoy writing, poems, songs, movies, games and creating meaningful experiences that bring people together.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-white/10 bg-[#0B1F3A] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
            <h2 className="text-4xl font-bold">Working Experiences</h2>

            <a
              href="/experience"
              className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-white transition text-lg"
            >
              View Full Working Experiences & Skills →
            </a>
          </div>

          <div className="space-y-6">
            {[
              {
                company: 'Yoowifi',
                role: 'Project & Brand Marketing Manager',
                date: 'Apr 2025 — Present',
                description:
                  'Led regional expansion initiatives across Southeast Asia and Japan while managing partnerships, trade events and operational growth.',
              },
              {
                company: 'TDCX Supporting Google Ads',
                role: 'Digital Campaign Specialist',
                date: 'Nov 2023 — Jul 2024',
                description:
                  'Managed international advertising accounts and strategic consultations across multiple markets with high monthly budgets.',
              },
              {
                company: 'RISE Media Asia',
                role: 'Media Consultant Intern',
                date: 'Jun 2021 — Sep 2021',
                description:
                  'Worked on media planning, content strategies and digital brand positioning for corporate clients.',
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition"
              >
                <summary className="list-none cursor-pointer p-8 flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.role}</h3>
                    <p className="text-[#60A5FA] mb-2">{item.company}</p>
                    <p className="text-sm text-white/40">{item.date}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>Read More</span>
                    <span className="transition group-open:rotate-180 text-xl">⌄</span>
                  </div>
                </summary>

                <div className="px-8 pb-8 border-t border-white/10">
                  <p className="text-white/70 leading-7 pt-6 max-w-3xl mb-6">
                    {item.description}
                  </p>

                  <a
                    href="/experience"
                    className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-white transition"
                  >
                    View Full Working Experiences & Skills →
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="writings-poems" className="border-t border-white/10 bg-white text-[#071326]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-16">Writings</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Expanding a Brand Into Japan',
              'What Performance Marketing Taught Me About Human Behaviour',
            ].map((post, index) => (
              <a
                href="/writings-poems"
                key={index}
                className="bg-[#F8FAFC] border border-[#DCE7F7] rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer block"
              >
                <p className="text-sm text-[#93C5FD] mb-4">Writing</p>
                <h3 className="text-2xl font-semibold leading-snug mb-6">{post}</h3>

                <span className="text-[#1D4ED8] text-sm">
                  Read Writing →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="poems" className="border-t border-white/10 bg-[#0B1F3A] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-16">Poems</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Things We Never Said',
              'Cities, Airports and Goodbyes',
            ].map((poem, index) => (
              <a
                href="/writings-poems"
                key={index}
                className="bg-[#102540] border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 hover:bg-[#16345A] transition duration-300 cursor-pointer block"
              >
                <p className="text-sm text-[#93C5FD] mb-4">Poem</p>
                <h3 className="text-2xl font-semibold leading-snug mb-6">{poem}</h3>

                <span className="text-[#1D4ED8] text-sm">
                  Read Poem →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#071326] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Let’s build something meaningful
          </h2>

          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-8">
            Open to collaborations, opportunities, partnerships and many more!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:amirul.aziz141018@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-full font-medium"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/amirulaziz23/"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-full"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
