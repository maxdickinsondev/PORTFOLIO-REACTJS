import React from 'react';

import About from '../../pages/About';

import { HomeTag, Container, HomeText, Name, Skill } from './styles';

export default function Home() {
    return (
        <>
            <HomeTag id="home">
                <Container>
                    <HomeText>
                        <Name>Olá, eu sou Max Dickinson</Name>
                        <Skill>Fullstack Developer</Skill>
                    </HomeText>
                </Container>
            </HomeTag>

            <About />
        </>
    );
}