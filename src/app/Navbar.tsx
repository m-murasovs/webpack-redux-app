import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    position: fixed;
    display: flex;
    top: 0;
    box-shadow: 0 0.2rem 1rem 0 lightgray;
    padding: 0 2rem;
    height: 6rem;
    width: 100%;
    background: white;

    section {
        display: flex;
        align-items: center;
        width: 100%;

        .Nav-content {
            margin-left: 4rem;
        }
    }
`;

export const Navbar = () => {
    return (
        <Nav>
            <section>
                <h1>Sick [re]dux</h1>
                <div className="Nav-content">
                    <Link className="Nav-link" to="/">Posts</Link>
                </div>
            </section>
        </Nav>
    )
}
