import React from 'react';

import { 
    ContactTag, Container, Title, ContactContent, ButtonSubmit
} from './styles';

import Footer from '../../components/Footer';

export default function Contact() {
    return (
        <>
            <ContactTag id="contact">
                <Container>
                    <Title>Contact Me</Title>

                    <ContactContent>
                        <ButtonSubmit href="mailto:maxsantistadickinson@gmail.com">Send Message</ButtonSubmit>
                    </ContactContent>
                </Container>
            </ContactTag>

            <Footer />
        </>
    );
}