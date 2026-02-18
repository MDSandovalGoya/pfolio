import imgHomePageBackground from "../assets/background.png";
import imgRectangle6 from "../assets/project1.png";
import imgProject2 from "../assets/project2.png";
import imgRectangle8 from "../assets/project3.png";
import imgAboutPhoto from "../assets/about.png";
import { motion } from "motion/react";


const FORMSPREE_ID = "https://formspree.io/f/xojnlvyj"; 

const SITE_CONTENT = {
  name: "Matthew Sandoval Goya",
  navLinks: ["Work", "About", "Contact"],
  
  hero: {
    subtitle: "Designer & Developer",
    title: "Matthew\nSandoval Goya",
    description: "Transforming concepts into exceptional digital experiences.\nSpecializing in product design, development, and brand strategy."
  },
  
  work: {
    title: "Work",
    projects: [
      {
        title: "Gabiasplice",
        year: "2024",
        description: "Education startup based on the idea of bringing tutoring to people's phones.",
        image: imgRectangle6,
        link: "https://your-project-link.com" 
      },
      {
        title: "Project 2",
        year: "2024",
        description: "Revised midterm based on marketing strategy website.",
        image: imgProject2,
        link: "https://www.figma.com/design/f0eJm3bEzDVOHAb7Vwzxv5/Project-2?t=jiPvoyq0qZ6v7ZWZ-1" 
      },
      {
        title: "Athlete portfolio",
        year: "2023",
        description: "Revised portfolio for Athletes based on coursework and research. ",
        image: imgRectangle8,
        link: "https://www.figma.com/design/dUOshkisNVFwHQSWmwmCEy/sports-portfolio?t=jiPvoyq0qZ6v7ZWZ-1"
      }
    ]
  },
  
  about: {
    title: "About",
    photoAlt: "Matthew Sandoval Goya",
    paragraphs: [
      "I am a Developer, Designer, and a creative from Queens, New York. I work with Brands, Businesses, and Founders to develop products and projects that feel premium, clear, and powerful."
    ],
    expertise: {
      title: "Expertise",
      items: [
        { title: "Product Design", description: "Creating intuitive interfaces." },
        { title: "Development", description: "Building robust solutions." },
        { title: "Brand Strategy", description: "Developing visual identities." }
      ]
    }
  },
  
  contact: {
    title: "Let's Work\nTogether",
    formLabels: { name: "Name", email: "Email", message: "Message" },
    placeholders: { name: "Your name", email: "your.email@example.com", message: "Tell me about your project" },
    buttonText: "Send Message"
  },
  
  footer: {
    name: "Matthew Sandoval",
    sections: [
      { title: "Studio", links: ["About", "Services", "Contact"] },
      { title: "Directory", links: ["Work", "About", "Contact"] },
      { title: "Social", links: [{ label: "LinkedIn", url: "https://linkedin.com/in/YOURPROFILE" }] } // SOCIAL EDITED
    ],
    copyright: "© 2024 Matthew Sandoval Goya. All rights reserved."
  }
};

function Background() {
  return (
    <div className="fixed inset-0 bg-[#001028]">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('${imgHomePageBackground}')`, backgroundSize: '1024px 1024px' }} />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-12 py-4 flex items-center justify-between">
        <div className="font-['Inter',sans-serif] font-medium text-white text-base">{SITE_CONTENT.name}</div>
        <div className="flex items-center gap-12">
          {SITE_CONTENT.navLinks.map((link, index) => (
            <a href={`#${link.toLowerCase()}`} key={index} className="font-['Inter',sans-serif] text-sm text-white/90 hover:text-white transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-12 pt-24 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="font-['Konkhmer_Sleokchher',sans-serif] text-white/40 text-3xl mb-12 tracking-wider">{SITE_CONTENT.hero.subtitle}</h2>
          <h1 className="font-['Konkhmer_Sleokchher',sans-serif] text-white text-[140px] leading-[1.1] mb-16 whitespace-pre-line">{SITE_CONTENT.hero.title}</h1>
          <p className="font-['Inter',sans-serif] text-white/70 text-lg max-w-[700px] mx-auto leading-relaxed">{SITE_CONTENT.hero.description}</p>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ title, year, description, image, link }: any) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="aspect-[4/3] mb-6 rounded-sm overflow-hidden border border-white/10 group-hover:border-white/40 transition-all bg-white/5">
        <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>
      <h3 className="font-['Konkhmer_Sleokchher',sans-serif] text-white text-2xl mb-2">{title}</h3>
      <p className="font-['Inter',sans-serif] text-white/50 text-sm mb-4">{year}</p>
      <p className="font-['Inter',sans-serif] text-white/70 text-base leading-relaxed">{description}</p>
    </a>
  );
}

