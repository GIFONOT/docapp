import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DownloadButton from '../profile/DownloadButton.jsx';
import './Stud.css'

const StudentList = () => {

    const [students, setStudents] = useState([
        { id: 1, name: 'Козлова Анастасия', rating: 9.8, specialty: 'ПИ' },
        { id: 2, name: 'Михайлов Артем', rating: 8.7, specialty: 'БИ' },
        { id: 3, name: 'Белов Александр', rating: 9.5, specialty: 'ПИ' },
        { id: 4, name: 'Алексеева Виктория', rating: 9.2, specialty: 'БИ' },
        { id: 5, name: 'Соловьев Павел', rating: 7.5, specialty: 'ПИ' },
        { id: 6, name: 'Кузнецова Ольга', rating: 6.8, specialty: 'БИ' },
        { id: 7, name: 'Лебедев Дмитрий', rating: 8.9, specialty: 'ПИ' },
        { id: 8, name: 'Федорова Мария', rating: 8.4, specialty: 'БИ' },
        { id: 9, name: 'Семенов Артемий', rating: 9.7, specialty: 'ПИ' },
        { id: 10, name: 'Иванова Елена', rating: 7.9, specialty: 'БИ' },
        { id: 11, name: 'Петров Алексей', rating: 6.5, specialty: 'ПИ' },
        { id: 12, name: 'Сидорова Анастасия', rating: 9.1, specialty: 'БИ' },
        { id: 13, name: 'Козлов Игорь', rating: 8.6, specialty: 'ПИ' },
        { id: 14, name: 'Михайлова Валерия', rating: 7.2, specialty: 'БИ' },
        { id: 15, name: 'Белов Антон', rating: 9.9, specialty: 'ПИ' },
        { id: 16, name: 'Алексеев Денис', rating: 8.3, specialty: 'БИ' },
        { id: 17, name: 'Соловьева Екатерина', rating: 6.9, specialty: 'ПИ' },
        { id: 18, name: 'Кузнецов Петр', rating: 7.8, specialty: 'БИ' },
        { id: 19, name: 'Лебедева Алина', rating: 8.1, specialty: 'ПИ' },
        { id: 20, name: 'Федоров Иван', rating: 9.6, specialty: 'БИ' },
      ]);
      
      

  const handleFeedback = (studentId) => {
    alert(`Отклик для студента с ID ${studentId}`);
  };
  const sortedStudents = [...students].sort((a, b) => b.rating - a.rating);

return (
  <div className="student-list">
    <h1>Список студентов ПИ / БИ</h1>
    <div className="cards">
      {sortedStudents.map((student) => (
        <div key={student.id} className="card">
          <h2>{student.name}</h2>
          <p>Рейтинг: {student.rating}</p>
          <p>Направление: {student.specialty}</p>
          <div className="buttons">
            <DownloadButton title={student.name} />
            <button onClick={() => handleFeedback(student.id)}>Оставить отклик</button>
            <button className='nnnn' >Открыть резюме</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default StudentList;

