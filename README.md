Реализовать функционал телефонного справочника. Справочник должен минимально содержать данные: ФИО абонента и телефон <br>
Функционал разделен на 2 части: <br>
1.	Внесение информации
2.	Получение информации: Поиск абонента по телефону и наоборот. Поиск осуществлять без перезагрузки страницы.
##
Установка: 
1. ``git clode https://github.com/Eroha186/coandcoTest``
2. ``composer install``
3. ``cp .env.example .env`` - делаем копию файла конфигурации для окружения
4. В файле ``.env`` настраиваем доступ к базе данных
5. ``php artisan key:generate`` - созданем ключ приложения
6. ``php artisan migrate`` - делаем миграцию в базу данных
7. ``npm run prod`` - собираем клиентскую часть приложения
<br>
<br>

Система готова для использования. 
