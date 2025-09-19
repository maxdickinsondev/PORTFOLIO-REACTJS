import React from "react";

import {
  ContactTag,
  Container,
  Title,
  ContactContent,
  ButtonSubmit,
} from "./styles";

import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <ContactTag id="contact">
        <Container>
          <Title>Contato</Title>

          <ContactContent>
            <ButtonSubmit href="mailto:max.dickinson.dev@gmail.com">
              Enviar mensagem
            </ButtonSubmit>
          </ContactContent>
        </Container>
      </ContactTag>

      <Footer />
    </>
  );
}
