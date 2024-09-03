import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/authSlice';
import './EntryAndExitComponent.css';
import { toggleLoginOrRegistration } from './features/loginOrRegistrationSlice';

const EntryAndExitComponent = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const switch1 = document.getElementById('switch1');
    const switch2 = document.getElementById('switch2');

    const toggleClasses = () => {
      document.querySelector('.loginMsg_unique').classList.toggle('visibility_unique');
      document.querySelector('.frontbox_unique').classList.toggle('moving_unique');
      document.querySelector('.signupMsg_unique').classList.toggle('visibility_unique');
      document.querySelector('.signup_unique').classList.toggle('hide_unique');
      document.querySelector('.login_unique').classList.toggle('hide_unique');
    };

    switch1.addEventListener('click', toggleClasses);
    switch2.addEventListener('click', toggleClasses);

    // Закомментируем автоматическое переключение для лучшего пользовательского опыта
    // setTimeout(() => {
    //   switch1.click();
    // }, 1000);

    // setTimeout(() => {
    //   switch2.click();
    // }, 3000);

    return () => {
      // Очищаем обработчики событий при размонтировании компонента
      switch1.removeEventListener('click', toggleClasses);
      switch2.removeEventListener('click', toggleClasses);
    };
  }, []);

  const handleSubmit = async (url, data) => {

    try {

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка при отправке данных');
      }

      const dataD = await response.json();

      localStorage.setItem("AccessToken", dataD.accessToken);
      localStorage.setItem("expirationAccessToken", dataD.expirationAccessToken);
      localStorage.setItem("RefreshToken", dataD.refreshToken);
      localStorage.setItem("expirationRefreshToken", dataD.expirationRefreshToken);

      dispatch(login());
      dispatch(toggleLoginOrRegistration());

    } catch (error) {

      console.error('Ошибка:', error);

    }
  };

  const handleLogin = () => {
    const email = document.querySelector('.login_unique input[name="email"]').value;
    const password = document.querySelector('.login_unique input[name="password"]').value;

    const data = { email, password };
    handleSubmit('/api/auth/login', data);
  };

  const handleSignup = () => {

    if (!validatePassword()) {
      return;
    }

    const username = document.querySelector('.signup_unique input[name="username"]').value;
    const email = document.querySelector('.signup_unique input[name="email"]').value;
    const password = document.querySelector('.signup_unique input[name="password"]').value;

    const data = { username, email, password };

    console.log("data", data)

    handleSubmit('/api/auth/signup', data);
  };

  const validatePassword = () => {
    const password = document.querySelector('.signup_unique input[name="password"]').value;
    const confirmPassword = document.querySelector('.signup_unique input[name="confirmPassword"]').value;

    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return false;
    }
    return true;
  };

  return (
    <div className="container_unique">
      <div className="backbox_unique">
        <div className="loginMsg_unique">
          <div className="textcontent_unique">
            <p className="title_unique">У вас нет аккаунта?</p>
            <p>Зарегистрируйтесь чтобы получить доступ.</p>
            <button id="switch1">Зарегистрироваться</button>
          </div>
        </div>
        <div className="signupMsg_unique visibility_unique">
          <div className="textcontent_unique">
            <p className="title_unique">У вас есть аккаунт?</p>
            <p>Авторизируйтесь чтобы получить доступ.</p>
            <button id="switch2">Вход</button>
          </div>
        </div>
      </div>
      <div className="frontbox_unique">
        <div className="login_unique">
          <h2>ВХОД</h2>
          <div className="inputbox_unique">
            <input type="text" name="email" placeholder="  EMAIL" />
            <input type="password" name="password" placeholder="  ПАРОЛЬ" />
          </div>
          <p>Забыли пароль?</p>
          <button onClick={handleLogin}>ВХОД</button>
        </div>
        <div className="signup_unique hide_unique">
          <h2>РЕГИСТРАЦИЯ</h2>
          <div className="inputbox_unique">
            <input type="text" name="username" placeholder="  ИМЯ" />
            <input type="text" name="email" placeholder="  EMAIL" />
            <input type="password" name="password" placeholder="  ПАРОЛЬ" />
            <input type="password" name="confirmPassword" placeholder="  ПОДТВЕРДИТЕ ПАРОЛЬ" />
          </div>
          <button onClick={handleSignup}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
      </div>
    </div>
  );
};

export default EntryAndExitComponent;
