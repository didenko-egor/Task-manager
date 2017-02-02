# virtu-react-ui

virtu-react-ui библиотека компонентов интерфейса на [React](https://facebook.github.io/react/).

## Содержание
- [Установка](#installation)
- [Компоненты](#components)
    - [AddButton](#addbutton)
    - [Breadcrumbs](#breadcrumbs)
    - [ButtonBasic](#buttonbasic)
    - [ButtonSelect](#buttonselect)
    - [ButtonLight](#buttonlight)
    - [ButtonLightWithIcon](#buttonlightwithicon)
    - [ButtonSecondary](#buttonsecondary)
    - [ButtonDropDown](#buttondropdown)
    - [Container](#container)
    - [Counter](#counter)
    - [Column](#column)
    - [CheckBox](#checkbox)
    - [ComboBox](#combobox)
    - [Checkable](#checkable)
    - [ClearButton](#clearbutton)
    - [DateField](#datefield)
    - [DatePeriod](#dateperiod)
    - [DropzoneUploader](#dropzoneuploader)
    - [Filters](#filters)
        * [cyrillic](#filtercyrillic)
        * [letters](#filterletters)
        * [numbers](#filternumbers)
        * [noLongerThan](#filternolongerthan)
    - [Form](#form)
        * [connectForm](#connectform)
        * [createFormReducer](#createformreducer)
        * [Form](#formcomponent)
    - [Link](#link)
    - [middleware](#middleware)
        * [applyMiddleware](#middlewareapplymiddleware)
        * [denormalize](#middlewaredenormalize)
        * [getByDescription](#middlewarebydescription)
        * [normalize](#middlewarenormalize)
        * [types](#middlewaretypes)
    - [ModalDialog](#modaldialog)
        * [Dialog](#dialog)
        * [Close](#close)
    - [MultiSelect](#multiselect)
    - [Portal](#portal)
    - [Preloader](#preloader)
    - [RadioGroup](#radiogroup)
        * [RadioButton](#radiobutton)
    - [reducers]('#reducers')
        * [preserveState](#preservestate)
    - [Row](#row)
    - [rules](#rules)
        * [filterValues](#rulefiltervalue)
        * [fromClassifier](#rulefromclassifier)
        * [updateDate](#ruledate)
        * [custom](#rulecustom)
    - [RulesReactor](#rulesreactor)
        * [apply](#rulesreactorapply)
    - [TextField](#textfield)
    - [TooltipIcon](#tooltipicon)
    - [utils](#utils)
        * [composeReducers](#composereducers)
        * [createEmptyDoc](#createemptydoc)
        * [metaParser](#metaparser)
        * [removeClientIds](#removeclientids)
    - [Validators](#validators)
        * [isAlpha](#validatorisalpha)
        * [isNumeric](#validatorinumeric)
        * [isCyrillic](#validationiscyrillic)
        * [isLength](#validationislength)

- [Разработка](#development)
    - [Подготовка](#componentset)
    - [Код компонента](#componentcode)
    - [Стили компонента](#componentstyles)
    - [Тестирование](#componenttest)
    - [Документация](#componentdocumentation)
    - [Публикация в npm](#componentpublish)

- [Примеры](#examples)
    - [1. Создание формы](#formcreation)
        * [1.1 Создание правил полей формы](#rulesformcreation)
        * [1.2 Создание модели формы](#modelformcreation)
        * [1.3 Создание формы](#createformcreation)

    [Установка](#installation)
    ---
    ```bash
    npm i
    npm i react isomorphic-fetch
    ```

    [Компоненты](#components)
    ---
    ### [form](#form)
    * #### [Form: React.Component](#formcomponent)

        Базовый компонент формы
    * #### [connectForm(Form: React.Component, formName: string, model: Object, actions: Object): React.Component](#connectform)
        Подключение формы к хранилищу
        * `Form: React.Component` - компонент формы
        * `formName: string` - имя формы, под которым её данные будут хранится в хранилище
        * `model: Object` - модель формы
        * `actions: Object` - дополнительные действия формы (базовые добавляются по умолчанию)

        В компонент, который подключается к хранилищу, должны быть переданы обязательные параметры:
        * `model: Object` - модель полей формы
        * `submitHandler(data: Object, callback: Function): void` - обработчик для сабмита формы

        После подключения формы получает следующие `props`:
        * `update({ value: any, model: FieldModel}): ReduxAction` - обновление поля
        * `updateFromEvent({ target: Object, model: FieldModel}): ReduxAction` - обновление поля по событию интерфейса
        * `submit(): ReduxAction` - сабмит формы
        * `fields(): Object` - возвращает объект с полями и их данными

    * #### [createFormReducer(name: string): Function](#createformreducer)
        Создаёт редьюсер для формы
        * `name: string` - имя формы

    ### [AddButton](#addbutton)
    Кнопка с иконкой добавления.
    * `icon` - булевое значение

    ### [Breadcrumbs](#breadcrumbs)
    Хлебные крошки, навигация
    * `nodes: Array<Node>, Node {name: string, view: string}` - узлы навигации
    * `clickHandler: Function` - обработчик нажатия на узел
    * `linkCls: string` - дополнительный класс для узла

    ### [ButtonBasic](#buttonbasic)
    Базовый компонент кнопки .
    * `text`         - текст кнопки
    * `disabled`     - включение выключение кнопки
    * `className`    - дополнительный css-класс
    * `icon`         - иконка кнопки
    * `select`       - нажата ли кнопка по умолчанию
    * `clickHandler` - функция при нажатие на кнопку
    * `children`     - дополнительный css-класс
    * `value`        - значение кнопки

    ### [ButtonSelect](#buttonselect)
    Это кнопка с селектом, при клике выпадает список с возможными действиями.

    ### [ButtonLight](#buttonlight)
    Кнопка с прозрачным фоном.

    ### [ButtonLightWithIcon](#buttonLightwithicon)
    кнопка с иконкой и прозрачным фоном.
    * `className`    - дополнительный css-класс

    ### [ButtonSecondary](#buttonsecondary)
    кнопка c альтернативным цветом фона.

    ### [ButtonDropDown](#buttondropdown)
    Компонент кнопка с выпадающим списком.
    * `className`  - дополнительный css-класс
    * `listData`   - массив объектов для генерации списка
    * `heightList` - высота списка

    ### [Container](#container)
    Компонент создает контейнеры, из которых строится модальное окно
    * `className` - дополнительный набор классов
    * `type`      - тип контейнера
    * `children`  - содержимое контейнера

    ### [Counter](#counter)
    Компонент для подсчета элементов в штуках
    * `className` - дополнительный набор классов
    * `add` - обработчик нажатия кнопки увеличения значения
    * `remove` - обработчик нажатия кнопки уменьшения значения
    * `value` текущее значение

    ### [Column](#column)
    Компонент колонки для вёрстки блоков.
    * `span`       - размер колонки (от 1 до 12)
    * `className`  - дополнительный css-класс

    ### [CheckBox](#checkbox)
    Элемент с двумя состояниями
    *  `checked`        - определяет, должен ли элемент отображаться, как выбранный
    *  `focusHandler`   - функция, возникающего при наведении фокуса
    *  `blurHandler`    - функция , возникающего при удалении фокуса
    *  `changeHandler`  - функция изменения состояния элемента, срабатывает по клику

    ### [ComboBox](#combobox)
    Компонент с выпадающим списком множества состояний
    * `mouseDownHandler` - метод срабатывает при нажатии кнопки мыши на элементом
    * `mouseUpHandler`   - метод срабатывает при отпускании кнопки мыши с элемена
    * `clickHandler`     - метод срабатывает при выборе одного из состояний  списка
    * `focusHandler`     - метод срабатывает наведение мыши
    * `blurHandler`      - метожд срабатывает при нажатии мышью за пределами компонента , для закрытыя выпадающего списка
    * `className`        - дополнительный класс
    * `displayField`     - имя поля для отображение в выпадающем листе
    * `valueField`       - имя поля, которое должно быть идентификатором : настраиваемый идентификатор

    ### [Checkable](#checkable)
    Класс для создания checkbox и radio button.
    * `defaultValue`  - дефолтное значение
    * `checked`       - выбран ли переключатель
    * `focusHandler`  - функция при навидение
    * `blurHandler`   - функция при снятие навидения
    * `clickHandler`  - функция при клике
    * `additionalCls` - дополнительный класс
    * `type`          - тип отоброжения checkbox or radio

    ### [ClearButton](#clearbutton)
    Класс, создающий кнопку закрытия.
    * `clickHandler` - функция при клике
    * `classPref`    - префикс к базовому классу
    * `className`    - дополнительный класс

    ### [Close](#close)
    Класс, создающий кнопку закрытия модального окна
     * `clickHandler`        - Метод, вызываемый при клике по кнопке закрытия.
     * `className`           - Дополнительный к базовому набор классов.
     * `classPref = 'virtu'` - Префикс к базовому классу.

    ### [Dialog](#dialog)
    Класс, создающий отображаемую часть модального окна.
     * `clickCloseHandler`   - Метод, вызываемый при клике по кнопке закрытия.
     * `className`           - Дополнительный к базовому набор классов.
     * `classPref = 'virtu'` - Префикс к базовому классу.
     * `width`               - Ширина окна.
     * `height`              - Высота окна.

    ### [DateField](#datefield)
    Проверяет совпадение объектов по ключам
    *  `Object` - 1 - Первый объект.
    *  `Object` - 2 - Второй объект.
    *  `String` - keys - Список ключей

    ### [DatePeriod](#dateperiod)
    Класс для создания поля выбора диапазона дат
     * className      - дополнительный набор классов к полю.
     * locale         - Локализация.
     * fromDay        - Самая ранняя из возможных дат.
     * toDay          - Самая поздняя из возможных дат.
     * changeHandler  - Обработчик события onchange.
     * blurHandler    - Обработчик события onblur.

    ### [DropzoneUploader](#dropzoneuploader)
    Компонент для загрузки файлов (только HTML5)
    * `fetching: boolean` - файл загружается
    * `instructionsText: string` - текст инструкции для загрузки файлов
    * `uploadText: string` - текст при загрузке файла
    * `uploadError: bool` - ошибка загрузки
    * `errorText: string` - текст при ошибке загрузки
    * `uploadHandler: Function` - обработчик загрузки файлов
    * `className: string` - имя css-класса
    * `activeClassName: string` - имя css-класса в активном состоянии
    * `style: Object` - стиль компонента
    * `activeStyle: Object` - стиль компонента в активном состоянии

    ### [Filters](#filters)
    * #### [letters(prevValue: string, value: string):string](#filterletters)
        Пропускает только буквы
        * `prevValue: string` - предыдущее значение
        * `value: string` - текущее значение
    * #### [numbers(prevValue: string, value: string):string](#filternumbers)
        Пропускает только цифры
        * `prevValue: string` - предыдущее значение
        * `value: string` - текущее значение
    * #### [cyrillic(prevValue: string, value: string):string](#filtercyrillic)
        Пропускает только кириллицу, дефис и пробелы
        * `prevValue: string` - предыдущее значение
        * `value: string` - текущее значение
    * #### [noLongerThan(lenght: number):Function](#filternolongerthan)
        Не пропускает значения длиннее чем `length`
        * `length: number` - максимальная длина значения

    ### [Link](#link)
    Ссылка
    * `text: string` - текст ссылки
    * `href: string` - адрес для перехода
    * `clickHandler: Function` - обработчик клика

    ### [MultiSelect](#multiselect)
    Компонент мульти-выбора.
    * `text`         - заголовок кнопки
    * `className`    - дополнительный css-класс
    * `listData`     - массив объектов для генерации списка
    * `clickHandler` - функция при клике на элемент списка

    ### [middleware](#middleware)
    middleware для вызовов api
    * #### [applyMiddleware(middleware: Array<MiddleWare>, body: APIRequest | APIRequest}): APIRequest | APIResponse](#middlewareapplymiddleware)
        Применяте массив middleware к запросу или ответу API.Для того, чтобы middleware
        был использваон на конкретном запросе или ответе в их теле надо указать поле `middleware`, например:
        ```javascript
        {
            code: 200,
            result: { data },
            ...
            /*
             * В значениями массива являются любо названия методов middleware
             * или объект вида { name: 'имя метода middleware', args: ['массив аргументов для вызова метода (все, кроме первого - тела запроса или ответа)']}
             */
            middleware: [{name: 'normalize', args: ['Path.To.Document', 'other', 'args']}, 'persist']
        }
        ```
        * `middleware: {[key: string] : MiddleWare})` - словарь доступных middleware
    * #### [denormalize(request: APIRequest, pathToDoc: string | Array<string>): APIRequest](#middlewaredenormalize)
        Денормализует документ в теле запроса. Для денормализации необходимо передать мету:
        ```javascript
        {
            request.meta: {
                _objectType, // тип документа
                objectTypes // описание типов документов
            },
            data
            // остальные поля
        }
        ```
        * `request: APIRequest` - запрос метода api сервера
        * `pathToDoc: string | Array<string>` - путь к документу в теле запроса
    * #### [getByDescription(description: Array<MiddlewareDescription>): Array<Middleware>](#middlewarebydescription)
        Получает массив middleware по его описанию (см. [applyMiddleware](#middlewareapplymiddleware))
    * #### [normalize(response: APIResponse, pathToDoc: string | Array<string>): APIResponse](#middlewarenormalize)
        Нормализует данные для удобного представления в документе. Вместо документа возвращается объект вида:
        ```javascript
        {
            normalized, // нормализованный документ
            model,      // модель документа
            raw         // исходный вид документа
        }
        ```
        * `reponse: APIResponse` - ответ api сервера
        * `pathToDoc: string | Array<string>` - путь к документу в теле ответа
    * #### [types](#middlewaretypes)
        Доступные типы middleware, указываются в запросе или ответе
        * `normalize`
        * `denormalize`

    ### [ModalDialog](#modaldialog)
    Компонент для создания модального окна
     * `props`              - Свойства модального окна.
     * `clickCloseHandler`  - Метод, вызываемый при клике по кнопке закрытия.
     * `className`          - Дополнительный к базовому набор классов.
     * `classPref = 'virtu'`- Префикс к базовому классу.
     * `width`              - Ширина окна.
     * `height`             - Высота окна.
     * `mountPoint`         - id элемента, в который должно монтироваться окно.

    ### [Preloader](#preloader)
    Создает прелоадер
     * `className`       - дополнительный класс для прелоадера.

    ### [Portal](#portal)
    Класс, монтирующий модальное окно в заданный элемент
    * `Element` - id элемента, или сам элемент, в который должно монтироваться окно.

    ### [RadioButton](#radiobutton)
    Создает radio button.
    * `value`  - значение  RadioButton

    ### [RadioGroup](#radiogroup)
    Класс, создающий группу для radio buttons.
    * `children`  - Набор radio buttons.
    * `className` - Дополнительный к базовому набор классов.

    ### [RadioButton](#radiobutton)
    * `value`        - Значение, соответсвующее элементу.
    * `checked`      - Определяет, должен ли элемент отображаться, как выбранный.
    * `focusHandler` - Обработчик события, возникающего при наведении фокуса.
    * `blurHandler`  - Обработчик события, возникающего при удалении фокуса.
    * `clickHandler` - Обработчик изменения состояния элемента, срабатывает по клику.
    * `additionalCls`- Набор дополнительных классов.

    ### [reducers](#reducers)
    * #### [preserveState](#preservestate)
        Редьюсер, позволяющий сохранять стек из предыдущих состояний и
        восстанавливать состояние из него
        * `createReducer(name: string): Function` - создаёт редьюсер
            * `name: string` - имя состояния в хранилище
        * `createActions(name: string): {preserve: Function, restore: Function, clear: Function, reset: Function}` - создаёт объект с действиями над состоянием
            * `name: string` - имя состояния в хранилище
        ```javascript
        import {reducers} from 'virtu-react-ui';

        /**
         * Объект, содержащий доступные действия для
         * управления сохранёнными состояниями
         * @property {Function} preserve Сохранение текущего состояния
         * @property {Function} restore  Воставнавливает последнее сохранённое состояние
         * @property {Function} clear    Удаляет все сохранённые состояния
         * @property {Function} reset    Сбрасывает на начальное состояние
         */
        const actions = reducers.preserveState.createActions('MyState');
        ```
    ### [Row](#row)
    Компонент строки для вёрстки блоков
    * `className`  - дополнительный css-класс
    * `rightToLeft`- располагает элементы в строке справа на лево

    ### [TextField](#textfield)
    Класс, создающий текстовое поле
     * `className`       - дополнительный набор классов к полю.
     * `name`            - Аттрибут name.
     * `placeholder`     - Аттрибут placeholder.
     * `defaultValue`    - Начальный текст, отображаемый при появлении поля.
     * `value`           - Текст, который можно править только через props.
     * `width`           - Ширина поля.
     * `pfocused`        - Если true, на поле фокус.
     * `mask`            - Маска.
     * `placeholderChar` - Символ плейсхолдера для маски
     * `children`        - Дополнительные компоненты, имеющие отношение к полю, добавляются после input.
     * `opchangeHandler` - Обработчик события onchange.
     * `opfocusHandler`  - Обработчик события onfocus.
     * `opblurHandler`   - Обработчик события onblur.
     * `disabled`        - Доступность поля.
     * `type: 'search'`  - Тип поля.

    ### [TooltipIcon](#tooltipicon)
    Иконка с подсказкой
    * `message: string` - сообщение подсказки
    * `position: 'top'|'bottom'|'left'|'right'` - положение подсказки
    * `type: 'dark'|'success'|'warning'|'error'|'info'|'light'` - типа подсказки

    ### [utils](#utils)
    Утилиты
    * #### [composeReducers(...reducers: Array<Function>): Function](#composereducers)
        Объединяет несколько редьюсеров в одну функцию
        * `...reducers: Array<Function>` - массив функций редьюсеров
    * #### [createEmptyDoc(docType: Guid, model: Model): Object](#createemptydoc)
        Создаёт пустой документ на основе модели. Идентификатор генерится на клиенте,
        а также добавляется флаг `__phantom: true`
        * `docType: Guid` - идентификатор типа документа
        * - `model: Model` - модель документа
    * #### [metaParser(rootObjectTypeId: string, objectTypes: Object): Object](#metaparser)
        Создаёт модель документа на основе его меты
        * `rootObjectTypeId: string` - идентифтикатор корневого типа документа
        * `objectTypes: Object` - мета документа
    * #### [removeClientIds(doc: Object): Object](#removeclientids)
        Удаляет идентификаторы, созданные на клиенте и флаг `__phantom: true`
        * `doc: Object` - документ, созданный на клиенте

    ### [rules](#rules)
    Правила для полей формы
    * #### [filterValues(classifierName: string, key: string , target: string): Function](#rulefiltervalue)
        Фильтрует записи справочника `classifierName` по полю `key` и записывает в поле формы `target`.
        Значение поля `key` берётся из поля, к котрому было добавлено правило.
        * `classifierName: string` - имя справочника
        * `key: string` - поле по которму будет фильтрация
        * `target: string` - поле для которго будут фильтроваться записи
    * #### [fromClassifier(classifierName: string, idField: string, valueField: string, target: string): Function](#rulefromclassifier)
        Получает значение поля `valueField` из справочника `classifierName` найденное по значению поля `idfield` и
        записывается в поле `target`
        * `classifierName: string` - имя справочника
        * `idField: string` - ключ поля для идентификации записи
        * `valueField: string` - ключ поля со значением
        * `target: string` - поле формы для записи значения
    * #### [updateDate(target: string, amount: number, period: string?, modifier: number?, modifierPeriod: string?): Function](#ruledate)
        Создаёт правило для поле с датой. Изменяет значение поля `target` в зависимости от значения поля к которму прикреплено правило и смещения и его модификатроов
        * `target: string` - имя зависимого поля
        * `amount=0` - смещение даты
        * `period='y'` - период смещения ('y', 'M', 'd')
        * `modifier=0` - модификатор смещения
        * `modifierPeriod=d` - период модификатора смещения ('y', 'M', 'd')
    * #### [custom(handler: Function): Function](#rulecustom)
        Создаёт правило с логикой, определяемой в функции `handler`
        * `handler(value: any, fields: Object): Object` - обработчик для правила, возвращает обновлённые данные формы (`fields` - исходные данные полей формы).
    ### [RulesReactor(classifiers: Array<Object>, profile: Object): Object](#rulesreactor)
    Создаёт объект с методом для применения правил к полям формы
    * #### [apply(rule: Function, fields: Object, value: *): Object](#rulesreactorapply)
        Применяет правило к полю
        * `rule: Function` - функция правила
        * `fields: Object` - данные полей формы
        * `value: *` - значение поля
    ### [validators](#validators)
    * [isAlpha(locale: string, errorMsg: string): Function](#validatorisalpha)
        Значение может содержать только буквы
        * `locale="ru-RU"` - строка локализации
        * `errorMsg = "Поле должно содержать только буквы"` - сообщение об ошибке
    * [isNumeric(errorMsg: string)](#validatorinumeric)
        Значение может содержать только цифры
        * `errorMsg = "Поле должно содержать только буквы"` - сообщение об ошибке

    * [isCyrillic(errorMsg: string): Function](#validationiscyrillic)
        Значение может содержать только кириллицу, дефис или пробелы
        * `errorMsg="Поле может содержать только кириллицу, пробелы и дефис" - сообщение об ошибке
    * [isLength(length: number, errorMsg: string): Function](#validationislength)
        Длина значения равна `length`
        * `length: string` - максимальная длина
        * `errorMsg="Длина значения поля должна быть равна ${length}"`

    [Разработка](#development)
    ---

    [1. Подготовка](#componentset)
    Перед созданием компонента *обязательно* создаётся отдельная ветка в репозитории c именем компонента, например, `MyAwesomeComponent`.

    [2. Код компонента](#componentcode)

    Для добавлени новго компонента создаётся отдельная папка с таким же именем как у компонента, например `MyAwesomeComponent`. Внутри папки создаётся файил `MyAwesomeComponent.js` и `index.js`:
    ```javascript
    // пример файла index.js
    export default from './MyAwesomeComponent';
    ```
    В случае когда с компонентом необходимо экспортировать дополнительные методы (например, [полдключение формы к хранилищу](#connectform)) нужно экспортировать именованые компоненты:
    ```javascript
    export default as MyAwesomeComponent        from './MyAwesomeComponent';
    export default as higherOrderFunctionHelper from './higherOrderFunctionHelper'
    ```

    Созданный компонент необходимо добавать в список экспортируемых в файле `src/index.js`.

    [3. Стили компонента](#componentstyles)
    Все стили компонентов складываются в папку `src/styles/components/my-awesome-component`. В паке создаётся файл `_all.scss` и остальные файлы стилей. Имена файлов должны начинаться с подчёркивания и соответсвовать имени класса внутри файла.

    Пример файла `_all.scss`:
    ```css
    @import "mys-awesome-component-header";
    @import "mys-awesome-component-content";
    @import "my-awesome-component-footer";
    ```

    Примерная структура папки для компонента:
    ```
    .my-awesome-component
    +-- _all.scss
    +-- _my-awesome-component-header;
    +-- _my-awesome-component-content;
    +-- _my-awesome-component-footer;
    ```
    Также необходимо добавить этот компонент в файл `src/styles/components/_all.scss`:
    ```css
    @import "my-aweosme-component/all";
    ```

    Все базовые переменнные хранятся в файле `src/styles/_config.scss`. *ВСЕ* значения, которые являются общими хотя бы для 2-х компонентов необходимо выносить сюда. Все размеры, цвета и шрифты в конфиге помечать как значения по умолчанию, чтобы их можно было переопределить в темах:
    ```css
    $field-border-color: red !default;
    ```

    ### [4. Тестирование](#componenttest)
    Для проверки работы коспонентов и для их разработки используется файл `src/components/App.js`

    ### [5. Документация](#componentdocumentation)
    Код компонента доложен быть задокуеннмтирован с помощью [jsdoc](http://usejsdoc.org/).
    Также необходимо добавить опписание компонента в раздел [Компоненты](#components).

    ### [5. Публикация в npm](#componentpublish)
    Для работы с локальным npm-сервером необходимо указать npm адрес для поиска пакетов
    ```bash
    npm set registry http://10.10.10.49:4873
    npm adduser --registry http://10.10.10.49:4873
    ```
    После этого необходимо изменить в файле `package.json` версию пакета в соответсвии с [semver](http://semver.org/).

    Для публикации нужно выполнить
    ```bash
    npm publish
    ```

    [Примеры](#examples)
    ---
    #### [1. Создание формы](#formcreation)
    Создание редьюсера:
    ```javascript
    import { form } from 'virtu-react-ui';

    const baseFormReducer = form.createFormReducer('TestProduct');

    const initialState = { classifiers: {}, profile: {} };

    export default function testProduct(state = initialState, action) {
        // базовым редьюсером обрабатываются действия обновления, очистки, сабмита и валидации
        const processedByForm = baseFormReducer(state, action);
        const { payload } = action;

        switch (action.type) {
            // для продуктов необходимо инициализировать справочники и профиль
            case 'TEST_PRODUCT_INIT':
                return { ...state, classifiers: payload.classifiers, profile: payload: profile };
            // дальше идут действия специфические для каждой конктретной формы
            case 'TEST_PRODUCT_DO_SOMETHING':
                return { ...processedByForm, somethingDone: payload.value };
        }
        return processedByForm;
    }
    ```
    #### [1.1 Создание правил полей формы](#rulesformcreation)
    ```javascript
    import { rules } from 'virtu-react-ui';
    import { path }  from 'ramda';

    const { isAlpha, isNumeric }  = validators;
    const { custom, filterValues } = rulesReactor;

    const getValue = form => name => path([name, 'value'])(form);

    const updateFullName = field => rules.custom((value, form) => {
        const get = getValue(form);
        const { firstName, secondName, patronymic} = ['firstName', 'secondName', 'patronymic']
            .reduce((prev, curr) => {
                return {
                    ...prev,
                    [curr]: curr === field ? value : get(curr)
                };
            }, {})

        return {
            ...form,
            fullName: {
                value: `${firstName} ${secondName} ${patronymic}`
            }
        };
    });

    const updateInitials = field => rules.custom((value, form) => {
        const get = getValue(form);
        const firstName = field === 'firstName' ? value : get('firstName');
        const patronymic = field === 'patronymic' ? value : get('patronymic');

        return {
            ...form,
            intitials: {
                value: (firstName && patronymic) ?
                    `${firstName[0].toUpperCase()}. ${patronymic[0].toUpperCase()}.`:
                    ''
            }
        };
    });

    /**
     * Создание правила для зависимых справочников
     */
    const updateRisks = rules.filterValues('Risks', 'programId', 'risks');

    export { updateRisks, updateFullName, updateInitials };

    ```
    #### [1.2 Создание модели формы:](#modelformcreation)
    ```javascript
    import { validators, filters }                      from 'virtu-react-ui';
    import { updateRisks, updateFullName, updateInitials } from '../rules';

    const applyToField = (field, rules) => rules.map(r => r(field));

    /**
     * Модель поля формы
     * @typedef {Object}        FormField
     * @param {string}          name           имя поля
     * @param {boolean}         required       поле необходимо для заполнения
     * @param {Function}        validator      валидатор для поля
     * @param {Array<Function>} rules          массив правил для поля
     * @param {boolean}         validateOnBlur валидировать поле после потери фокуса
     * @param {*}               defaultValue   значение по умолчанию
     * @param {string}          classifier     имя справочника для поля
     * @param {Function}        filter         фильтр для значений поля
     */

    const { isCyrillic, isNumeric }  = validators;
    const { applyToField } = rulesReactor;

    export const user = {
        firstName: {
            name: 'firstName',
            required: true,
            validator: isCyrillic(),
            rules: applyToField('firstName', [updateFullName, updateInitials])
        },

        secondName: {
            name: 'secondName',
            validateOnBlur: false,
            rules: applyToField('secondName', [updateFullName])
        },

        patronymic: {
            name: 'patronymic',
            validateOnBlur: false,
            rules: applyToField('patronymic', [updateFullName, updateInitials])
        },

        summ: {
            name: 'summ',
            defaultValue: '500000g',
            validator: isNumeric(),
            filter: filters.numbers
        },

        fullName: {
            name: 'fullName'
        },

        intitials: {
            name: 'intitials'
        },

        programs: {
            name: 'programs',
            classifier: 'Programs',
            rulels: [updateRisks]
        },

        risks: {
            name: 'risks',
            classifier: 'Risks'
        }
    };
    ```
    #### [1.3 Создание формы](#createformcreation)
    ```javascript
    import React, {PropTypes}   from 'react';
    import { form, TextField, Row, Column, ButtonLight, ComboBox } from 'virtu-react-ui';
    import {connect}            from 'react-redux';
    import {bindActionCreators} from 'redux';
    import { user }             from './models'; // модель формы
    import * as testProductActions from './actions'; // специфические действия для данной формы

    function TestProduct(props) {
        const update = props.updateFromEvent;
        const { Form } = form;
        const { model, fields } = props;
        const { firstName, secondName, patronymic, intitials, fullName, programs, risks, summ } = fields;
        const errorStyle = { backgroundColor: 'red' };
        const {submit} = props;

        return (
            <Form>
                <Row>
                    <Column span={3}>
                        <TextField
                            model={model.secondName}
                            value={secondName.value}
                            style={secondName.valid ? {} : errorStyle}
                            changeHandler={update}
                            placeholder="Фамилия"
                        />
                    </Column>
                    <Column span={3}>
                        <TextField
                            model={model.firstName}
                            value={firstName.value}
                            style={firstName.valid ? {} : errorStyle}
                            changeHandler={update}
                            placeholder="Имя"
                        />
                    </Column>
                    <Column span={3}>
                        <TextField
                            model={model.patronymic}
                            value={patronymic.value}
                            style={patronymic.valid ? {} : errorStyle}
                            changeHandler={update}
                            placeholder="Отчество"
                        />
                    </Column>
                </Row>
                <Row>
                    <Column span={3}>
                        <TextField
                            model={model.fullName}
                            value={fullName.value}
                            style={fullName.valid ? {} : errorStyle}
                            changeHandler={update}
                            placeholder="Полное имя"
                        />
                    </Column>
                    <Column span={3}>
                        <TextField
                            model={model.intitials}
                            value={intitials.value}
                            style={intitials.valid ? {} : errorStyle}
                            changeHandler={update}
                            placeholder="Инициалы"
                        />
                    </Column>
                </Row>
                <Row>
                    <Column span={3}>
                        <TextField
                            model={model.summ}
                            value={summ.value}
                            style={summ.valid ? {} : errorStyle}
                            changeHandler={update}
                            placeholder="Сумма"
                        />
                    </Column>
                    <Column span={3}>
                        <ComboBox
                            model={model.programs}
                            value={programs.value}
                            changeHandler={update}
                            dataList={programs.data}
                            placeholder="Программы"
                        />
                    </Column>
                    <Column span={3}>
                        <ComboBox
                            model={model.risks}
                            value={risks.value}
                            changeHandler={update}
                            dataList={risks.data}
                            placeholder="Риски"
                        />
                    </Column>
                </Row>
                <Row>
                    <Column span={3}>
                        <ButtonLight text="submit" clickHandler={submit} />
                    </Column>
                </Row>
            </Form>
        );
    }

export default form.connectForm(TestProduct, 'TestProduct', model, testProductActions);
