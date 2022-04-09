import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';


function ReposProvider({ children }) {

  const [perfil, setPerfil] = useState([]);
  const [repos, setRepos ] = useState([]);
  
  // useEffect(async () => {
  //   const response = await fetch(URL+'iagomesquita')
  //   const repos = response.json();

  //   setRepo(repos);
  // }, [])

  const contextValue = {
    repos,
    setRepos,
    perfil,
    setPerfil,
  }

  return(
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
  
}


ReposProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReposProvider;