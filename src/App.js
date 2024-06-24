import perfil from './assets/pessoal.jpg'
import gitHub from './assets/github.svg'
import youtube from './assets/youtube.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Cracha'>
          <img className='Perfil'
            src={perfil}
            alt="Foto pessoal"
            id='userImage' />

          <h1 id='userName'>Kévin Ghisi</h1>
          <a id='userLink' href="https://github.com/kevin-ghisi" target='_blank'>
            <img src={gitHub} alt="ícone github" />
            <span>kevin-ghisi</span>
          </a>

          <p id='userBio'>Um professor de programação ajudando pessoas a começarem no mundo da tecnologia.</p>

          <ul id='socialLinks'>
            <li>
              <a href="https://youtube.com/printispace" target='_blank'>
                <img src={youtube} alt="ícone YouTube" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/printispace" target='_blank'>
                <img src={facebook} alt="ícone YouTube" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/printispace" target='_blank'>
                <img src={instagram} alt="ícone YouTube" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
