import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const presidents = ['Эндрю Джексон', 'Мартин Ван Бюрен', 'Уильям Гаррисон'];
const presidents10 = [
    {
        firstName: 'Джон',
        lastName: 'Тайлер',
        presidentIndex: 10,
    },
    {
        firstName: 'Джеймс Нокс',
        lastName: 'Полк',
        presidentIndex: 11,
    },
    {
        firstName: 'Закари',
        lastName: 'Тейлор',
        presidentIndex: 12,
    },
    {
        firstName: 'Миллард',
        lastName: 'Филлмор',
        presidentIndex: 13,
    },
    {
        firstName: 'Франклин',
        lastName: 'Пирс',
        presidentIndex: 14,
    },
];

const serverData = [{
    "id": "666958530825467",
    "title": "Friday open-air party w/ Lucarelli, Mihas and Yarik JR | Hide",
    "place": "Hide",
    "date": "2020-06-12T20:00:00.000Z"
}, {
    "id": "786185895252176",
    "title": "Захист скверу імені Чкалова",
    "place": "Сквер Им. Чкалова",
    "date": "2020-06-10T09:00:00.000Z"
}, {
    "id": "623921328209118",
    "title": "Живая музыка на летней террасе",
    "place": "От Заката до Рассвета",
    "date": "2020-06-14T17:00:00.000Z"
}, {
    "id": "909559356190295",
    "title": "Amer (2009)",
    "place": "Кіноклуб Кіноха",
    "date": "2020-06-13T15:00:00.000Z"
}, {
    "id": "589272605321022",
    "title": "В парк Межигорье на теплоходе",
    "place": "Причал №6, Почтовая пл.",
    "date": "2020-06-13T07:45:00.000Z"
}];

function getTime(dateString) {
    const time = new Date(dateString).getHours();
    if (time >= 5 && time < 12) {
        return 'Утро'
    } else if (time >= 12 && time < 18) {
        return 'День';
    } else if (time >= 18 && time < 22) {
        return 'Вечер';
    } else {
        return 'Ночь';
    }
}

function handleSubmit(event) {
    event.preventDefault();

    // fetch('https://postman-echo.com/post', {method: 'POST', body: data});
}


ReactDOM.render(
    <React.StrictMode>
        <ul>
            <li>Джордж Вашингтон</li>
            <li>Джон Адамс</li>
            <li>Томас Джефферсон</li>
        </ul>
        <ol start={4}>
            <li>Джеймс Мэдисон</li>
            <li>Джеймс Монро</li>
            <li>Джон Куинси Адамс</li>
        </ol>
        <ul style={{backgroundColor: '#ddd', fontWeight: "bold", paddingTop: '1em', paddingBottom: '1em'}}>
            {presidents.map((president, index) => {
                return <li key={index}>{president}</li>
            })}
        </ul>
        <ul>
            {presidents10.map(president => {
                return president.presidentIndex % 2 === 0 ?
                    <li key={president.presidentIndex}>{`${president.lastName}, ${president.firstName},
                        ${president.presidentIndex}-й`}</li> : null;
            })}
        </ul>
        <ul>
            {serverData.sort((a, b) => new Date(a.date) - new Date(b.date)).map((event, index) => {
                const date = new Date(event.date);
                return (
                    <li key={index} style={date < Date.now() ? {opacity: 0.5} : null}>
                        <a href={`https://www.facebook.com/events/${event.id}/`} target="_blank">{event.title}</a>
                        <div> {getTime(event.date)}, {date.toLocaleString()}</div>
                        <div>{event.place}</div>
                    </li>
                )
            })}
        </ul>
        <form method='POST' style={{padding: '1em'}} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Имя</label><br/>
                <input type="text" id='name' name='name' placeholder='Name' required/>
            </div>
           <div>
               <label htmlFor="password">Пароль</label><br/>
               <input type="password" id='password' name='password' minLength={4} placeholder='Password' required/>
           </div>
            <div>
                <input type="radio" name='plan' id='tariff_basic' value='basic' defaultChecked={true}/>
                <label htmlFor="tariff_basic">Базовый тариф</label>
            </div>
            <div>
                <input type="radio" name='plan' id='tariff_premium' value='premium'/>
                <label htmlFor="tariff_premium">Премиум тариф</label>
            </div>
            <input type="checkbox" id='news' name='newsletter' defaultChecked={true}/>
            <label htmlFor="news">Присылайте мне новости на почту</label>
            <br/>
            <button type='submit'>Купить</button>
        </form>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
