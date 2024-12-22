# Notes Todo Nuxt

## Введение

Создание заметок с ToDo.

- Есть две страницы: одна для просмотра задач, а вторая для редактирования
- В режиме редактирования можно создавать заметки, добавлять задачи, удалять, ставить выполненными, менять названия заметок
- Заметки сохраняются в localStorage
- Можно протестировать сборку в Docker

Проект на сервере: [notesnuxt.таймасов.рф](https://notesnuxt.таймасов.рф)

## Установка и запуск проекта

Клонировать репозиторий:

    git clone https://github.com/ATaimasov/_.test-nuxt-todo

Установить зависимости:

    npm install

Запустить сборку:

    1. npm run build
    2. node .output/server/index.mjs

Запустить сборку через Docker:

    docker compose up --build

## Используемые технологии и подходы

#### Основа:
- Vue
- Nuxt;
- Scss;

