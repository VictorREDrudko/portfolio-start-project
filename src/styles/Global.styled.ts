import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  /* Зануляем отступы */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Crimson Text", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.font};
    line-height: 1.2;
  }

  /* Убираем подчеркивания для ссылок */
  a {
    text-decoration: none;
    color: ${Theme.colors.font}
  }

  /* Для списков убираем маркеры */
  ul {
    list-style: none;
  }

  /* Для кнопок убираем серый background */
  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${Theme.colors.font};
    width: 150px;
    height: 32px;
    font-family: "Crimson Text", sans-serif;
  }

  /* Отступы в секциях */
  section {
    padding: 90px 0;
  }

  /* Задаем цвет фона для четных и не четных секций */
  section:nth-of-type(odd) {
    background-color: ${Theme.colors.mainBg};
  }

  section:nth-of-type(even) {
    background-color: ${Theme.colors.secondBg};
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    color: ${Theme.colors.textColor};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${Theme.colors.textColor};
    line-height: 1.4;
  }


`