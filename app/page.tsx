"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRust, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faCog, faServer, faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-rust-bg text-rust-text font-sans">
      {/* Navigation */}
      <nav className="bg-rust-primary p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-rust-accent">RustDev</a>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-rust-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-rust-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-rust-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-rust-accent transition-colors">Contact</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-rust-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <a href="#about" className="block py-2 px-4 hover:bg-rust-secondary" onClick={toggleMenu}>About</a>
            <a href="#skills" className="block py-2 px-4 hover:bg-rust-secondary" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="block py-2 px-4 hover:bg-rust-secondary" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-rust-secondary" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-rust-hero bg-cover bg-center py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rust Developer Extraordinaire</h1>
          <p className="text-xl md:text-2xl mb-8">Creating efficient solutions with Rust</p>
          <a href="#contact" className="bg-rust-accent text-rust-bg px-6 py-3 rounded-full text-lg font-semibold hover:bg-rust-accent-dark transition-colors">Get in Touch</a>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-rust-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg?height=300&width=300" alt="Rust Developer" className="rounded-full mx-auto" width={300} height={300} />
            </div>
            <div className="md:w-1/2">
              <p class Name="text-lg mb-4">
                Hello! I'm a passionate Rust developer with 5+ years of experience in systems programming and web development. I love creating efficient, safe, and concurrent applications that push the boundaries of what's possible with Rust.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring the great outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FontAwesomeIcon icon={faRust} className="text-5xl mb-4 text-rust-accent" />
              <h3 className="text-xl font-semibold mb-2">Rust</h3>
              <p>Expert-level proficiency in Rust programming</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faCode} className="text-5xl mb-4 text-rust-accent" />
              <h3 className="text-xl font-semibold mb-2">Systems Programming</h3>
              <p>Low-level systems and embedded development</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faCog} className="text-5xl mb-4 text-rust-accent" />
              <h3 className="text-xl font-semibold mb-2">Concurrency</h3>
              <p>Expertise in concurrent and parallel programming</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faServer} className="text-5xl mb-4 text-rust-accent" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>Full-stack web development with Rust frameworks</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faDatabase} className="text-5xl mb-4 text-rust-accent" />
              <h3 className="text-xl font-semibold mb-2">Databases</h3>
              <p>Experience with various database systems</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-5xl mb-4 text-rust-accent" />
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <p>CI/CD, containerization, and cloud deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-rust-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-rust-bg rounded-lg shadow-lg overflow-hidden">
              <img src="/placeholder.svg?height=200&width=400" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">RustDB</h3>
                <p className="mb-4">A high-performance, ACID-compliant database engine written in Rust</p>
                <a href="#" className="text-rust-accent hover:underline">Learn More</a>
              </div>
            </div>
            <div className="bg-rust-bg rounded-lg shadow-lg overflow-hidden">
              <img src="/placeholder.svg?height=200&width=400" alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">ConcurrentOS</h3>
                <p className="mb-4">A microkernel operating system showcasing Rust's concurrency features</p>
                <a href="#" className="text-rust-accent hover:underline">Learn More</a>
              </div>
            </div>
            <div className="bg-rust-bg rounded-lg shadow-lg overflow-hidden">
              <img src="/placeholder.svg?height=200&width=400" alt="Project 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">RustNet</h3>
                <p className="mb-4">A blazing-fast web framework for building scalable applications in Rust</p>
                <a href="#" className="text-rust-accent hover:underline">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded-lg bg-rust-secondary text-rust-text" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-rust-secondary text-rust-text" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg bg-rust-secondary text-rust-text" required></textarea>
              </div>
              <button type="submit" className="w-full bg-rust-accent text-rust-bg px-6 py-3 rounded-lg text-lg font-semibold hover:bg-rust-accent-dark transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rust-primary py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-rust-accent hover:text-rust-accent-dark transition-colors">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a href="#" className="text-rust-accent hover:text-rust-accent-dark transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a href="#" className="text-rust-accent hover:text-rust-accent-dark transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </a>
          </div>
          <p>&copy; 2024 RustDev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
