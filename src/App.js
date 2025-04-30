import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './i18n';
import Navbar from './components/navbar';
import Hero from './sections/hero';
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Footer from './components/footer';
import PageTransition from './components/pagetransition';
import './styles/app.css';
import Loader from './components/loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
            <Loader />        ) : (
          <>
            <Navbar />
            <main>
              <PageTransition>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </PageTransition>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;