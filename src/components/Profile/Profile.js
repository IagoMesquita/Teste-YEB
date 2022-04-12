import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './Profile.css';

function Profile() {
  const { profile } = useContext(MyContext);
  
  return (
    <section className="profile-container">
      <img width={ 61 } src={ profile.avatar_url } alt="incone-profile" />
      <div>
        <span>{ profile.name }</span>
        <div>{ profile.bio }</div>
      </div>
    </section>
  )
}

export default Profile;

