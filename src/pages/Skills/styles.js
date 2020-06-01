import styled from 'styled-components';

export const SkillsTag = styled.section`
    float: left;
    width: 100%;
    padding: 80px 0px;
    background-color: #353535;
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: auto;
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

export const SkillsContent = styled.div`
    float: left;
    width: 100%;
`;

export const Card = styled.div`
    width: 50%;
    float: left;
    padding: 0px 15px;
    margin-bottom: 50px;

    @media (max-width: 991px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    display: block;
    text-align: left;
    margin: 15px 0;
`;

export const Progress = styled.div`
    height: 10px;
    width: 100%;
    border-radius: 4px;
    background-color: #292929;
    position: relative;
`;

export const Inner = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #f3971b;
    border-radius: 4px;
`;
