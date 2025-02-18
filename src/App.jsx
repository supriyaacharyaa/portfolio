import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/navbar';
import Intro from './component/Introduction/intro';
import Skill from './Skill/skill';
import Works from './component/Works/works';
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Skill/>
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
