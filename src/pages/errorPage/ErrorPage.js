import React from 'react';

const ErrorPage = ({ user, onInput }) => {
  return (
    <div>
      <h1>Тебе сюда нельзя - {user.name} {user.lastname}</h1>
      <button onClick={onInput}>Введите имя и фамилию</button>
    </div>
  );
};

export default ErrorPage;