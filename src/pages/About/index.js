import React from 'react';

import me from '../../assets/images/max.png';

import Services from '../../pages/Services';

import { 
    AboutSection, Container, Title, AboutContents,
    Imgs, Image, Description, Name, Ocupation, Text,
    ButtonCV
} from './styles';

export default function About() {
    return (
        <>
            <AboutSection id="about">
                <Container>
                    <Title>About me</Title>

                    <AboutContents>
                        <Imgs>
                            <Image 
                                src={me}
                                alt="me"
                            />
                        </Imgs>

                        <Description>
                            <Name>Olá, eu sou Max Dickinson</Name>
                            <Ocupation>Desenvolvedor FullStack e estudante de Engenharia de Software</Ocupation>
                            <Text>
                                Apaixonado por tecnologia, procuro estudar mais e mais a cada dia para resolver problemas e programar soluções nas tecnologias mais atuais do mercado. Atualmente graduando em Engenharia de Software pela Universidade Federal do Ceará, e estudando a stack JavaScript com: React Native, React.js e Node.js. Possuo gostos peculiares por desenvolvimento de jogos, web, mobile e inteligência artificial, porém estou aberto a qualquer área da programação.
                            </Text>
                            
                            <Text>
                                <ButtonCV href="https://github.com/maxdickinsondev/PORTFOLIO-REACTJS/files/4712910/Max-Dickinson-CV.pdf">Download CV</ButtonCV>
                            </Text>
                        </Description>
                    </AboutContents>
                </Container>
            </AboutSection>

            <Services />
        </>
    );
}