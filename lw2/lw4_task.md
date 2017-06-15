# Лабораторная работа №4. Язык программирования TypeScript.


## Задание

1. Переписать исходный код приложения лабораторной работы №3 на [TypeScript](https://www.typescriptlang.org/docs/tutorial.html). `compilerOptions`: `module = "system"`, `target = "es5"`, `strict = true`.

2. Вместо eslint нужно использовать tslint, набор правил - **tslint:recommended**.


## Нефункциональные требования

* Каждый класс и интерфейс должен быть расположен в отдельном файле
* Классы не должны содержать публичных членов данных
* Репозиторий не должен содержать кода сторонних библиотек, только их описание в **package.json**


## Ссылки

* [Модуль grunt-ts](https://www.npmjs.com/package/grunt-ts)
* [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
* [Опции компилятора TypeScript](https://www.typescriptlang.org/docs/handbook/compiler-options.html)


## Требования по процессу

1. Код должен находиться в отдельной ветке, отпочкованной от ветки `lw2` со слитыми по результатам pull request'а второй лабораторной изменениями, в директории `/lw2/<фамилия>_<имя>/`
2. На каждый пункт задания должен приходиться как минимум один коммит
3. После завершения работы сделать pull request вашей ветки в `wrager/lw2` с заголовком `<фамилия> <имя> lw4`