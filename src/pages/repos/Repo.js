import { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import forkImage from './images/gitfork_120084.png';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

import './Repo.css';
function Repos () {

  const { repos } = useContext(MyContext)
  const [ nameRepo, setNameRepo ] = useState('');

  return (
    <div>
      <Header/>

      {/* <header>
        <img src="./images/icons8-github-30.png" alt="logo-github" />
        <h3>Github</h3>
        <p>profiles</p>
      </header> */}
      <Profile/>
      {/* <section className="profile-container">
        <img width={ 61 } src={ profile.avatar_url } alt="incone-profile" />
        <div>
          <span>{ profile.name }</span>
          <div>{ profile.bio }</div>
        </div>
      </section> */}
      <div className="button-container">
        <button className="button-filter">
          <span>Repos</span>
          <span className='button-count'>{ repos.length }</span>
        </button>
        <button className="button-filter">
          <span>Starred</span>
          <span className='button-count'>{
          repos.filter((repo) => 
            (repo.stargazers_count === 1 )).length
          }
          </span>
        </button>
      </div>
      <main className="repos-container">
        <div className="input-container">
          <i class="bi bi-zoom-in"></i>
          <input
            value={ nameRepo }
            onChange={({ target }) => setNameRepo(target.value)}
            className="search-users"
            placeholder="Filter by name"
            type="text"
          />
        </div>
        {repos
          .filter((repo) => repo.name.includes(nameRepo))
          .map((repo) => (
            <div className="repos-content" key={ repo.id }>
              <span>{ repo.name }</span>
              <span>{ repo.description }</span>
              <div className="icon-container">
                <div className="icons">
                  <strong>{ "< >" }</strong>
                  <span>{ repo.language }</span>
                </div>
                <div className="icons">
                  <img src={ forkImage } alt="icon-fork" />
                  <span>{ repo.forks_count }</span>
                </div>
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}

export default Repos;