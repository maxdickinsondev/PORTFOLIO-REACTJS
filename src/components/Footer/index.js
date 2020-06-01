import React from 'react';

import {  
    FooterTag, Container, FooterContent, Box, 
    Icon, H4, Paragraph, Social
} from './styles';

export default function Footer() {
    return (
        <FooterTag>
            <Container>
                <FooterContent>
                    <Box>
                        <Icon>
                            <span className="fa fa-phone"></span>
                        </Icon>
                        <H4>Phone</H4>
                        <Paragraph>+55 (88) 98105-2862</Paragraph>
                    </Box>

                    <Box>
                        <Icon>
                            <span className="fa fa-envelope"></span>
                        </Icon>
                        <H4>Email</H4>
                        <Paragraph>maxsantistadickinson@gmail.com</Paragraph>
                    </Box>

                    <Box>
                        <Icon>
                            <span className="fa fa-map-marker"></span>
                        </Icon>
                        <H4>Location</H4>
                        <Paragraph>Russas, Ceará, Brazil</Paragraph>
                    </Box>
                </FooterContent>

                <Social>
                    <ul>
                        <li><a href="https://www.facebook.com/max.sousa.501" target="_blank"><span className="fa fa-facebook"></span></a></li>
                        <li><a href="https://www.linkedin.com/in/maxdickinson/" target="_blank"><span className="fa fa-linkedin"></span></a></li>
                        <li><a href="https://www.instagram.com/max_dickinson_/" target="_blank"><span className="fa fa-instagram"></span></a></li>
                        <li><a href="https://github.com/maxdickinsondev" target="_blank"><span className="fa fa-github"></span></a></li>
                        <li><a href="https://www.youtube.com/channel/UCGxj9W2avI5m48Zs-fDNI8Q/" target="_blank"><span className="fa fa-youtube"></span></a></li>
                    </ul>
                </Social>
            </Container>
        </FooterTag>
    );
}