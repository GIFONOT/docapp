import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Main from './Components/main/Main.jsx'
import CompanyPage from './Components/List/ListCompany.jsx'
import Profile from './Components/profile/Profile.jsx'
import Prior from './Components/List/Prior.jsx'
import CompanyProfile from './Components/profile/CompanyProfile.jsx'
import StudentList from './Components/List/StudentList.jsx'
import Header from './Components/header/Header.jsx'
import ResumeBuilder from './Components/SubmitResume/SubmitResume.jsx'


function App() {

  const [users, setUsers] = useState([
    { id: 1, name: 'Артем', surname: 'Полозников', username: 'Clonn123', password: 'Clonn123', email: 'art-clon@mail.ru', gender: "Мужчина", age: "21" },
    { id: 2, name: 'Андрей', surname: 'Смирнов', username: 'Gifon', password: 'Gifon', email: 'gifon@mail.ru', gender: "Мужчина", age: "21"  }, 
  ]);

  const [currentUser, setCurrentUser] = useState();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  

  useEffect(() => {
    // Проверяем наличие токена в localStorage при загрузке компонента
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // Вызываем функцию для автоматического входа пользователя
      autoLogin(accessToken);
    }
  }, [currentUser]);
  
  const handleLogin = (user, rememberMe) => {
    setCurrentUser(user);
    if (rememberMe) {    
        // Сохранение токена доступа в локальном хранилище
        localStorage.setItem('accessToken', generateToken(user.id));
  }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    // Удаляем токен из localStorage при выходе пользователя
    localStorage.removeItem('accessToken');
  };

  const autoLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
  
    if (accessToken) {
      // Находим пользователя по токену
      const user = users.find(u => generateToken(u.id) === accessToken);
  
      if (user) {
        setCurrentUser(user);
      }
    }
  };

  const generateToken = (userId) => {
    return `token_${userId}`;
  };

  return (
    <Router>
      <Header currentUser={currentUser}/>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/CompanyPage" element={<CompanyPage />} />
      <Route path="/student" element={<StudentList />} />
      <Route path="/CompanyProfile" element={<CompanyProfile />} />
      <Route path="/Prior" element={<Prior />} />
      <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
      <Route path="/account" element={<Profile currentUser={currentUser} onLogout={handleLogout}/> } />

      </Routes>
    </Router>
    
  );
}

export default App;
