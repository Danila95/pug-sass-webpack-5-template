# pug-sass-webpack-5-template

- Это шаблон для сборщика проектов webpack 5.60.0
- It is template for projects webpack 5.60.0 (for getting start learn webpack)

<div>
	<a href="https://webpack.js.org"><img width="200" heigth="200" src="https://webpack.js.org/assets/icon-square-big.svg"></a>
	<a href="https://sass-lang.com/"><img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" height="150"></a>
	<a href="https://pugjs.org/api/getting-started.html"><img src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg" height="200"></a>
	<a href="https://babeljs.io/"><img src="https://cdn.worldvectorlogo.com/logos/babel-10.svg" height="200"></a>
</div>

Это моя обновленная версия моего предыдущего сборщика проектов webpack. В данной версия я перешел на 5 версию webpack.
Предыдущая версия: https://github.com/Danila95/pug-sass-webpack-template

## Как пользоваться

после клонирования моего шаблона на ваш компьютер не забудьте в консоле прописать команду (в зависимости, каким пакетным менеджером вы пользуетесь):

- npm: `npm install`
- yarn: `yarn install`

## Getting Started

enter command `npm install` or `yarn install` (if you use yarn) to install dependencies.

## Commands

- `npm run start` - start webpack serve.
- `npm run watch` - start webpack server with key --watch.
- `npm run build` - build static files in `prod` directory in mode production.
- `npm run dev` - build static files in `prod` directory in mode development.
- `npm run dash-start` - start webpack serve with awesome plagin-interface webpack-dashboard.
- `npm run prop` - show some details of the current computer.
- `npm run stats` - run plagin webpack-bundle-analyzer.

  npm-check-updates - это утилита, которая автоматически настраивает package.json, которая подтягивает последнии версии всех зависимостей.

- https://www.npmjs.org/package/npm-check-updates

`npm install -g npm-check-updates` - install plagin npm-check-updates

`ncu` - Show any new dependencies for the project in the current directory

`ncu -u` - Run ncu -u to upgrade package.json

`npm outdated` - show more information about latest versions

## Если занят порт

`netstat -ano | findstr :<PORT>` - Замените <PORT> с номером порта, который вы хотите использовать
`taskkill /PID <PID> /F` - Команда убивает процесс
https://coderoad.ru/39632667/%D0%9A%D0%B0%D0%BA-%D1%8F-%D0%BC%D0%BE%D0%B3%D1%83-%D1%83%D0%B1%D0%B8%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D0%B2-%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B5%D0%B5-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8E%D1%89%D0%B8%D0%B9-%D0%BF%D0%BE%D1%80%D1%82-%D0%BD%D0%B0-localhost-%D0%B2

## БОНУС! плагин webpack-dashboard

Этот плагин превращает интерфейс вашей консоли в конфетку)

 <img src="https://camo.githubusercontent.com/168acfe4997e36655568a8ae6a6c08eb65f25073a58cf560aeeae1eb91d3fcc8/687474703a2f2f692e696d6775722e636f6d2f714c3664584a642e706e67">
