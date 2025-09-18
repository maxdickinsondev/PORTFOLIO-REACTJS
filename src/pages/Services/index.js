import React from "react";
import "font-awesome/css/font-awesome.min.css";

import {
  ServicesTag,
  Container,
  Title,
  ServicesContent,
  Card,
  Box,
  Icon,
  H3,
  Paragraph,
} from "./styles";

import Skills from "../../pages/Skills";

export default function Services() {
  return (
    <>
      <ServicesTag id="services">
        <Container>
          <Title>Serviços</Title>

          <ServicesContent>
            <Card>
              <Box>
                <Icon>
                  <span className="fa fa-laptop"></span>
                </Icon>

                <H3>Desenvolvimento Web</H3>
                <Paragraph>
                  Desenvolvo sites responsivos e com um bom design, todos feitos
                  sob medida para a sua empresa exibir seus produtos e conteúdo.
                </Paragraph>
              </Box>
            </Card>

            <Card>
              <Box>
                <Icon>
                  <span className="fa fa-mobile"></span>
                </Icon>

                <H3>Desenvolvimento Mobile</H3>
                <Paragraph>
                  Desenvolvo aplicações leves para os mais diversos tipos de
                  necessidades, com uma boa aparência para o usuário e de fácil
                  usabilidade.
                </Paragraph>
              </Box>
            </Card>

            <Card>
              <Box>
                <Icon>
                  <span className="fa fa-code"></span>
                </Icon>

                <H3>Código Limpo</H3>
                <Paragraph>
                  Código organizado e de fácil entendimento, utilizando padrões
                  de projeto que facilitam o desenvolvimento e a manutenção.
                </Paragraph>
              </Box>
            </Card>
          </ServicesContent>
        </Container>
      </ServicesTag>

      <Skills />
    </>
  );
}
