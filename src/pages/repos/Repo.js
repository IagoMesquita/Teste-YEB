import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import forkImage from './images/gitfork_120084.png'

import './Repo.css';
function Repos () {

  const { profile, repos } = useContext(MyContext)
  console.log(profile)
  return(
   <div>
     <header>
      <img src="./images/icons8-github-30.png" alt="logo-github"/>
      <h3>Github</h3>
      <p>profiles</p>
    </header>
    <section className="profile-container">
      <img width={61} src={  profile.avatar_url } alt="incone-profile"/>
      <div>
        <span>{ profile.name }</span>
        <div>{ profile.bio }</div>
      </div>
    </section>
    <div className="button-container">
      <button>Repos</button>
      <button>Start</button>
    </div>
    <main className='repos-container'>
    <div className='input-container'>
      <i class="bi bi-zoom-in"></i>
      <input 
        // value={  }
        // onChange={  }
        className='search-users' 
        placeholder='Filter by name' 
        type="text"/>
      </div>
      { repos.map((repo) => (
        <div className='repos-text' key={ repo.id }>
          <span>{ repo.name }</span>
          <span>{ repo.description }</span>
          <div className='icon-container'>
            <div className='icons'>
              <strong>{ '< >' }</strong>
              <span>{ repo.language }</span>              
            </div>
            <div className='icons'>
              <img src={ forkImage } alt="icon-fork"/>
              <span>{ repo.forks_count }</span>
            </div>
          </div>
      </div>
      )) }
    </main>
   </div>
  )
}

export default Repos;