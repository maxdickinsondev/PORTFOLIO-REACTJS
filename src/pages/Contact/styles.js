import styled from 'styled-components';

export const ContactTag = styled.section`
    float: left;
    width: 100%;
    padding: 80px 15px;
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
        top: 50px;
        background-color: #f3971b;
    }
`;

export const ContactContent = styled.div`
    margin: auto;
    max-width: 200px;
    text-align: center;
`;

export const Form = styled.form``;

export const InputName = styled.input`
    height: 50px;
    border: none;
    border-left: 2px solid transparent;
    padding: 10px 15px;
    color: #ffffff;
    margin-bottom: 30px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 400;
    display: block;
    width: 100%;
    background-color: #292929;
    transition: border .5s ease;

    &:focus {
        border-color: #f3971b;
    }
`;

export const InputEmail = styled.input`
    height: 50px;
    border: none;
    border-left: 2px solid transparent;
    padding: 10px 15px;
    color: #ffffff;
    margin-bottom: 30px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 400;
    display: block;
    width: 100%;
    background-color: #292929;
    transition: border .5s ease;

    &:focus {
        border-color: #f3971b;
    }
`;

export const InputSubject = styled.input`
    height: 50px;
    border: none;
    border-left: 2px solid transparent;
    padding: 10px 15px;
    color: #ffffff;
    margin-bottom: 30px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 400;
    display: block;
    width: 100%;
    background-color: #292929;
    transition: border .5s ease;

    &:focus {
        border-color: #f3971b;
    }
`;

export const TextArea = styled.textarea`
    height: 100px;
    border: none;
    border-left: 2px solid transparent;
    padding: 10px 15px;
    color: #ffffff;
    margin-bottom: 30px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 400;
    display: block;
    width: 100%;
    background-color: #292929;
    transition: border .5s ease;

    &:focus {
        border-color: #f3871b;
    }
`;

export const ButtonSubmit = styled.a`
    display: block;
    margin: auto;
    padding: 12px 40px;
    border-radius: 0;
    font-size: 16px;
    color: #f3971b;
    background-color: transparent;
    font-weight: 400;
    border: 1px solid #f3971b;
    letter-spacing: .5px;
    transition: all .5s ease;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background-color: #f3971b;
    }
`;