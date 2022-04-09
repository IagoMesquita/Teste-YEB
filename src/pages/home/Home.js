import './Home.css'
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import getPerfil from '../../util/getPerfil';
import getRepos from '../../util/getRepos';
function Home() {

  const history = useHistory();

  const [ user, setUser ] = useState('');
  const { setProfile, setRepos } = useContext(MyContext)
  const handleInputChange = ({ target }) => {
    const { value } = target;
    setUser(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const infoPerfil = await getPerfil(user);
    setProfile({ ...infoPerfil });
    
    const allRepos = await getRepos(user);
    setRepos(allRepos);
    
    history.push('/repos');

  }

  return (
   <div className='container'>
    <header>
      <img src="./images/icons8-github-30.png" alt="logo-github"/>
      <h3>Github</h3>
      <p>profiles</p>
    </header>
    <main>
      <form onSubmit={ (e) => { handleSubmit(e) } }>
     <div className='input-container'>
      <i class="bi bi-zoom-in"></i>
      <input 
        value={ user }
        onChange={ handleInputChange }
        className='search-users' 
        placeholder='Insert a username' 
        type="text"/>
      </div>
        {/* <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon">
          <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
        </svg> */}
      </form>
      
    </main>
   </div> 
  )
}

export default Home;
