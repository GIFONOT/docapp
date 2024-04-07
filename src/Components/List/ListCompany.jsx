import React from "react";
import "./ListCompany.css";
import { Link } from "react-router-dom";

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
        src="https://img.icons8.com/color/400/fedex.png"
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
        src="https://img.icons8.com/ios-filled/400/peterbilt.png"
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
        src="https://img.icons8.com/external-others-inmotus-design/67/external-Mercedes-mercedes-and-bmw-others-inmotus-design-3.png"
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
        src="https://img.icons8.com/ios/400/bmw.png"
        alt="Логотип Инжиниринговая Компания Прогресса"
      />
    ),
  },
  {
    id: 8,
    name: "Компания Инновационных Решений",
    description:
      "Предоставляет передовые технологические решения и сервисы для бизнеса в различных отраслях экономики.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/color/400/microsoft.png"
        alt="Логотип Компания Инновационных Решений"
      />
    ),
  },
  {
    id: 9,
    name: "Биотехнологическая Лаборатория Прогресса",
    description:
      "Специализируется на разработке и внедрении передовых биотехнологических решений для медицины и сельского хозяйства.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/fluency/400/vk-com.png"
        alt="Логотип Биотехнологическая Лаборатория Прогресса"
      />
    ),
  },
  {
    id: 10,
    name: "Технологическая Компания Инновации",
    description:
      "Предоставляет передовые технологические решения и консалтинговые услуги для бизнеса в сфере информационных технологий.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/400/twitter--v1.png"
        alt="Логотип Технологическая Компания Инновации"
      />
    ),
  },
  {
    id: 11,
    name: "Промышленная Инжиниринговая Группа",
    description:
      "Разрабатывает и внедряет инновационные инженерные решения для промышленных предприятий и производств.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/400/tesla-logo.png"
        alt="Логотип Промышленная Инжиниринговая Группа"
      />
    ),
  },
  {
    id: 12,
    name: "Строительно-Техническая Группа Прогресса",
    description:
      "Специализируется на разработке и внедрении передовых строительно-технических решений для строительной отрасли.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/400/toyota.png"
        alt="Логотип Строительно-Техническая Группа Прогресса"
      />
    ),
  },
  {
    id: 13,
    name: "Технологический Центр Инноваций",
    description:
      "Предоставляет технологические решения и услуги для бизнеса, направленные на улучшение эффективности процессов и результатов.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/400/linux.png"
        alt="Логотип Технологический Центр Инноваций"
      />
    ),
  },
  {
    id: 14,
    name: "Инжиниринговая Корпорация Прогресса",
    description:
      "Специализируется на разработке и внедрении передовых инженерных решений для промышленности и строительства.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/mac-os.png"
        alt="Логотип Инжиниринговая Корпорация Прогресса"
      />
    ),
  },
  {
    id: 15,
    name: "Технологическая Лаборатория Инноваций",
    description:
      "Предоставляет передовые технологические решения и инновационные услуги для бизнеса в различных отраслях экономики.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/mac-os.png"
        alt="Логотип Технологическая Лаборатория Инноваций"
      />
    ),
  },
  {
    id: 16,
    name: "Энергетическая Корпорация Прогресса",
    description:
      "Разрабатывает и внедряет передовые энергетические технологии и решения для энергетической отрасли.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/mac-os.png"
        alt="Логотип Энергетическая Корпорация Прогресса"
      />
    ),
  },
  {
    id: 17,
    name: "Технологический Институт Инноваций",
    description:
      "Предоставляет технологические инновации и решения для развития бизнеса и повышения его эффективности.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/mac-os.png"
        alt="Логотип Технологический Институт Инноваций"
      />
    ),
  },
  {
    id: 18,
    name: "Медицинская Лаборатория Прогресса",
    description:
      "Предоставляет медицинские аналитические услуги для диагностики и лечения различных заболеваний.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/mac-os.png"
        alt="Логотип Медицинская Лаборатория Прогресса"
      />
    ),
  },
  {
    id: 19,
    name: "Технологическая Корпорация Инноваций",
    description:
      "Специализируется на разработке и внедрении передовых технологических решений для различных отраслей промышленности и сервисов.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/mac-os.png"
        alt="Логотип Технологическая Корпорация Инноваций"
      />
    ),
  },
  {
    id: 20,
    name: "Технологическая Группа Прогресса",
    description:
      "Разрабатывает и внедряет передовые технологические решения для различных секторов экономики с целью повышения их конкурентоспособности.",
    logo: (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/mac-os.png"
        alt="Логотип Технологическая Группа Прогресса"
      />
    ),
  },
];

const CompanyPage = () => {
  return (
    <div className="company-page">
      <div className="head">
      <h1>Список доступных компаний</h1>
      <Link className='Link' to="/Prior"><ref>Выбоор приоритетов</ref> </Link>
      </div>
      <label htmlFor="searchInput">Поиск:</label>
      <input type="text" id="searchInput" placeholder="Поиск компании..." />

      <div className="company-list">
        {companies.map((company) => (
          <div key={company.id} className="company-card">
            {typeof company.logo === "string" ? (
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
            ) : (
              company.logo
            )}

            <button className="butPrior">Добавить в приоритет</button>
            <div className="company-info">
              <h2>{company.name}</h2>
              <p>{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
