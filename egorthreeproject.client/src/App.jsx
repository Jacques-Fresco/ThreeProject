import { useEffect, useState } from 'react';
import './App.css';

function App() {

    return (
        <div style={{ width: '100%', boxSizing: 'border-box'}}>
            <header className="header">
                <div style={{ backgroundColor: 'rgba(255,255,255,1)', height: '100px', width: '100%', display: 'flex' }}>
                    <img className="logocl" src="https://static.tildacdn.com/tild3634-3839-4265-a364-356134346664/200200.png" imgfield="img" style={{ maxWidth: '120px', width: '120px', minWidth: '120px', height: 'auto', display: 'block',  }} alt="hamadewo"/>
                    <div className='menudiv'>
                        <nav style={{ display: 'block' }}>
                            <ul className="menu">
                                <li><a href="#">Корпусная мебель</a></li>
                                <li><a href="#">Каталог</a></li>
                                <li><a href="#">Портфолио</a></li>
                                <li><a href="#">Материал</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">Стоимость</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </nav> 
                    </div>
                    <div className='clickmenu'>

                    </div>
                </div>
            </header>

            <main>
                
            </main>
        </div>
    );
}

export default App;