import React from 'react';
import { Link } from "react-router-dom";

// Фиктивные данные компаний для демонстрации
const companies = [
    {
        id: 1,
        name: "Инновационные Решения ООО",
        description:
          "Предоставляет передовые технологические решения для бизнеса в сфере информационных технологий.",
        logo: (
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Логотип Инновационные Решения ООО"
          />
        ),
      },
      {
        id: 2,
        name: "Глобальная Финансовая Группа",
        description:
          "Оказывает комплексные финансовые услуги для корпоративных и частных клиентов по всему миру.",
        logo: (
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/doodle/48/yandex-logo.png"
            alt="Логотип Глобальная Финансовая Группа"
          />
        ),
      },
      {
        id: 3,
        name: "Технологические Системы Инноваций",
        description:
          "Разрабатывает и внедряет передовые технологические системы для оптимизации бизнес-процессов.",
        logo: (
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/mac-os.png"
            alt="Логотип Технологические Системы Инноваций"
          />
        ),
      },
      {
        id: 5,
        name: "Прогрессивные Технологии Строительства",
        description:
          "Специализируется на разработке и внедрении передовых строительных технологий и инженерных решений.",
        logo: (
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/mac-os.png"
            alt="Логотип Прогрессивные Технологии Строительства"
          />
        ),
      },
      {
        id: 6,
        name: "Экологическая Технологическая Компания",
        description:
          "Предоставляет инновационные экологические технологии и решения для сохранения окружающей среды.",
        logo: (
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/mac-os.png"
            alt="Логотип Экологическая Технологическая Компания"
          />
        ),
      },
      {
        id: 7,
        name: "Инжиниринговая Компания Прогресса",
        description:
          "Специализируется на разработке инновационных инженерных решений и технологий для промышленных предприятий.",
        logo: (
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/mac-os.png"
            alt="Логотип Инжиниринговая Компания Прогресса"
          />
        ),
      },
];

const Prior = () => {
  // Получаем топ-5 компаний
  const top5 = companies.slice(0, 5);

  return (
    <div className="company-page">
        <div className="head">
        <h1>Приоритетные компании</h1>
        <Link className='Link' to="/CompanyPage"><ref>Список компаний</ref> </Link>
      </div>
      
      <div className="company-list">
        {top5.map((company, index) => (
          <div key={company.id} className="company-card">
            <h2>Приоритет: {index + 1}</h2>
            {typeof company.logo === "string" ? (
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
            ) : (
              company.logo
            )}
            <button className="DelPrior">Удалить</button>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prior;

