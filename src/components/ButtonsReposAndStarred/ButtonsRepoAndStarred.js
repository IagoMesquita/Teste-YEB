import { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import './ButtonsRepoAndStarred.css';
function ButtonsRepoAndStarred() {
  const { repos, setRepoAllOrStar } = useContext(MyContext);
  const [isClicked, setIsClicked] = useState('Repos');

  const handleClickRepo = () => {
    setRepoAllOrStar(true) 
    setIsClicked('Repos')
  }

  const handleClickStarred = () => {
    setRepoAllOrStar(false) 
    setIsClicked('Starred')
  }

  return (
      <div className='test'>
    <div className="button-container">
      <button 
        className={isClicked === 'Repos' ? 'button-clicked' : 'button-filter'}
        onClick={ handleClickRepo }
      >
        <span>Repos</span>
        <span className='button-count'>{ repos.length }</span>
      </button>
     
      <button 
        className={isClicked === 'Starred' ? 'button-clicked' : 'button-filter'}
        onClick={ handleClickStarred }
      >
        <span>Starred</span>
        <span className='button-count'>{
          repos.filter((repo) => 
            (repo.stargazers_count >= 1 )).length
        }
        </span>
      </button>
    </div>
    </div>
  )
}

export default ButtonsRepoAndStarred;