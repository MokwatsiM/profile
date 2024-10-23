import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Hero />
        <div className="mt-16 space-y-24">
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8 mt-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Motebang Mokwatsi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;