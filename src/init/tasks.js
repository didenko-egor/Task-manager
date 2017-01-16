import * as uid from 'uuid';
const  randomId = () => uid.v4();

export const tasks =[
    {
       id: randomId(),
        titleTask: 'Разработка приложения',
        descriptionTask: 'Разработка пользовательского приложения для создания пользователей'
    },
    {
        id: randomId(),
        titleTask: 'Верстка таблицы',
        descriptionTask: 'Выровнить контент таблицына пелому краю'
    },
    {
        id: randomId(),
        titleTask: 'Вывод ошибок',
        descriptionTask: 'Обработка эксепшн приходящий с сервера'
    }
];