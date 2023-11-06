- После клонирования проекта, необходимо зайти в корень проекта
- Затем cp .env.example .env
- Поменяйте подключение БД в .env файле

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=agrosearch_db
DB_USERNAME=agrosearch_user
DB_PASSWORD=agrosearch2023
  
- Дальше пропишите docker-compose up -d
- Перейдите по ссылке http://localhost:8876
- И вуаля
