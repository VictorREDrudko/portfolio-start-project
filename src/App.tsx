import './App.css';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Education } from './layout/sections/education/Education';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';

function App() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Skills/>
        <Works/>
        <Education/>
        <Contacts/>
      </div>
    );
}

export default App;