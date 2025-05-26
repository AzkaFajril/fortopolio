import React, { useState, useEffect } from 'react';
import "./App.css"
import PotoMe from "./assets/Poto.jpeg"
import RumahImpian from "./assets/rumahimpian.png"
import Kelas from "./assets/xi-2kelas.png"
import Clonetopia from "./assets/clonetopia.png"
import imageGalery from "./assets/imagegalery.png"

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
  
    const webhookURL = 'https://discord.com/api/webhooks/1376181774622920788/sTq8AKjm6WUNK0oFr-M72XHgGnb_bloqJDHr4_xm2c3vPB0dW2edC-RZJ6aWE9gt-ERt';
  
    const payload = {
      embeds: [
        {
          title: "📩 New Contact Form Submission",
          color: 5814783,
          fields: [
            {
              name: "Name",
              value: String(name),
              inline: true,
            },
            {
              name: "Email",
              value: String(email),
              inline: true,
            },
            {
              name: "Message",
              value: String(message),
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };
  
    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        alert("Thank you for reaching out! I'll get back to you soon.");
        e.currentTarget.reset();
      } else {
        alert("There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen font-inter bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth">
      <header className="bg-white dark:bg-gray-800 sticky top-0 shadow-sm z-50">
        <div className="max-w-4xl mx-auto px-5">
          <nav className="flex justify-between items-center py-4" aria-label="Main navigation">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-wide">Portofolio</div>
            <div className="flex items-center gap-8">
              <ul className="flex gap-8 text-gray-600 dark:text-gray-300 font-semibold">
                <li><a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 focus:outline-none">Home</a></li>
                <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 focus:outline-none">About</a></li>
                <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 focus:outline-none">Projects</a></li>
                <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 focus:outline-none">Skills</a></li>
                <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 focus:outline-none">Contact</a></li>
              </ul>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5">
        {/* Hero Section */}
        <section id="hero" aria-label="Introduction" className="flex flex-col items-center text-center py-24">
          <h1 className="text-4xl font-extrabold dark:text-white">Hello, I'm Azka Fajril Qirom</h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">Web Developer &amp; Designer</p>
        </section>

        {/* About Section */}
        <section id="about" aria-label="About me" className="flex flex-col items-center text-center py-16">
          <img
            src={PotoMe}
            alt="Your photo"
            className="w-48 h-48 rounded-full mb-8 object-cover"
          />
          <h2 className="text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4">About Me</h2>
          <p className="max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Saya seorang pengembang web yang bersemangat dan gemar menciptakan pengalaman web yang bersih dan modern. Saya ahli dalam membangun situs web dan aplikasi yang responsif dan mudah digunakan.          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" aria-label="My projects" className="py-16">
          <h2 className="text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <a href="https://rumahimpianbdg.netlify.app/" target="_blank" rel="noopener noreferrer" tabIndex={0} aria-label="Project: Project One" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg focus:shadow-lg focus:outline-none transition-shadow duration-300 flex flex-col">
              <img className="rounded-md mb-4 object-cover h-48 w-full" src={RumahImpian} alt="Screenshot of Project One" />
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">Rumah Impian</h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">Rumah Impian Adalah website untuk membeli rumah atau pun menyewakan Rumaha</p>
            </a>
            <a href="https://twomuchpeople.vercel.app/" target="_blank" rel="noopener noreferrer" tabIndex={0} aria-label="Project: Project Two" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg focus:shadow-lg focus:outline-none transition-shadow duration-300 flex flex-col">
              <img className="rounded-md mb-4 object-cover h-48 w-full" src={Kelas} alt="Screenshot of Project Two" />
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">CLASS</h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">Ini adalah Website kelas saya di kelas 2 sma saya</p>
            </a>
            <a href="https://clonetopia.netlify.app/" target="_blank" rel="noopener noreferrer" tabIndex={0} aria-label="Project: Project Three" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg focus:shadow-lg focus:outline-none transition-shadow duration-300 flex flex-col">
              <img className="rounded-md mb-4 object-cover h-48 w-full" src={Clonetopia} alt="Screenshot of Project Three" />
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">CloneTopia</h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">Clonetopia itu adalah website untuk belanja online di game growtopia</p>
            </a>
            <a href="https://imagegalleryka.netlify.app/" target="_blank" rel="noopener noreferrer" tabIndex={0} aria-label="Project: Project Four" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg focus:shadow-lg focus:outline-none transition-shadow duration-300 flex flex-col">
              <img className="rounded-md mb-4 object-cover h-48 w-full" src={imageGalery} alt="Screenshot of Project Four" />
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">Image Gallery</h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">Image Galerry adalah untuk menyimpan poto poto</p>
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" aria-label="My skills" className="py-16">
          <h2 className="text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">Skills</h2>
          <ul className="flex flex-wrap justify-center gap-4 list-none p-0 m-0">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Git', 'c++'].map(skill => (
              <li key={skill} className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full font-semibold">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" aria-label="Contact me" className="py-16">
          <h2 className="text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">Contact</h2>
          <form onSubmit={handleSubmit} aria-label="Contact form" className="max-w-md mx-auto flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold text-gray-900 dark:text-gray-100 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y dark:bg-gray-800 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 dark:bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:bg-blue-700 dark:focus:bg-blue-600 focus:outline-none transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center text-gray-500 dark:text-gray-400 text-sm py-8">
        &copy; 2024 Azka. All rights reserved.
      </footer>
    </div>
  );
}

