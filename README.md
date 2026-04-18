# Космический сайт для GitHub Pages с отправкой на почту

Этот вариант не использует Render, VPS или отдельный сервер.

## Как запустить

1. Создай аккаунт на Formspree.
2. Создай новую форму.
3. Получи адрес формы вида:
   `https://formspree.io/f/xxxxx`
4. Открой файл `docs/index.html`.
5. Найди строку:

```html
<form id="messageForm" class="form" action="https://formspree.io/f/PASTE_YOUR_FORMSPREE_ID" method="POST">
```

6. Замени `PASTE_YOUR_FORMSPREE_ID` на свой ID или вставь весь URL Formspree.
7. Загрузи папку `docs` в свой GitHub-репозиторий.
8. Включи GitHub Pages:
   - Settings
   - Pages
   - Deploy from a branch
   - Branch: main
   - Folder: /docs

## Что получится

- `index.html` — форма отправки
- все сообщения приходят на почту, подключённую к Formspree

## Что можно менять

- `docs/index.html` — текст на странице
- `docs/style.css` — цвета, кнопки, фон, размеры
- `docs/app.js` — сообщения об ошибках и логика формы
