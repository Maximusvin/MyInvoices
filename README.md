# Приложение "MyInvoices"

- Работает по ссылке:
  [maximusvin.github.io/myinvoices/](maximusvin.github.io/myinvoices/)
- Сервер работает на хосте:
  [http://localhost:4030/invoices/](http://localhost:4030/invoices/)
  - Запуск сервера через команду `npm run server`

1. Стейт реализован на Redux с использованием Redux Toolkit.
2. Реализована страница 404.
3. При редактировании invoice открывается отдельный Router с http-запросом по
   конкретному invoice, что дает возможность делиться ссылкой на редактируемый
   инвойс с коллегами.
4. Есть возможность добавлять/удалять и редактировать invoice.
