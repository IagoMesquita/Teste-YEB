import './Home.css'
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../../context/MyContext';
import getPerfil from '../../util/getPerfil';
import getRepos from '../../util/getRepos';
import Header from '../../components/Header/Header';
function Home() {

  const history = useHistory();

  const [ user, setUser ] = useState('');
  const [loadingHome, setLoadingHome] = useState(false);

  const { setProfile, setRepos } = useContext(MyContext);

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setUser(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingHome(true);
    
    const infoPerfil = await getPerfil(user);
    setProfile({ ...infoPerfil });
    localStorage.setItem('profile', JSON.stringify(infoPerfil));

    const allRepos = await getRepos(user);
    setRepos(allRepos);
    localStorage.setItem('repos', JSON.stringify(allRepos));

    history.push('/repos');

  }

  return (
    loadingHome ? (<h1 className="loading">Loading...</h1>)
   :
   <div className='container'>
     <Header/>
    <main className='main-content'>
      <form onSubmit={ (e) => { handleSubmit(e) } }>
        <div className='input-container'>
          <i class="bi bi-search"></i>
          <input 
          className='search-users' 
          value={ user }
          onChange={ handleInputChange }
          placeholder='Insert a username' 
          type="text"/>
        </div>
      </form>
    </main>
   </div> 
  )
}

export default Home;
