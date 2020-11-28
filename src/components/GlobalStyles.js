import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
      width: 8px;
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: #dad7d7;
  }
`;