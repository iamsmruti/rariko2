import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Partner from "./components/Partner/Partner";
import Company from './components/whyChooseUs/Company';
import Work from "./components/Work/Work";
import Faq from './components/FAQ/Faq';
import Footer from "./components/Footer/Footer"

function App() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  return (
    <div className="App">
      <Header/>
      <Partner/>
      <About />
      <Company/>
      <Work/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
