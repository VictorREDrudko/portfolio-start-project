import './App.css';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';

function App() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Skills/>
      </div>
    );
}

export default App;