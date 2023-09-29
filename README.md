# Marvel Comics

Приложение для поиска комиксов Marvel

❗**3000 запросов/день - ограничение по количеству запросов у данного API**❗

## Что выполнено:

### 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы **Требования к функциональности**, описанные в прикрепленном документе в гугл классе.
- [x] Для хранения учетных записей пользователей используется **Firebase**.

**React**

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты**. [ButtonLoadMore](https://github.com/elinavagapova/aston/blob/main/src/components/buttonLoadMore/ButtonLoadMore.js), [SearchPage](https://github.com/elinavagapova/aston/blob/main/src/pages/SearchPage.js)
- [x] Есть **рендеринг списков**. [Comics](https://github.com/elinavagapova/aston/blob/main/src/components/%D1%81omics/Comics.js)
- [x] Реализована хотя бы одна **форма**. [Form](https://github.com/elinavagapova/aston/blob/main/src/components/form/Form.js), [SearchInput](https://github.com/elinavagapova/aston/blob/main/src/components/searchInput/SearchInput.js)
- [x] Есть применение **Контекст API**. [Suggest](https://github.com/elinavagapova/aston/blob/main/src/components/suggest/Suggest.js)
- [x] Есть применение **предохранителя**. [ComicPage](https://github.com/elinavagapova/aston/blob/main/src/pages/ComicPage.js), [Home](https://github.com/elinavagapova/aston/blob/main/src/pages/Home.js)
- [x] Есть хотя бы один **кастомный хук**. [http.hook](https://github.com/elinavagapova/aston/blob/main/src/hooks/http.hook.js), [useAuth](https://github.com/elinavagapova/aston/blob/main/src/hooks/useAuth.js), [useDebounce](https://github.com/elinavagapova/aston/blob/main/src/hooks/useDebounce.js)
- [x] Хотя бы несколько компонентов используют **PropTypes**. [ButtonLoadMore](https://github.com/elinavagapova/aston/blob/main/src/components/buttonLoadMore/ButtonLoadMore.js), [Comics](https://github.com/elinavagapova/aston/blob/main/src/components/%D1%81omics/Comics.js), [Form](https://github.com/elinavagapova/aston/blob/main/src/components/form/Form.js)
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**). [SearchInput](https://github.com/elinavagapova/aston/blob/main/src/components/searchInput/SearchInput.js)
- [x] Есть применение **lazy + Suspense**. [App](https://github.com/elinavagapova/aston/blob/main/src/App.js)

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit**. [store](https://github.com/elinavagapova/aston/blob/main/src/store/store.js)
- [x] Используем **слайсы**. [comicsListSlice](https://github.com/elinavagapova/aston/blob/main/src/store/comicsListSlice.js)
- [x] Используется **RTK Query**. [apiSlice](https://github.com/elinavagapova/aston/blob/main/src/api/apiSlice.js)
- [x] Используется **Transforming Responses**. [apiSlice](https://github.com/elinavagapova/aston/blob/main/src/api/apiSlice.js)

### 2 уровень (необязательный)

- [x] Использование **Firebase** для учетных записей пользователей. [firebase](https://github.com/elinavagapova/aston/blob/main/src/firebase.js)

## Дополнительно:

- использована библиотека [Formik](https://formik.org/) для форм регистрации и входа
- использована библиотека [Ant Design](https://ant.design/) для формы поиска
- использована библиотека Yup для валидации объектов JS

## **Не сделано:**

- **кастомная мидлвара**.
- **Страница Избранное и весь сопутствующий функционал**.
- **Страница История и весь сопутствующий функционал**.
