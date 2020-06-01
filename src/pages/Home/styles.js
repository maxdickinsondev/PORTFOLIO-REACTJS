import styled, { keyframes } from 'styled-components';

import bg from '../../assets/images/bg.jpg';

export const HomeTag = styled.section`
    min-height: 100vh;
    background-image: url(${bg});
    background-size: cover;
    float: left;
    width: 100%;
    padding: 0px 15px;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        background-color: #000000;
        opacity: 0.7;
    }
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: auto;

    @media (max-width: 991px) {
        max-width: 750px;
    }
`;

export const HomeText = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: auto;
    z-index: 10;

    @media (max-width: 767px) {
        left: 0;
        padding: 0px 15px;
    }
`;

const slideLeft = keyframes`
    0% { 
        transform: translateY(-100%); 
        opacity: 0;
    }
    100% { 
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideRight = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Name = styled.h1`
    font-size: 35px;
    color: #ffffff;
    margin: 10px 0px;
    font-weight: 400;
    animation: ${slideLeft} 1.5s ease;
`;

export const Skill = styled.h3`
    font-size: 60px;
    color: #f3971b;
    margin: 15px 0px 0px;
    font-weight: 700;
    animation: ${slideRight} 1.5s ease;

    @media (max-width: 767px) {
        font-size: 40px;
    }
`;

