import './css/styles.css';
import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import Summary from './components/Summary';
import TechExpertise from './components/TechExpertise';
import Timeline from './components/Timeline';
import CurrentRole from './components/CurrentRole';
import Proficiencies from './components/Proficiencies';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Aspirations from './components/Aspirations';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <ContactInfo />
      <Summary />
      <TechExpertise />
      <Timeline />
      <CurrentRole />
      <Proficiencies />
      <Certifications />
      <Education />
      <Aspirations />
    </div>
  );
}

export default App;
