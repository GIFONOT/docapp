import React, { useState } from "react";

const FAQ = () => {
  const [expandedDocuments, setExpandedDocuments] = useState([]);

  const documents = [
    {
      id: 1,
      title:
        "Как часто я могу обновлять свое резюме на портале поиска работы в университете? ",
      description: "В любое время, когда ваша информация меняется.",
      answer:
        "Вы можете обновлять свое резюме в любое время, когда появляются новые достижения, навыки или изменения в вашем опыте работы или образовании.",
    },
    {
      id: 2,
      title: "Как долго моё резюме будет храниться на портале поиска работы в университете?",
      description: "Резюме хранится 6 месяцев. ",
      answer: "Время хранения резюме в системе 6 месяцев. Вы всегда можете обновить или удалить резюме по своему усмотрению.",
    },
    {
      id: 3,
      title: "Какие советы вы можете дать по написанию эффективного резюме? ",
      description: "Подчеркните ключевые достижения и навыки и используйте интегрированный конструктор резюме.",
      answer: "Ваше резюме должно быть лаконичным и содержать важные достижения, опыт работы и навыки, наиболее значимые для вакансии, на которую вы претендуете. Подготовьте резюме, подчеркивая соответствующие навыки и опыт.",
    },
    {
        id: 4,
        title: "Как я узнаю, какая компания откликнулась на мое резюме? ",
        description: "Вы можете посмотреть отклики в своем личном кабинете.",
        answer: "Для просмотра откликов, следует перейти в свой личный кабинет и перейти в раздел отклики",
      },
      {
        id: 5,
        title: "Какие советы вы можете дать по написанию эффективного резюме? ",
        description: "Подчеркните ключевые достижения и навыки и используйте интегрированный конструктор резюме. ",
        answer: "Ваше резюме должно быть лаконичным и содержать важные достижения, опыт работы и навыки, наиболее значимые для вакансии, на которую вы претендуете. Подготовьте резюме, подчеркивая соответствующие навыки и опыт.",
      },
  ];

  const handleDownload = (id) => {
    // Действия при нажатии на кнопку "Загрузить"
    console.log(`Загрузка документа с id ${id}`);
  };

  const toggleDocument = (id) => {
    if (expandedDocuments.includes(id)) {
      setExpandedDocuments(expandedDocuments.filter((docId) => docId !== id));
    } else {
      setExpandedDocuments([...expandedDocuments, id]);
    }
  };

  return (
    <div className="faq-page">
      <h1>Часто задаваемые вопросы (FAQ)</h1>
      <div className="document-cards">
        {documents.map((document) => (
          <div key={document.id} className="document-card">
            <h2 className="FAQQQ">{document.title}</h2>
            <p>{document.description}</p>
            {expandedDocuments.includes(document.id) && (
              <p className="vvvvvv">{document.answer}</p>
            )}
            <div className="document-buttons">
              <button
                className="hhhhh"
                onClick={() => toggleDocument(document.id)}
              >
                Открыть
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
