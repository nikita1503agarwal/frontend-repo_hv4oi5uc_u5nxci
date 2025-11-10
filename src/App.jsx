import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { ProjectCard, TestimonialCard } from './components/Cards';
import Gallery from './components/Gallery';

function App() {
  const education = [
    {
      title: 'Diploma in Computer Science, Uluberia Government Polytechnic',
      period: 'Graduating 2025',
      description: 'Focused on core computer science fundamentals including data structures, algorithms, operating systems, and software engineering.'
    }
  ];

  const experience = [
    {
      title: 'Data Visualization Simulation Intern • Tata Consultancy Services',
      period: 'Visual analytics for executive decisions',
      description: 'Built interactive dashboards and explored storytelling with data to support decision-making using charts, KPIs, and trend insights.'
    },
    {
      title: 'Web Development Intern • Aeonix Research & Innovations LLP',
      period: 'Front-end development with HTML, CSS, JavaScript',
      description: 'Contributed to real-world web projects, translating designs into responsive, accessible interfaces and optimizing for performance.'
    },
    {
      title: 'Certification • Ardent Computech Pvt. Ltd.',
      period: 'Python Programming Fundamentals',
      description: 'Completed foundational coursework and applied Python to small utilities and script-based automation.'
    }
  ];

  const projects = [
    {
      title: 'Modern Web Portfolio',
      description: 'Responsive multi-section portfolio showcasing projects, skills, and photography with a 3D hero.',
      tags: ['React', 'Tailwind', 'Spline']
    },
    {
      title: 'Mobile App Prototype',
      description: 'Concept app for on-the-go note taking and task reminders with clean UI flows.',
      tags: ['Figma', 'React Native']
    },
    {
      title: 'Data Viz Dashboard',
      description: 'Executive dashboard emphasizing trend analysis and KPI monitoring.',
      tags: ['Python', 'Pandas', 'Plotly']
    },
    {
      title: 'Generative AI Experiments',
      description: 'Prompt engineering and LLM integrations to generate content and ideas.',
      tags: ['LLMs', 'OpenAI', 'Prompting']
    }
  ];

  const testimonials = [
    { quote: 'Nilanjan consistently delivers polished work and asks the right questions.', author: 'Project Supervisor', role: 'TCS Simulation' },
    { quote: 'Great attention to detail and strong fundamentals in front-end development.', author: 'Mentor', role: 'Aeonix R&I' },
    { quote: 'Curious, proactive, and collaborative — a pleasure to work with.', author: 'Classmate', role: 'UGP CS Batch' }
  ];

  const photos = [
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975929544-c3788bf9c146?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520974690178-5b1e6d38ca27?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />

        <Section id="about" title="About Me" subtitle="A brief snapshot of who I am and what I love to build.">
          <div className="prose max-w-none text-gray-700">
            <p>
              I’m Nilanjan, a Computer Science student with a passion for building clean, user-focused digital products. I code in Python, Java, C, and JavaScript, and I’m comfortable across HTML/CSS for front-end development. My interests include data structures, algorithms, generative AI, and data visualization.
            </p>
          </div>
        </Section>

        <Section id="education" title="Education">
          <Timeline items={education} />
        </Section>

        <Section id="skills" title="Technical Skills" subtitle="Languages, frameworks, and focus areas">
          <Skills />
        </Section>

        <Section id="experience" title="Experience & Internships">
          <Timeline items={experience} />
        </Section>

        <Section id="projects" title="Portfolio & Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags} />
            ))}
          </div>
        </Section>

        <Section id="testimonials" title="Testimonials">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} quote={t.quote} author={t.author} role={t.role} />
            ))}
          </div>
        </Section>

        <Section id="photography" title="Photography" subtitle="A selection of my favorite shots.">
          <Gallery images={photos} />
        </Section>

        <Section id="contact" title="Contact & Socials" subtitle="Let’s collaborate or chat about opportunities.">
          <div className="grid md:grid-cols-2 gap-8">
            <form className="bg-white rounded-xl border border-black/5 p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Tell me about your project" />
                </div>
                <button type="button" onClick={()=>alert('Thanks! I will get back to you soon.')} className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow hover:bg-blue-700">Send Message</button>
              </div>
            </form>

            <div className="flex flex-col gap-4">
              <div className="p-6 rounded-xl border border-black/5 bg-gradient-to-br from-blue-50 to-violet-50">
                <h3 className="font-semibold">Connect</h3>
                <p className="mt-2 text-gray-700">I’m open to internships, freelance work, and collaborations in web development, data visualization, and AI.</p>
                <a href="https://www.linkedin.com/in/nilanjan-nayak-73b475322" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center rounded-md bg-gray-900 text-white text-sm font-medium px-4 py-2 w-fit">LinkedIn Profile</a>
              </div>
              <footer className="text-sm text-gray-500">© {new Date().getFullYear()} Nilanjan Nayak — Crafted with React and love.</footer>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
