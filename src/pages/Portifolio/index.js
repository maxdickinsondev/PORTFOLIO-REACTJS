import React from "react";

import {
  PortfolioTag,
  Container,
  Title,
  Content,
  Card,
  Box,
  H3,
  H4,
  Image,
} from "./styles";

import Contact from "../../pages/Contact";

export default function Portfolio() {
  return (
    <>
      <PortfolioTag id="portfolio">
        <Container>
          <Title>Portfólio</Title>

          <Content>
            <Card>
              <Box>
                <H3>FilmesMax</H3>
                <H4>Aplicação Web</H4>
                <Image
                  src={require("../../assets/images/portfolio1.png")}
                  alt="portifolio1"
                />
              </Box>
            </Card>

            <Card>
              <Box>
                <H3>Git API</H3>
                <H4>Aplicação Web</H4>
                <Image
                  src={require("../../assets/images/portfolio2.png")}
                  alt="portifolio2"
                />
              </Box>
            </Card>

            <Card>
              <Box>
                <H3>Be The Hero</H3>
                <H4>Aplicação Web</H4>
                <Image
                  src={require("../../assets/images/portfolio3.png")}
                  alt="portifolio3"
                />
              </Box>
            </Card>

            <Card>
              <Box>
                <H3>FilmesMax</H3>
                <H4>Aplicação Mobile</H4>
                <Image
                  src={require("../../assets/images/portfolio4.png")}
                  alt="portifolio4"
                />
              </Box>
            </Card>

            <Card>
              <Box>
                <H3>Git API</H3>
                <H4>Aplicação Mobile</H4>
                <Image
                  src={require("../../assets/images/portfolio5.png")}
                  alt="portifolio5"
                />
              </Box>
            </Card>

            <Card>
              <Box>
                <H3>SeriesMax</H3>
                <H4>Aplicação Mobile</H4>
                <Image
                  src={require("../../assets/images/portfolio6.png")}
                  alt="portifolio6"
                />
              </Box>
            </Card>
          </Content>
        </Container>
      </PortfolioTag>

      <Contact />
    </>
  );
}
