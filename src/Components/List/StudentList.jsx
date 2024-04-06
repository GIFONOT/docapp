import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DownloadButton from '../profile/DownloadButton.jsx'; // Предположим, что у вас есть компонент DownloadButton для кнопки скачивания

const StudentList = () => {
  // Предположим, что у вас есть массив объектов студентов с полями id, name и rating
  const [students, setStudents] = useState([
    { id: 1, name: 'Иванов Иван', rating: 4.5 },
    { id: 2, name: 'Петров Петр', rating: 4.2 },
    { id: 3, name: 'Сидоров Сидор', rating: 4.7 },
    // Добавьте больше студентов по мере необходимости
  ]);

  const handleFeedback = (studentId) => {
    alert(`Отклик для студента с ID ${studentId}`);
  };

  return (
    <div className="student-list">
      <h1>Список студентов ПИ БИ</h1>
      <div className="cards">
        {students.map((student) => (
          <div key={student.id} className="card">
            <h2>{student.name}</h2>
            <p>Рейтинг: {student.rating}</p>
            <div className="buttons">
              <DownloadButton title={student.name} />
              <button onClick={() => handleFeedback(student.id)}>Оставить отклик</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;

