import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Cards from "./components/Card/Card"
import Section from "./components/Section/Section"
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section 
      title="Top Albums"
      endpoint="https://qtify-backend-labs.crio.do/albums/top"
      buttonText="Collapse"/>
      <Section 
      title="New Albums"
      endpoint="https://qtify-backend-labs.crio.do/albums/new"
      buttonText="Collapse"/>
    </div>
  );
}

export default App;
