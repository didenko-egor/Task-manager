# R

## [Установка](#setup)
`npm install`

## [Конфигурация](#config)
В качестве базовой конфигурации используется `config/default.js`.
Если необходимо настроить конфиг для конкретной площадки, то нужно добавить файл `{{hostname}}.js`, в котором будет 
новый конфиг. Для того, что он применился нужно запускать сервер с переменной `HOSTNAME={{your_host}}`.

Пример:
```bash
cd config
cp default.js test.host.su.js #создаём новый файл с именем хоста
#редактируем необходимые значения конфига...
cd ..
HOSTNAME=test.host.su npm start #запуск сервера
```

## [Запуск](#start)
* разработка - `npm run dev`
* билд стилей - `sass --watch public/css/themes/_theme-[имя_темы].scss:public/css/[имя_темы].css`
* билд на продакшн - `npm run build`
* запуск для продакшн- `NODE_ENV=production npm start`
