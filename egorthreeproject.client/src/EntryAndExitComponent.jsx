import React, { useEffect } from 'react';
import './EntryAndExitComponent.css';

const EntryAndExitComponent = () => {
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

    setTimeout(() => {
      switch1.click();
    }, 1000);

    setTimeout(() => {
      switch2.click();
    }, 3000);
  }, []);

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
          <button>ВХОД</button>
        </div>
        <div className="signup_unique hide_unique">
          <h2>РЕГИСТРАЦИЯ</h2>
          <div className="inputbox_unique">
            <input type="text" name="fullname" placeholder="  ИМЯ" />
            <input type="text" name="email" placeholder="  EMAIL" />
            <input type="password" name="password" placeholder="  ПАРОЛЬ" />
          </div>
          <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
      </div>
    </div>
  );
};

export default EntryAndExitComponent;
