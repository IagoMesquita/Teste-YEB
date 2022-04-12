import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import Starreds from '../../components/Starred/Starred';
import AllRepos from '../../components/AllRepos/AllRepo';
import ButtonsRepoAndStarred from './ButtonsReposAndStarred/ButtonsRepoAndStarred';

import './Repo.css';
function Repos () {

  const { 
     nameRepo, setNameRepo, 
    repoAllOrStar,
    loading,
  } = useContext(MyContext)

  
  return (
    
    loading ? (
      <>
        <Header/>
        <h1 className="loading">Loading...</h1>
      </>
    )
    :
    <div>
      <Header/>
      <Profile/>
      <ButtonsRepoAndStarred/>
      <main className="repos-container">
        <div className="input-container">
          <i class="bi bi-search"></i>
          <input
            value={ nameRepo }
            onChange={({ target }) => setNameRepo(target.value)}
            className="search-users"
            placeholder="Filter by name"
            type="text"
          />
        </div>
        { repoAllOrStar ? (
          <AllRepos/>
        )
        : ( <Starreds/>) 
        }
        
      </main>
    </div>
  );
}

export default Repos;