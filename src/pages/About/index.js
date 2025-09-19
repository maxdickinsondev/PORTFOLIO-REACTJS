import React from "react";

import me from "../../assets/images/max.png";

import Services from "../../pages/Services";

import {
  AboutSection,
  Container,
  Title,
  AboutContents,
  Imgs,
  Image,
  Description,
  Name,
  Ocupation,
  Text,
  ButtonCV,
} from "./styles";

export default function About() {
  return (
    <>
      <AboutSection id="about">
        <Container>
          <Title>Sobre</Title>

          <AboutContents>
            <Imgs>
              <Image src={me} alt="me" />
            </Imgs>

            <Description>
              <Name>Olá, eu sou Max Dickinson</Name>
              <Ocupation>Desenvolvedor Web e Engenheiro de Software</Ocupation>
              <Text>
                Sou um desenvolvedor front-end apaixonado por desenvolver
                sistemas e soluções para os usuários. Minha jornada profissional
                tem sido guiada pela busca incessante, pela excelência técnica e
                pela entrega de soluções que não apenas atendem, mas superam as
                expectativas dos usuários. Desde a concepção até a
                implementação, estou comprometido em criar produtos que não só
                impressionam visualmente, mas também oferecem desempenho e
                usabilidade excepcionais. Estou sempre em busca de desafios
                estimulantes que me permitam expandir meu conhecimento e
                aprimorar minhas habilidades. Se você está procurando um
                profissional comprometido, apaixonado e altamente competente
                para integrar sua equipe de desenvolvimento front-end, estou
                pronto para contribuir com meu talento e experiência. Vamos
                criar algo incrível juntos!
              </Text>

              <Text>
                <ButtonCV href="https://github.com/user-attachments/files/22428951/Max_Dickinson_CV_2025.pdf">
                  Baixar CV
                </ButtonCV>
              </Text>
            </Description>
          </AboutContents>
        </Container>
      </AboutSection>

      <Services />
    </>
  );
}
