import React, { useState } from "react";
import "./com.css";

const CompanyProfile = () => {
  const [company, setStudents] = useState([
    { id: 1, name: "Козлова Анастасия", rating: 9.8, specialty: "ПИ" },
    { id: 2, name: "Михайлов Артем", rating: 8.7, specialty: "БИ" },
    { id: 3, name: "Белов Александр", rating: 9.5, specialty: "ПИ" },
    { id: 4, name: "Алексеева Виктория", rating: 9.2, specialty: "БИ" },
    { id: 5, name: "Соловьев Павел", rating: 7.5, specialty: "ПИ" },
    { id: 6, name: "Кузнецова Ольга", rating: 6.8, specialty: "БИ" },
    { id: 7, name: "Лебедев Дмитрий", rating: 8.9, specialty: "ПИ" },
    { id: 8, name: "Федорова Мария", rating: 8.4, specialty: "БИ" },
    { id: 9, name: "Семенов Артемий", rating: 9.7, specialty: "ПИ" },
    { id: 10, name: "Иванова Елена", rating: 7.9, specialty: "БИ" },
    { id: 11, name: "Петров Алексей", rating: 6.5, specialty: "ПИ" },
    { id: 12, name: "Сидорова Анастасия", rating: 9.1, specialty: "БИ" },
    { id: 13, name: "Козлов Игорь", rating: 8.6, specialty: "ПИ" },
    { id: 14, name: "Михайлова Валерия", rating: 7.2, specialty: "БИ" },
    { id: 15, name: "Белов Антон", rating: 9.9, specialty: "ПИ" },
    { id: 16, name: "Алексеев Денис", rating: 8.3, specialty: "БИ" },
    { id: 17, name: "Соловьева Екатерина", rating: 6.9, specialty: "ПИ" },
    { id: 18, name: "Кузнецов Петр", rating: 7.8, specialty: "БИ" },
    { id: 19, name: "Лебедева Алина", rating: 8.1, specialty: "ПИ" },
    { id: 20, name: "Федоров Иван", rating: 9.6, specialty: "БИ" },
  ]);
  const [company2, setStudents2] = useState([
    { id: 1, name: "Иванова Елена", rating: 7.9, specialty: "БИ" },
    { id: 2, name: "Петров Алексей", rating: 6.5, specialty: "ПИ" },
    { id: 3, name: "Сидорова Анастасия", rating: 9.1, specialty: "БИ" },
    { id: 4, name: "Козлов Игорь", rating: 8.6, specialty: "ПИ" },
    { id: 5, name: "Михайлова Валерия", rating: 7.2, specialty: "БИ" },
    { id: 6, name: "Белов Антон", rating: 9.9, specialty: "ПИ" },
    { id: 7, name: "Алексеев Денис", rating: 8.3, specialty: "БИ" },
    { id: 8, name: "Соловьева Екатерина", rating: 6.9, specialty: "ПИ" },
    { id: 9, name: "Кузнецов Петр", rating: 7.8, specialty: "БИ" },
    { id: 10, name: "Лебедева Алина", rating: 8.1, specialty: "ПИ" },
    { id: 11, name: "Федоров Иван", rating: 9.6, specialty: "БИ" },
  ]);
  return (
    <div className="company-profile">
      <div className="company-info">
        <img className="IMG"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/400/linux.png"
          alt="Логотип Технологический Центр Инноваций"
        />
        <h2>Технологический Центр Инноваций</h2>
        <p>
          Предоставляет технологические решения и услуги для бизнеса, направленные на улучшение
          эффективности процессов и результатов.
        </p>
      </div>
      <div className="students">
        <div className="students-offers">
          <h3>Студенты, которым отправили отклики:</h3>
          <div className="student-cards">
            {company.map((student) => (
              <div key={student.id} className="student-card">
                <h4>{student.name}</h4>
                <p>Рейтинг: {student.rating}</p>
                <button >Провалиться на профиль</button>
              </div>
            ))}
          </div>
        </div>
        <div className="students-priority">
          <h3>Студенты, которые добавили компанию в приоритет:</h3>
          <div className="student-cards">
            {company2.map((student) => (
              <div key={student.id} className="student-card">
                <h4>{student.name}</h4>
                <p>Рейтинг: {student.rating}</p>
                <button>Провалиться на профиль</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
