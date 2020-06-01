import styled from 'styled-components';

export const ServicesTag = styled.section`
    float: left;
    width: 100%;
    padding: 80px 0px;
    background-color: #292929;
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: auto;

    @media (max-width: 991px) {
        max-width: 750px;
    }
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 70px;
    text-align: center;
    text-transform: uppercase;
    color: #f3971b;
    position: relative;
    letter-spacing: .5px;

    &:before {
        content: '';
        position: absolute;
        width: 80px;
        height: 2px;
        left: 50%;
        margin-left: -40px;
        top: 50px;
        background-color: #f3971b;
    }
`;

export const ServicesContent = styled.div`
    width: 100%;
    float: left;
`;

export const Card = styled.div`
    width: 33.33%;
    float: left;
    padding: 15px;

    @media (max-width: 767px) {
        width: 50%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const Box = styled.div`
    background-color: #353535;
    padding: 30px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0px;
        height: 3px;
        width: 0;
        background-color: #f3971b;
        z-index: 1;
        transition: width .5s ease;
    }

    &:hover:before {
        width: 100%;
    }
`;

export const Icon = styled.div`
    text-align: center;
    font-size: 40px;
    color: #f3971b;
`;

export const H3 = styled.h3`
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    margin: 20px 0 10px;
    font-weight: 600;
    
    @media (max-width: 991px) {
        min-height: 50px;
    }

    @media (max-width: 500px) {
        min-height: auto;
    }
`;

export const Paragraph = styled.p`
    color: #c2c2c2;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: .5px;
    text-align: center;
    font-weight: 400;
`;