function Projects() {
  return (
    <section id="work" className="relative py-32 px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-['Konkhmer_Sleokchher',sans-serif] text-white text-7xl mb-24 text-center">{SITE_CONTENT.work.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {SITE_CONTENT.work.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-48 px-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-['Konkhmer_Sleokchher',sans-serif] text-white text-8xl mb-20 text-center">{SITE_CONTENT.about.title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-24 items-start">
          <div className="aspect-[3/4] bg-white/5 border border-white/10 rounded-sm overflow-hidden">
            <img src={imgAboutPhoto} alt={SITE_CONTENT.about.photoAlt} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-12">
            <div className="space-y-8 font-['Inter',sans-serif] text-white/80 text-lg leading-relaxed">
              {SITE_CONTENT.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="pt-8 border-t border-white/10">
              <h3 className="font-['Konkhmer_Sleokchher',sans-serif] text-white text-2xl mb-6">{SITE_CONTENT.about.expertise.title}</h3>
              <div className="space-y-6">
                {SITE_CONTENT.about.expertise.items.map((service, i) => (
                  <div key={i} className="border-l-2 border-white/30 pl-6">
                    <h4 className="font-['Inter',sans-serif] font-medium text-white text-base mb-2">{service.title}</h4>
                    <p className="font-['Inter',sans-serif] text-white/70 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 px-12 border-t border-white/10">
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-['Konkhmer_Sleokchher',sans-serif] text-white text-7xl mb-12 text-center whitespace-pre-line">{SITE_CONTENT.contact.title}</h2>
        <form action={`https://formspree.io/f/xojnlvyj`} method="POST" className="space-y-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-white text-sm mb-3 block">{SITE_CONTENT.contact.formLabels.name}</label>
              <input name="name" type="text" required placeholder={SITE_CONTENT.contact.placeholders.name} className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-white" />
            </div>
            <div>
              <label className="text-white text-sm mb-3 block">{SITE_CONTENT.contact.formLabels.email}</label>
              <input name="email" type="email" required placeholder={SITE_CONTENT.contact.placeholders.email} className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-white" />
            </div>
          </div>
          <div>
            <label className="text-white text-sm mb-3 block">{SITE_CONTENT.contact.formLabels.message}</label>
            <textarea name="message" required rows={6} placeholder={SITE_CONTENT.contact.placeholders.message} className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-white resize-none" />
          </div>
          <div className="pt-8">
            <button type="submit" className="px-12 py-4 bg-white text-[#001028] font-medium hover:bg-white/80 transition-colors">
              {SITE_CONTENT.contact.buttonText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-black py-20 px-12 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Konkhmer_Sleokchher',sans-serif] text-white text-7xl mb-8">{SITE_CONTENT.footer.name}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Studio & Directory Sections S*/}
          <div>
             <h3 className="font-['Konkhmer_Sleokchher',sans-serif] text-white text-xl mb-6">Social</h3>
             <div className="space-y-3 font-['Inter',sans-serif] text-white/60 text-sm">
                <a href="www.linkedin.com/in/matthew-sandoval-045b51316" target="_blank" className="block hover:text-white transition-colors">LinkedIn</a>
             </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">{SITE_CONTENT.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}