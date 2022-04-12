import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import Starreds from '../../components/Starred/Starred';
import AllRepos from '../../components/AllRepos/AllRepo';

import './Repo.css';
function Repos () {

  const { 
    repos, nameRepo, setNameRepo, 
    repoAllOrStar, setRepoAllOrStar,
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
      <div className="button-container">
        <button className="button-filter" onClick={ () => setRepoAllOrStar(true) }>
          <span>Repos</span>
          <span className='button-count'>{ repos.length }</span>
        </button>
        <button className="button-filter" onClick={ () => setRepoAllOrStar(false) }>
          <span>Starred</span>
          <span className='button-count'>{
          repos.filter((repo) => 
            (repo.stargazers_count >= 1 )).length
          }
          </span>
        </button>
      </div>
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
          // repos
          //   .filter((repo) => repo.name.includes(nameRepo))
          //   .map((repo) => (
          //     <div className="repos-content" key={ repo.id }>
          //       <span>{ repo.name }</span>
          //       <span>{ repo.description }</span>
          //       <div className="icon-container">
          //         <div className="icons">
          //           <strong>{ "< >" }</strong>
          //           <span>{ repo.language }</span>
          //         </div>
          //         <div className="icons">
          //           <img src={ forkImage } alt="icon-fork" />
          //           <span>{ repo.forks_count }</span>
          //         </div>
          //       </div>
          //     </div>
          //   ))
        )
        : ( <Starreds/>) 
        }
        
      </main>
    </div>
  );
}

export default Repos;