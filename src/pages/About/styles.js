import styled from 'styled-components';

export const AboutSection = styled.section`
    float: left;
    width: 100%;
    padding: 80px 0px;
    background-color: #353535;
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
        top: 50%;
        background-color: #f3971b;
    }
`;

export const AboutContents = styled.div`
    width: 100%;
    float: left;
`;

export const Imgs = styled.div`
    float: left;
    width: 35%;
    padding: 15px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 100%;
    border: 10px solid #3c3c3c;
`;

export const Description = styled.div`
    float: left;
    width: 65%;
    padding: 15px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Name = styled.h4`
    font-size: 20px;
    color: #ffffff;
    margin: 0;
    padding-bottom: 10px;
    font-weight: 400px;
`;

export const Ocupation = styled.h5`
    font-size: 25px;
    color: #ffffff;
    margin: 0;
    padding-bottom: 10px;
    font-weight: 600;
`;

export const Text = styled.p`
    color: #c2c0c3;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: .5px;
    text-align: left;
    font-weight: 400;
`;

export const ButtonCV = styled.a`
    padding: 12px 40px;
    border-radius: 0;
    font-size: 16px;
    color: #ffffff;
    font-weight: 400;
    background-color: #f3971b;
    border: 1px solid transparent;
    letter-spacing: .5px;
    margin-right: 15px;
    margin-top: 20px;
    margin-bottom: 10px;
    transition: all .5s ease;
    cursor: pointer;

    &:hover {
        border: 1px solid #f3971b;
        color: #f3971b;
        background-color: transparent;
    }
`;
