import React, { useState } from 'react';
import './Rus.css';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import DownloadButton from '../profile/DownloadButton.jsx'

// Загрузка кириллического шрифта
Font.register({ 
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf' 
});

function ResumeBuilder() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
  const [experienceCheckbox, setExperienceCheckbox] = useState(false);
  const [companies, setCompanies] = useState([{ companyName: '', position: '', duration: '' }]);
  const [skills, setSkills] = useState('');
  const [showResume, setShowResume] = useState(false);

  const toggleExperienceField = () => {
    setExperienceCheckbox(!experienceCheckbox);
  };

  const handleCompanyNameChange = (index, value) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].companyName = value;
    setCompanies(updatedCompanies);
  };

  const handlePositionChange = (index, value) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].position = value;
    setCompanies(updatedCompanies);
  };

  const handleDurationChange = (index, value) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].duration = value;
    setCompanies(updatedCompanies);
  };

  const addCompanyField = () => {
    setCompanies([...companies, { companyName: '', position: '', duration: '' }]);
  };

  const generateResume = () => {
    setShowResume(true);
    // Здесь можно собирать данные и генерировать резюме
  };

  const MyDocument = (
    <Document>
      <Page size="A4">
        <View>
          <Text style={styles.text}>Полное имя: {fullName}</Text>
          <Text style={styles.text}>Электронная почта: {email}</Text>
          <Text style={styles.text}>Телефон: {phone}</Text>
          <Text style={styles.text}>Образование:</Text>
          <Text style={styles.text}>{education}</Text>
          {experienceCheckbox && (
            <>
              <Text style={styles.text}>Опыт работы:</Text>
              {companies.map((company, index) => (
                <Text key={index} style={styles.text}>
                  - Компания: {company.companyName}, Должность: {company.position}, Длительность: {company.duration}
                </Text>
              ))}
            </>
          )}
          <Text style={styles.text}>Навыки: {skills}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="container">
      <h1>Резюме</h1>
      <form id="resumeForm">
        <div className="block">
          <label htmlFor="fullName">Полное имя:</label>
          <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>

        <div className="block">
          <label htmlFor="email">Электронная почта:</label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="block">
          <label htmlFor="phone">Телефон:</label>
          <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="block">
          <label htmlFor="education">Образование:</label>
          <textarea id="education" name="education" rows="4" value={education} onChange={(e) => setEducation(e.target.value)} required></textarea>
        </div>

        <div className="block">
          <label className='experience' htmlFor="experience">Опыт работы:</label>
          <input className='checkbox' type="checkbox" id="experienceCheckbox" checked={experienceCheckbox} onChange={toggleExperienceField} />
          <label className='experienceCheckbox' htmlFor="experienceCheckbox">У меня есть опыт работы</label>
          {experienceCheckbox &&
            companies.map((company, index) => (
              <div key={index}>
                <label>Информация о компании:</label><br />
                <input type="text" name="companyName" placeholder="Название компании" value={company.companyName} onChange={(e) => handleCompanyNameChange(index, e.target.value)} /><br />
                <input type="text" name="position" placeholder="Должность" value={company.position} onChange={(e) => handlePositionChange(index, e.target.value)} /><br />
                <input type="text" name="duration" placeholder="Длительность" value={company.duration} onChange={(e) => handleDurationChange(index, e.target.value)} /><br />
              </div>
            ))}
          <button className='butRes' type="button" onClick={addCompanyField}>Добавить компанию</button>
        </div>

        <div className="block">
          <label htmlFor="skills">Навыки:</label>
          <textarea id="skills" name="skills" rows="4" value={skills} onChange={(e) => setSkills(e.target.value)}></textarea>
        </div>
        <button className='butRes' type="button" onClick={generateResume}>Создать резюме в PDF</button>
      </form>
      <div className="resumeOutput">
        {showResume && (
          <PDFDownloadLink className='LINK' document={MyDocument} fileName={`${fullName}.pdf`}>
            <DownloadButton title={fullName}/>
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
  },
});

export default ResumeBuilder;


