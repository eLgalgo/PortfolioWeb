import logo from './logo.svg';
import './App.css';
import WelcomeWindow from './components/WelcomeWindow/WelcomeWindow';
import HeaderNav from './components/HeaderNav/HeaderNav';
import MyWork from './components/MyWork/MyWork';
import Footer from './components/Footer/Footer';
import Tecnhos from './components/Tecnhos/Tecnhos';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <WelcomeWindow />
      <Tecnhos/>
      <MyWork/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;