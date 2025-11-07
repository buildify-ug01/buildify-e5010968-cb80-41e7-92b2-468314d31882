
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </Router>
  );
}

export default App;