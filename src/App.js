import React, { useState, useEffect } from 'react';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/errorPage/ErrorPage';

const App = () => {
  const [user, setUser] = useState({ name: '', lastname: '' });
  const [isValidInput, setIsValidInput] = useState(false);

  const handleInput = () => {
    const name = prompt('Введите ваше имя:');
    const lastname = prompt('Введите вашу фамилию:');
    
    if (name === 'John' && lastname === 'Johns') {
      setIsValidInput(true);
      setUser({ name, lastname });
    } else {
      setUser({ name, lastname });
    }
  };

  return (
    <div>
      {!isValidInput ? (
        <ErrorPage user={user} onInput={handleInput} />
      ) : (
        <MainPage user={user} />
      )}
    </div>
  );
};

export default App;