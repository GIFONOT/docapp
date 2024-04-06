import React from 'react';


function DownloadButton({title}) {
  const handleDownload = () => {
    alert('Файл загружен!');
  };

  return (
    <div>
      
      <button className='file' onClick={handleDownload}>
      <img width="50" height="50" src="https://img.icons8.com/ios/50/pdf--v1.png" alt="pdf--v1"/>
      {title} <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/download--v1.png" alt="download--v1"/>
    </button>
    </div>
    
  );
}

export default DownloadButton;
