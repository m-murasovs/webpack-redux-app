import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    top: 0;
    box-shadow: 0 0.2rem 1rem 0 lightgray;
    padding: 0 2rem;
    height: 6rem;
    width: 100%;
    background: white;
`;

export const Navbar = () => {
    return (
        <Nav>
            <section>
                <h1>Sick [re]dux</h1>
                <div className="nav-content">
                    <div className="nav-link"></div>
                </div>
            </section>
        </Nav>
    )
}