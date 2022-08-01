import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Partner from "./components/Partner/Partner";
import Company from './components/whyChooseUs/Company';

function App() {
  return (
    <div className="App">
      <Header />
      <Partner/>
      <About />
      <Company/>
    </div>
  );
}

export default App;
