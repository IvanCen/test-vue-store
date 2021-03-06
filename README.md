# Интернет магазин на Nuxt

## Что это?
Интернет магазин с основным функционалом для совершения покупки.

## Демо 
![Main page](https://github.com/IvanCen/test-vue-store/blob/main/static/main-image.png "Скрин главной страницы")

## Что реализованно?
* Роутинг между категориями
* Данные приходящие с API
* Корзина: 
    * Удаление товара
    * Подсчет финальной суммы
    * Форма: 
        * Валидация полей
* Категории:
    * Сортировка по цене и рейтингу
    * Добавление товара в корзину
    * lazy loading
    
## Какие технологии?
Nuxt
 * Nuxt Lazy Load
 
Vue
 * Vuex
 * Vue Masked Input
    
Sass, Axios

## Сборка

```bash
# Установить зависимости
$ npm install

# Запустить сервер на localhost:3000
$ npm run dev

# Собрать сборку для продакшена и запустить
$ npm run build
$ npm run start

# Создать сборку статичного сайта
$ npm run generate
```

Для дополнительных деталей посетите [Nuxt.js docs](https://nuxtjs.org).

## License
[MIT](LICENSE)
