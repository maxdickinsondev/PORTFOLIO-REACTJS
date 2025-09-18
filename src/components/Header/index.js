import React, { useState, useEffect } from "react";

import {
  HeaderTag,
  Container,
  Logo,
  Span,
  NavBar,
  Ul,
  Sticky,
  Trigger,
} from "./styles";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  const [isClick, setClick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;

      if (isTop !== true) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  function openMenu(e) {
    e.preventDefault();

    setClick(!isClick);
  }

  if (sticky) {
    return (
      <>
        <Sticky>
          <Container>
            <Logo>
              <a href="">
                <Span>Max</Span>Dickinson
              </a>
            </Logo>

            <Trigger>
              <a href="#" onClick={(e) => openMenu(e)}>
                <span></span>
                <span></span>
              </a>
            </Trigger>

            <NavBar isClick={isClick}>
              <Ul>
                <li>
                  <a href="#home">Início</a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#services">Serviços</a>
                </li>
                <li>
                  <a href="#skills">Tecnologias</a>
                </li>
                <li>
                  <a href="#portfolio">Portifólio</a>
                </li>
                <li>
                  <a href="#contact">Contato</a>
                </li>
              </Ul>
            </NavBar>
          </Container>
        </Sticky>
      </>
    );
  } else {
    return (
      <HeaderTag>
        <Container>
          <Logo>
            <a href="">
              <Span>Max</Span>Dickinson
            </a>
          </Logo>

          <NavBar>
            <Ul>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#techs">Tecnologias</a>
              </li>
              <li>
                <a href="#portfolio">Portifólio</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </Ul>
          </NavBar>
        </Container>
      </HeaderTag>
    );
  }
}
