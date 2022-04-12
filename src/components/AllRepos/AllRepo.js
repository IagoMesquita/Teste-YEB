import { useContext } from 'react'; 
import MyContext from '../../context/MyContext';
import forkImage from '../../pages/repos/images/gitfork_120084.png';
import './AllRepo.css';

function AllRepos() {
  const { repos, nameRepo } = useContext(MyContext);
  return (
    <>
    {repos
      .filter((repo) => repo.name.includes(nameRepo))
        .map((repo) => (
          <div className="repos-content" key={ repo.id }>
            <h3 className='name-repo'>{ repo.name }</h3>
            <span className='descript-repo'>{ repo.description }</span>
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
    </>
  )
}

export default AllRepos;