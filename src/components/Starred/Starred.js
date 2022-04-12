import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import forkImage from '../../pages/repos/images/gitfork_120084.png';
import './Starred.css'
function Starreds() {
  
  const { starreds, nameRepo} = useContext(MyContext);

  return(
    // <h1>FAVATIROS!!</h1>
    <>
      {starreds
        .filter((starred) => starred.name.includes(nameRepo))
        .map((starred) => (
        <div className="repos-star-content" key={ starred.id }>
          <h3 className='name-repo'>{ starred.name }</h3>
          <span className='descript-repo'>{ starred.description }</span>
          <div className="icon-container">
            <div className="icons">
              <i class="bi bi-star-fill"></i>
              <span>{ starred.stargazers_count }</span>
            </div>
            <div className="icons">
              <img src={ forkImage } alt="icon-fork" />
              <span>{ starred.forks_count }</span>
            </div>
          </div>
        </div>
      ))}
    </>
    
  )
  
} 

export default Starreds;
