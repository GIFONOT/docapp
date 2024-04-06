import React, { useState, useEffect } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import ava from './user.png'
import Menu from './Menu.jsx'
import DownloadButton from './DownloadButton.jsx'

function Profile({currentUser, onLogout}) {
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);

  const togglePersonalInfo = () => {
    setShowPersonalInfo(!showPersonalInfo);
  };

  return (
      <div className="profile">
        <div className="youself">
          <div className="chenge_profile">
          <img width="170px" height="170px" src="https://img.icons8.com/ios-filled/400/user-male-circle.png" alt="user-male-circle"/>
          </div>
          <h2 className="name">Никита</h2>
          <hr className="separator" />
          <h4 onClick={togglePersonalInfo} style={{ cursor: 'pointer' }}>
            {showPersonalInfo ? 'Личная информация:' : 'Личная информация...'}
          </h4>

          <div className={`info-container ${showPersonalInfo ? 'visible' : ''}`}>
            <div>
              <div>
                Имя: Никита
              </div>
              <div>
                Фамилия: Касьянов
              </div>
              <div>
                Пол: М
              </div>
              <div>
                Возраст: 21
              </div>
            </div>
          </div>
          <hr className="separator" onClick={onLogout}/>
          <Link to="/" className="link">
          <button className="onLogout_but">
            Выйти
          </button>
          </Link>
        </div>
        <div className='files' >
        <h3>Файлы:</h3>
        <DownloadButton title='Резюме'/>
        <DownloadButton title='Список компаний'/>
        <DownloadButton title='Информация о практике'/>
        </div>
        <Menu />
      </div>
  );
}

export default Profile;
