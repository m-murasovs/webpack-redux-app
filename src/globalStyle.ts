import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Tahoma', 'Arial', sans-serif;
        line-height: 16px;

        h1 {
            font-size: 2.6rem;
        }

        h2 {
            font-size: 2.3rem;
        }
        
        h3 {
            font-size: 1.9rem;
        }

        h4 {
            font-size: 1.6rem;
        }

        h5 {
            font-size: 1.3rem;
        }

        button {
            font-size: 1rem;
            height: 2rem;
            border-radius: 0.2rem;
            border: solid 0.5px lightgray;
            box-shadow: 0.1rem 0.1rem 0.3rem rgba(0,0,0,0.3);
            font-size: 1rem;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export default GlobalStyle;