import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .btn__group{
      margin: 2rem;
  }

  .btn {
      background: white;
      border: 1px solid lightgray;
      padding: 1rem;
      cursor: pointer;
      &:hover {
          background: rgba(138, 131, 131, 0.2);
      }
      &:active {
        background: rgba(138, 131, 131);
      }
  }

  .color-rock {
    color: rgb(79, 30, 30);
  }
  .rock {
    background-color: rgb(148, 81, 81);
  }

  .color-ghost {
    color: rgb(138, 131, 131);
  }
  .ghost {
    background-color: rgb(247, 247, 247);
  }

  .color-electric {
    color: rgb(181, 181, 13);
  }
  .electric {
    background-color: rgb(255, 255, 161);
  }

  .color-bug {
    color: #B8860B;
  }
  .bug {
    background-color: #F6D6A7;
  }

  .color-poison {
    color: violet;
  }
  .poison {
    background-color: rgba(224,167,246, 0.6)
  }

  .color-normal {
    color: gray;
  }
  .normal {
    background-color: #F4F4F4;
  }

  
  .color-fairy {
    color: deeppink;
  }
  .fairy {
    background-color: rgba(255, 192, 203, 0.863);
  }

  .color-fire{
    color: tomato;
  }
  .fire {
    background-color: #FBE3DF;
  }

  .color-grass {
    color: green;
  }
  .grass {
    background-color:#E2F9E1;
  }

  .color-water {
    color: #000099;
  }
  .water {
    background-color:#E0F1FD;
  }
`

export const theme = {
  colors: {
    primary: '#0070f3',
  },
}