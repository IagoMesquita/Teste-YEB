import './Header.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logoGithub from './images/icons8-github.svg';
function Header() {
  const  history  = useHistory();
  const { pathname } = history.location;

  const returningForHome = () => {
    history.push('/')
  }

 return (
  <header>
    <div className='logo-container'>
      <img src={ logoGithub } alt="logo-github"/>
      <h3>Github</h3>
      <p>profiles</p>
    </div>
    { pathname === '/repos' && (
      <button 
        className='btn-change-user'
        onClick={ returningForHome }
      >
        CHANGE USERNAME
      </button>
    )}
  
  </header> 
 )
}

export default Header;
