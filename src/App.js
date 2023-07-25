import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Toggle from './components/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './Context';

function App() {
const theme = useContext(ThemeContext);
const darkmode = theme.state.darkMode;

  return (
    <div className="App" style={{backgroundColor: darkmode ? "#222" : "white", color: darkmode && "white" }}>
      <Toggle />
      <Intro />
      <ProductList />
      <About />
      <Contact />
    </div>
  );
}

export default App;
