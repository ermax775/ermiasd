import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative overflow-x-hidden min-w-0">
      <Navbar />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
      <ErrorBoundary>
        <Clients />
      </ErrorBoundary>
      <ErrorBoundary>
        <WorkExperience />
      </ErrorBoundary>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
      <Footer />
    </main>
  );
};

export default App;
