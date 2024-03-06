import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { InfoModules } from './layout/sections/info-modules/InfoModules';
import { Projects } from './layout/sections/projects/Projects';
import { Photo } from './layout/sections/photo/Photo';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <InfoModules/>
          <Projects/>
          <Photo/>
          <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;