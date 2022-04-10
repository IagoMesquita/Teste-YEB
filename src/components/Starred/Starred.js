import { useContext } from 'react';
import MyContext from '../../context/MyContext';
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
            <span>{ starred.name }</span>
            <span>{ starred.description }</span>
          <div className="icon-container">
          <div className="icons">
            <strong>{ "< >" }</strong>
            <span>{ starred.language }</span>
          </div>
          <div className="icons">
            {/* <img src={ forkImage } alt="icon-fork" /> */}
            <span>{ starred.forks_count }</span>
          </div>
          </div>
        </div>
      ))}
    </>
    
  )
  
} 

export default Starreds;
