import React, { useState } from 'react';
import './Menu.css';
import { Link } from "react-router-dom";

function Menu() {  
    return (
      <>
      <div className={`visible}`}>
      </div>
        <div className='menu'>
        <h3>Меню</h3>
        <hr className="separator" />
        <ln>
          <Link className='Link' to="/CompanyPage"><div>Список компаний</div> </Link>
          <Link className='Link' to="/Prior"><div>Выбоор приоритетов</div> </Link>
          <Link className='Link' to="/ResumeBuilder"><div>Составить резюме</div> </Link>
          <div>Отклики </div>
        </ln>
      </div>
      
      </>
        
      
      
    );
  }
  
  export default Menu;