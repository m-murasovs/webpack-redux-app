import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 8rem 0 0 0;
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

        section {
            text-align: left;
        }

        form {
            display: grid;

            label, button {
                margin: 1rem 0;
            }

            button {
                background: #bffcc6;
            }
        }

        button, input, form, select, textarea {
            border-radius: 0.2rem;
        }

        input, select, textarea {
            border: solid 1px rgba(0, 0, 0, 0.3);
            line-height: 2;
            padding: 0.5rem;
        }

        button {
            font-size: 1rem;
            height: 2rem;
            border: solid 0.5px lightgray;
            box-shadow: 0.1rem 0.1rem 0.3rem rgba(0,0,0,0.3);
            font-size: 1rem;

            &:hover {
                cursor: pointer;
            }
        }

        .App {
            text-align: center;
        }

        .card {
            padding: 1rem 2rem;
            box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
            border-radius: 0.5rem;
            margin: 1rem;
            text-align: left;
        }
    }
`;

export default GlobalStyle;
