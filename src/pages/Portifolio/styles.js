import styled from 'styled-components';

export const PortfolioTag = styled.section`
    float: left;
    width: 100%;
    padding: 80px 0px;
    background: #292929;
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

export const Content = styled.div`
    float: left;
    width: 100%;
`;

export const Card = styled.div`
    float: left;
    width: 33.33%;
    padding: 15px;

    @media (max-width: 767px) {
        width: 50%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const Box = styled.div`
    background: #353535;
    padding: 15px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0px;
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

export const H3 = styled.h3`
    margin: 0;
    padding: 15px 0 5px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: .5px;
`;

export const H4 = styled.h4`
    margin: 0;
    padding: 5px 0px 25px;
    color: #f3971b;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .5px;
`;

export const Image = styled.img`
    width: 100%;
    display: block;
`;