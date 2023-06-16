import React from 'react';
import Card from './components/Card';
import img1 from './img/img1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Card
        image={img1}
        title="Заголовок карточки 1"
        description="Описание карточки"
        buttonText="Нажми меня"
      />

      <Card
        title="Заголовок карточки 2"
        description="Другое описание"
        buttonText="Нажми меня"
      />
    </div>
  );
}

export default App;