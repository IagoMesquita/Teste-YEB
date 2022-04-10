import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import filterStarreds from '../util/filterStarred';


function ReposProvider({ children }) {

  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);
  const [starreds, setStarreds] = useState([]);

  const [nameRepo, setNameRepo] = useState("");
  const [repoAllOrStar, setRepoAllOrStar] = useState(true);


  useEffect(() => {
    
    setStarreds(filterStarreds(repos));

  }, [repos])

  console.log('REPOS:', repos);
  console.log('SO  FAV:', starreds)

  const contextValue = {
    repos,
    setRepos,
    profile,
    setProfile,
    starreds,
    setStarreds,
    nameRepo,
    setNameRepo,
    repoAllOrStar, 
    setRepoAllOrStar,
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