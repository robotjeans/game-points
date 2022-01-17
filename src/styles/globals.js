import { css } from '../utils/styled';

const globals = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
  }
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
  }
  body {
    width: 100%;
    overflow-x: hidden;
    background-color: #f3f5fa;
    padding: 0;
    font-size: 16px;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export default globals;
